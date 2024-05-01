import { GameContext } from "./GameContext";
import { VariableBignumber } from "./VariableBignumber";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";
import { VariableLong } from "./VariableLong";

export class CardGameManager {
  public static instance: CardGameManager;
  // Combat: Combat;
  // SkillMap: SkillMap;
  // SkillPanel: SkillPanel;
  // Map: LocationManager;
  // Inventory: Inventory;
  // Loot: LootSystem;
  // SkillVE: SkillVEController;
  // SkillSfx: SkillSfxMap;
  // Deckbuilding: Deckbuilding;
  // Voidmana: VoidManaManager;
  Level: VariableInt;
  StatisticInfo: StatisticInfo;
  Autofight: Autofight;
  Keys: KeyManager;
  constructor() {
    CardGameManager.instance = this;

    this.Level = new VariableInt(1);
    this.Autofight = new Autofight();
    this.Keys = new KeyManager();
    this.Autofight.IdleSpeed = new VariableFloat(1);
    this.Autofight.IdleLockedSpeed = new VariableFloat(1);
    this.Autofight.IdleEncounter = new VariableInt(0);
    this.Autofight.IdleWinChance = new VariableFloat(0.0);
    this.StatisticInfo = new StatisticInfo();
    // this.LoadJson();
    // this.SkillMap = new SkillMap();
    // this.SkillMap.Init();
    // this.SkillPanel.Init();
    // this.Map.Init();
    // this.Combat.GetCharacter().Init();
    // this.Voidmana.Init((Unit) this.Combat.GetCharacter());
    // this.EndFight();
    // this.Loot.Init();
    // this.Deckbuilding.Init();
    // this.Keys.Init();
    // this.CheckDeckButton();
    GameContext.ContextAddResource("Expedition.Level", this.Level);
    GameContext.ContextAddResource("Expedition.Monsters", this.StatisticInfo.Monsters);
    GameContext.ContextAddResource("Expedition.MonstersRealm", this.StatisticInfo.MonstersRealm);
    // GameContext.ContextAddResource("Expedition.MaxStage", this.Map.maxReached);
    GameContext.ContextAddResource("Expedition.IdleSpeed", this.Autofight.IdleSpeed);
    GameContext.ContextAddResource("Expedition.IdleLockedSpeed", this.Autofight.IdleLockedSpeed);
    GameContext.ContextAddResource("Expedition.IdleEncounters", this.Autofight.IdleEncounter);
    GameContext.ContextAddResource("Expedition.IdleWinChance", this.Autofight.IdleWinChance);
    GameContext.ContextAddResource("Expedition.KeyDrop", this.Keys.KeyIncome);
    GameContext.ContextAddResource("Expedition.KeyTotal", this.Keys.keyCounter);
    // GameContext.ContextAddResource("Expedition.RewardSize", this.Loot.RewardSize);
  }
}

export class StatisticInfo {
  Monsters: VariableLong;
  MonstersRealm: VariableLong;

  constructor() {
    this.Monsters = new VariableLong(0);
    this.MonstersRealm = new VariableLong(0);
  }
}

export class Autofight {
  IdleSpeed: VariableFloat;
  IdleLockedSpeed: VariableFloat;
  IdleEncounter: VariableInt;
  IdleWinChance: VariableFloat;

  constructor() {}
}

export class KeyManager {
  KeyIncome: VariableFloat;
  keyCounter: VariableBignumber;

  constructor() {
    this.KeyIncome = new VariableFloat(1);
    this.keyCounter = new VariableBignumber(0.0);
  }
}
