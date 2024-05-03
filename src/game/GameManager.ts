import Buildings from "@/data/buildings.json";
import Dominance from "@/data/dominance.json";
import Empathy from "@/data/empathy.json";
import Insight from "@/data/insight.json";
import Intelligence from "@/data/intelligence.json";
import Mastery from "@/data/mastery.json";
import Patience from "@/data/patience.json";
import Spellcraft from "@/data/spellcraft.json";
import Upgrades from "@/data/upgrades.json";
import Wisdom from "@/data/wisdom.json";
import TrialMilestones from "@/data/TrialMilestones.json";
import Spells from "@/data/Spells.json";
import { GlobalData } from "@/game/GlobalData";
import { AttributeManager } from "./AttributeManager";
import { BuildingManager } from "./BuildingManager";
import { DefaultSaveFile } from "./DefaultSaveFile";
import { GameContext } from "./GameContext";
import { HeroSlot } from "./HeroSlot";
import { ManaManager } from "./ManaManager";
import { ScrollPanel } from "./ScrollPanel";
import { Statistic } from "./Statistic";
import { UpgradeManager } from "./UpgradeManager";
import { VariableComplex } from "./VariableComplex";
import { VoidMana } from "./VoidMana";
import { TrialManager } from "./TrialManager";
import { Orb } from "./Orb";
import { PetSlot } from "./PetSlot";
import { Idle } from "./Idle";
import { VariableInt } from "./VariableInt";
import { Reborn } from "./Reborn";
import { MovableBonusSpawner } from "./MovableBonusSpawner";
import { CardGameManager } from "./CardGameManager";
import { SpellBook } from "./SpellBook";
import { StatisticWindow } from "./StatisticWindow";
import { PantheonManager } from "./PantheonManager";
import { ResourceManager } from "./ResourceManager";
import { GildingManager } from "./GildingManager";
import { Paragons } from "./Paragons";
export class GameManager {
  public static Instance: GameManager;
  SaveFile: DefaultSaveFile;
  AttributeManager: AttributeManager;
  UpgradeManager: UpgradeManager;
  ManaManager: ManaManager;
  BuildingManager: BuildingManager;
  VoidManaManager: VoidMana;
  Profit: VariableComplex;
  OfflineProduction: VariableComplex;
  CurrentHero: HeroSlot;
  Scrolls: ScrollPanel;
  Trials: TrialManager;
  Orb: Orb;
  CurrentPet: PetSlot;
  Idle: Idle;
  LevelReduction: VariableInt;
  PPS: VariableComplex;
  Reborn: Reborn;
  MBSpawner: MovableBonusSpawner;
  CardGame: CardGameManager;
  SpellBook: SpellBook;
  Statistic: StatisticWindow;
  Pantheon: PantheonManager;
  Resources: ResourceManager;
  Gilding: GildingManager;
  Paragon: Paragons;

  constructor() {
    GameManager.Instance = this;
    this.SaveFile = JSON.parse(localStorage.getItem("IdleWizardSaveFileData"));
    if (this.SaveFile == null || this.SaveFile == undefined) this.SaveFile = new DefaultSaveFile();
    this.InitGlobalData();
    this.Profit = new VariableComplex(1); // normalnie 0
    this.OfflineProduction = new VariableComplex(1.0);
    this.LevelReduction = new VariableInt(0);
    this.PPS = new VariableComplex(0.0);
    Statistic.Init();
    GameContext.AddItems();
    GameContext.GenerateEffects();
    this.Paragon = new Paragons();
    this.Resources = new ResourceManager();
    this.Gilding = new GildingManager();
    this.Scrolls = new ScrollPanel();
    this.ManaManager = new ManaManager();
    this.VoidManaManager = new VoidMana();
    this.AttributeManager = new AttributeManager();
    this.CurrentPet = new PetSlot();
    this.UpgradeManager = new UpgradeManager();
    this.CurrentHero = new HeroSlot();
    this.BuildingManager = new BuildingManager();
    this.Trials = new TrialManager();
    this.Orb = new Orb();
    this.Idle = new Idle();
    this.Reborn = new Reborn();
    this.MBSpawner = new MovableBonusSpawner();
    this.CardGame = new CardGameManager();
    this.SpellBook = new SpellBook();
    this.Statistic = new StatisticWindow();
    this.Pantheon = new PantheonManager();

    // generate game resources

    // for (let index = 0; index < this.SaveFile.BuildingLevels.length; index++) GameContext.ContextAddBuilding(new Building(this.SaveFile.BuildingLevels[index], index));
  }

  get Buildings() {
    return this.BuildingManager.Buildings;
  }

  get VoidMana() {
    return this.VoidManaManager.Value;
  }

  get Mana() {
    return this.ManaManager.Mana;
  }

  Init() {
    this.BuildingManager.Init();
    this.VoidManaManager.Init();
    this.Idle.Init();
    GameContext.GenerateContext();
    GameContext.AddSpellContext();
    this.Trials.InitContext();
    this.CurrentHero.Init();
    this.SpellBook.Init();
    this.UpgradeManager.Init();
    this.AttributeManager.Init();

    this.UpgradeManager.InitUpgrade();
    this.CurrentHero.Hero.ApplyEffects();
    this.VoidManaManager.UpdateEffect();
    this.Trials.Init();
    this.Reborn.Init();
    this.BuildingManager.UpdateEffect();
    this.Pantheon.Init();
  }

  InitGlobalData() {
    GlobalData.Wisdom = Wisdom;
    GlobalData.Spellcraft = Spellcraft;
    GlobalData.Dominance = Dominance;
    GlobalData.Mastery = Mastery;
    GlobalData.Patience = Patience;
    GlobalData.Empathy = Empathy;
    GlobalData.Intelligence = Intelligence;
    GlobalData.Insight = Insight;
    GlobalData.Upgrades = Upgrades;
    GlobalData.Buildings = Buildings;
    GlobalData.Spells = Spells;
    GlobalData.TrialMilestones = TrialMilestones;
  }
}
