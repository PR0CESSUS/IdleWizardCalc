import { BigNumber } from "./BigNumber";

export class Spec {
  Name: string;
  Skills;
  Description: string;
  Unlocked: boolean;
  Conditions2Unlock;
  Conditions2Reqs;
  Tier = 1;
  level_req = 1;
  LevelReq = 1;

  // LevelReq {
  //   get {
  //     levelReq = this.level_req - GameManager.Instance.LevelReduction.ValueInt;
  //     if (levelReq < 1)
  //       levelReq = 1;
  //     levelReq: return;
  //   }
  //   set => this.level_req = value;
  // }

  Init() {
    //   this.Conditions2Unlock = new List<ConditionUnlock>();
    //   this.Conditions2Reqs = (List<ConditionUnlock>) null;
  }

  Restart() {}

  ApplyEffects() {}

  DisableAll() {}

  CheckConditions() {
    //   flag = true;
    //   foreach (conditionUnlock: ConditionUnlock in this.Conditions2Unlock) {
    //     if (!conditionUnlock.Check()) {
    //       flag = false;
    //       break;
    //     }
    //   }
    //   flag: return;
  }

  GetBonusAdditive(bonus: BigNumber, format = "F2") {
    return bonus.ToReadableString();
  }

  // GetBonusAdditive(bonus) {return Settings.ColoredTips ? "<color=#e2b018>" + bonus.ToString("F0") + "</color>" : bonus.ToString("F0");}

  // GetBonusMult(bonus: BigNumber = new BigNumber(1)) {
  //   return BigNumber.Subtract(bonus, BigNumber.Multiplication(new BigNumber(1.0), new BigNumber(100))).ToString() + "%";
  // }

  // GetNegativeBonusMult(bonus: BigNumber) {return Settings.ColoredTips ? "<color=#e2b018>" + bonus.ToFullScientific() + " times</color>" : bonus.ToFullScientific() + " times";}

  GetAbilityTime(time) {
    // let str = time <= 1.0 ? time.ToString("F2") : Statistic.time_to_string( time);
    // return Settings.ColoredTips ? "<color=#e2b018>" + str + "</color>" : str;
  }
}
