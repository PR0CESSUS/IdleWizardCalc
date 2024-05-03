import { GameContext } from "./GameContext";
import { GameManager } from "./GameManager";
import { TrialBonuses } from "./TrialBonuses";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";

export class TrialManager {
  Keys: VariableInt;
  Completed: VariableInt;
  CompletedValue: VariableBignumber;
  CompletedBonus: VariableFloat;
  CompletedStartedBonus: VariableInt;
  TotalCompleted: VariableInt;
  TimeReduction: VariableComplex;
  TimeFlatReduction: VariableFloat;
  RewardSize: VariableComplex;
  AdditionalRewardSize: VariableComplex;
  AdditionalRewardCrit: VariableFloat;
  maxRunes: VariableInt;
  apTimeReduction: VariableInt;
  ResearchSpeed: VariableFloat;
  Milestones: VariableInt;
  MilestonesCap: VariableInt;
  tries: number;
  bonuses: TrialBonuses;
  // RewardList: TrialRewardList;
  // QuestManager: QuestManager;

  constructor() {
    this.bonuses = new TrialBonuses();
  }

  GetCompleted() {
    return Math.floor((this.Completed.ValueInt + this.CompletedStartedBonus.ValueInt) * this.CompletedBonus.ValueFloat);
  }

  Init() {
    this.bonuses.Init();
  }

  InitContext() {
    this.Keys = new VariableInt(GameManager.Instance.SaveFile.Trial.keys);
    this.Completed = new VariableInt(GameManager.Instance.SaveFile.Trial.completed);
    this.CompletedBonus = new VariableFloat(1);
    this.CompletedStartedBonus = new VariableInt(0);
    this.CompletedValue = new VariableBignumber(this.GetCompleted());
    this.TotalCompleted = new VariableInt(GameManager.Instance.SaveFile.Trial.totalCompleted);
    this.Milestones = new VariableInt(0);
    this.MilestonesCap = new VariableInt(400);
    this.RewardSize = new VariableComplex(1.0);
    this.TimeReduction = new VariableComplex(1.0);
    this.TimeFlatReduction = new VariableFloat(0.0);
    this.AdditionalRewardSize = new VariableComplex(1.0);
    this.AdditionalRewardCrit = new VariableFloat(0.0);
    this.apTimeReduction = new VariableInt(0);
    this.maxRunes = new VariableInt(10);
    this.ResearchSpeed = new VariableFloat(1);
    this.tries = GameManager.Instance.SaveFile.Trial.tries;
    this.AddToContext();
  }

  AddToContext() {
    GameContext.ContextAddResource("Trial.Key", this.Keys);
    GameContext.ContextAddResource("Trial.Reward", this.RewardSize);
    GameContext.ContextAddResource("Trial.ARew", this.AdditionalRewardSize);
    GameContext.ContextAddResource("Trial.KeyCap", this.maxRunes);
    GameContext.ContextAddResource("Trial.TimeReduction", this.TimeReduction);
    GameContext.ContextAddResource("Trial.TimeFlatReduction", this.TimeFlatReduction);
    GameContext.ContextAddResource("Trial.Completed", this.Completed);
    GameContext.ContextAddResource("Trial.CompletedBonus", this.CompletedBonus);
    GameContext.ContextAddResource("Trial.CompleteStart", this.CompletedStartedBonus);
    GameContext.ContextAddResource("Trial.CompletedValue", this.CompletedValue);
    GameContext.ContextAddResource("Trial.TotalCompleted", this.TotalCompleted);
    GameContext.ContextAddResource("Trial.APReduction", this.apTimeReduction);
    GameContext.ContextAddResource("Trial.ARCrit", this.AdditionalRewardCrit);
    GameContext.ContextAddResource("Trial.Milestones", this.Milestones);
    GameContext.ContextAddResource("Trial.MilestonesCap", this.MilestonesCap);
    GameContext.ContextAddResource("Trial.InnovationSpeed", this.ResearchSpeed);
  }
}
