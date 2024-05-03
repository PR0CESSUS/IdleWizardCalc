import { GameContext } from "./GameContext";
import { GameManager } from "./GameManager";
import { GlobalData } from "./GlobalData";
import { SimpleEffect } from "./SimpleEffect";
import { StringBuilder } from "./StringBuilder";
import { TrialMilestone } from "./TrialMilestone";
import { VariableBignumber } from "./VariableBignumber";

export class TrialBonuses {
  Passive: SimpleEffect;
  Milestones: TrialMilestone;
  bonusPower: VariableBignumber;
  subscribed;

  Init() {
    this.bonusPower = new VariableBignumber(0.05000000074505806);
    this.Passive = SimpleEffect.Create(GameManager.Instance.Reborn.SoulPower, 0, this.bonusPower.Value, GameManager.Instance.Trials.CompletedValue);
    this.Passive.Apply();
    // console.log(this.Passive, GameManager.Instance.Trials.CompletedValue);

    //   VariableBignumber bonusPower = this.bonusPower;
    //   bonusPower.OnChange = bonusPower.OnChange + new Action(this.UpdateBonus);
    //   VariableBignumber completedValue = GameManager.Instance.Trials.CompletedValue;
    //   completedValue.OnChange = completedValue.OnChange + new Action(((EffectDiminishing) this.Passive).Update);
    GameContext.ContextAddResource("Trial.BonusPower", this.bonusPower);
    this.InitAll();
    this.UpdateList();
  }

  Preload() {
    this.Passive.Delete();
    this.Milestones.Reset();
    this.UnSub();
  }

  Postlaod() {
    this.UpdateList();
    this.Passive.Apply();
    this.Sub();
  }

  Sub() {
    //   if (this.subscribed)
    //     return;
    //   let completedValue = GameManager.Instance.Trials.CompletedValue;
    //   completedValue.OnChange = completedValue.OnChange + new Action(this.UpdateList);
    //   this.subscribed = true;
  }

  UnSub() {
    //   if (!this.subscribed)
    //     return;
    //   let completedValue = GameManager.Instance.Trials.CompletedValue;
    //   completedValue.OnChange = completedValue.OnChange - new Action(this.UpdateList);
    //   this.subscribed = false;
  }

  RealmReset() {
    this.Passive.Delete();
    this.Milestones.Reset();
    this.Postlaod();
  }

  GetNext() {
    return this.Milestones.Level >= this.Milestones.GetCount() ? null : this.Milestones.List[this.Milestones.Level];
  }

  UpdateList() {
    this.Milestones.Check();
  }

  GetSummary() {
    let stringBuilder = new StringBuilder();
    stringBuilder.Append("Mysteries power increased by ");
    stringBuilder.AppendLine(this.Passive.Preview(""));
    //   stringBuilder.Append(this.Milestones.GetSummary());
    return stringBuilder.ToString();
  }

  UpdateBonus() {
    this.Passive.mult = this.bonusPower.Value;
    this.Passive.Update();
  }

  InitAll() {
    this.Milestones = new TrialMilestone(GlobalData.TrialMilestones);
    this.Milestones.Target = GameManager.Instance.Trials.Milestones;
    this.Milestones.Max = GameManager.Instance.Trials.MilestonesCap;
  }
}
