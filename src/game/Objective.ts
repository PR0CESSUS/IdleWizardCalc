import { ConditionUnlockVariable } from "./ConditionUnlockVariable";
import { SimpleEffect } from "./SimpleEffect";
import { Variable } from "./Variable";

export class Objective {
  Level;
  Name;
  Requirement: ConditionUnlockVariable;
  Reward: SimpleEffect;
  RewardDescription;
  IsActive: boolean;
  Unlocked: boolean;
  IsCurrent: boolean;

  constructor(lvl, variable: Variable, param, reqDescription, rewDescription) {
    this.Level = lvl;
    this.Requirement = new ConditionUnlockVariable(variable, param, reqDescription);
    this.Reward = null;
    this.RewardDescription = rewDescription;
    this.IsActive = false;
  }

  Check() {
    if (this.Requirement == null) {
      this.Unlocked = false;
      return false;
    }
    this.Unlocked = this.Requirement.Check();
    return this.Unlocked;
  }

  Apply() {
    if (this.IsActive || this.Reward == null) return;
    this.Reward.Apply();
    this.IsActive = true;
    this.IsCurrent = false;
  }

  Reset() {
    this.Unlocked = false;
    this.Delete();
  }

  Delete() {
    if (!this.IsActive || this.Reward == null) return;
    this.Reward.Delete();
    this.IsActive = false;
    this.IsCurrent = false;
  }

  Preview() {
    let str = this.RewardDescription;
    if (this.Reward != null) str = str.Replace("#", this.Reward.Preview("")).Replace("&", this.Reward.Preview("%")).Replace("@", this.Reward.Preview("@"));
    return str;
  }

  GetRequirements() {
    return this.Requirement.Preview(true, false);
  }

  SetCurrent() {
    return (this.IsCurrent = true);
  }

  ResetCurrent() {
    return (this.IsCurrent = false);
  }
}
