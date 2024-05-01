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
export class GameManager {
  public static Instance: GameManager;
  SaveFile: DefaultSaveFile;
  AttributeManager: AttributeManager;
  UpgradeManager: UpgradeManager;
  ManaManager: ManaManager; //TODO ManaManager
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

    this.VoidManaManager = new VoidMana();
    this.AttributeManager = new AttributeManager();
    this.CurrentPet = new PetSlot();
    this.UpgradeManager = new UpgradeManager();
    this.CurrentHero = new HeroSlot();
    this.Scrolls = new ScrollPanel();
    this.BuildingManager = new BuildingManager();
    this.Trials = new TrialManager();
    this.Orb = new Orb();
    this.Idle = new Idle();
    this.Reborn = new Reborn();
    this.MBSpawner = new MovableBonusSpawner();
    this.CardGame = new CardGameManager();

    // generate game resources

    // for (let index = 0; index < this.SaveFile.BuildingLevels.length; index++) GameContext.ContextAddBuilding(new Building(this.SaveFile.BuildingLevels[index], index));

    this.Init();
  }

  get Buildings() {
    return this.BuildingManager.Buildings;
  }

  get VoidMana() {
    return this.VoidManaManager.Value;
  }

  Init() {
    this.BuildingManager.Init();
    this.VoidManaManager.Init();
    this.Idle.Init();
    GameContext.GenerateContext();
    this.Trials.InitContext();
    this.Scrolls.Init();
    this.CurrentHero.Init();
    this.UpgradeManager.Init();

    this.UpgradeManager.InitUpgrade();
    this.CurrentHero.Hero.ApplyEffects();
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
  }
}
