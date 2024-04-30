import { AttributeManager } from "./AttributeManager";
import { DefaultSaveFile } from "./DefaultSaveFile";
import { GameContext } from "./GameContext";
import { UpgradeManager } from "./UpgradeManager";
import { VariableComplex } from "./VariableComplex";
import { VoidMana } from "./VoidMana";
import { GlobalData } from "@/game/GlobalData";
import Wisdom from "@/data/wisdom.json";
import Spellcraft from "@/data/spellcraft.json";
import Dominance from "@/data/dominance.json";
import Mastery from "@/data/mastery.json";
import Patience from "@/data/patience.json";
import Empathy from "@/data/empathy.json";
import Intelligence from "@/data/intelligence.json";
import Buildings from "@/data/buildings.json";
import Insight from "@/data/insight.json";
import Upgrades from "@/data/upgrades.json";
import { HeroSlot } from "./HeroSlot";
import { ManaManager } from "./ManaManager";
import { BuildingManager } from "./BuildingManager";
import { Statistic } from "./Statistic";
import { BigNumber } from "./BigNumber";
import { ScrollPanel } from "./ScrollPanel";
export class GameManager {
  public static Instance: GameManager;
  SaveFile: DefaultSaveFile;
  AttributeManager: AttributeManager;
  UpgradeManager: UpgradeManager;
  ManaManager: ManaManager; //TODO ManaManager
  BuildingManager: BuildingManager;
  VoidManaManager: VoidMana;
  Profit: VariableComplex;
  CurrentHero: HeroSlot;
  Scrolls: ScrollPanel;
  VoidMana;
  TEST = new BigNumber(4);

  constructor() {
    GameManager.Instance = this;
    this.SaveFile = JSON.parse(localStorage.getItem("IdleWizardSaveFileData"));
    if (this.SaveFile == null || this.SaveFile == undefined) this.SaveFile = new DefaultSaveFile();
    this.InitGlobalData();
    Statistic.Init();

    GameContext.GenerateEffects();

    this.VoidManaManager = new VoidMana();
    this.AttributeManager = new AttributeManager();
    this.UpgradeManager = new UpgradeManager();
    this.CurrentHero = new HeroSlot();
    this.Scrolls = new ScrollPanel();
    this.BuildingManager = new BuildingManager();
    // generate game resources

    // for (let index = 0; index < this.SaveFile.BuildingLevels.length; index++) GameContext.ContextAddBuilding(new Building(this.SaveFile.BuildingLevels[index], index));

    this.Init();
  }

  get Buildings() {
    return this.BuildingManager.Buildings;
  }

  Init() {
    this.Profit = new VariableComplex(1); // normalnie 0
    GameContext.GenerateContext();
    this.Scrolls.Init();
    this.CurrentHero.Init();
    this.BuildingManager.Init();
    this.UpgradeManager.Init();
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
