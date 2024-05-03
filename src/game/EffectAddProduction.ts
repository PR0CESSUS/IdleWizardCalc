import { BigNumber } from "./BigNumber";
import { EffectInstant } from "./EffectInstant";
import { GameManager } from "./GameManager";
import { Statistic } from "./Statistic";
import { Variable } from "./Variable";

export class EffectAddProduction extends EffectInstant {
  k = 1.0;
  critChance: number;
  critProfit = 1;
  refreshPps: boolean;

  constructor(t: number, a: BigNumber | number = 0, m: BigNumber | number = 1, w: Variable = null, crit = 0, crit_profit = 1, refreshPps = false) {
    super();
    this.time = t;
    this.a = a instanceof BigNumber ? a : new BigNumber(a);
    this.m = m instanceof BigNumber ? m : new BigNumber(m);
    this.w = w;
    this.critChance = crit;
    this.critProfit = crit_profit;
    this.refreshPps = refreshPps;
  }

  Apply() {
    //   if (this.refreshPps)
    //     GameManager.Instance.AddProfit(0.0);
    //   GameManager.Instance.ManaChange(this.GetValue());
  }

  GetValue() {
    let bigNumber = BigNumber.Multiplication(this.ApplyW(this.time), 1.0 + this.k);
    //TODO ADD Crit Chance
    //   if (this.critChance != 0.0 && Random.Range(0.0, 1) < this.critChance * GameManager.Instance.Orb.GetCritChange)
    //     bigNumber *= 1.0 + this.critProfit * GameManager.Instance.Orb.crit_profit.Value;
    return BigNumber.Multiplication(GameManager.Instance.PPS.Value, bigNumber);
  }

  Preview(key = "") {
    let bigNumber = BigNumber.Multiplication(this.ApplyW(this.time), 1.0 + this.k);
    switch (key) {
      case "t":
        return bigNumber.ToInt() > 1.8446744073709552e19 ? bigNumber.ToReadableString("F0") + " sec" : Statistic.time_to_string(bigNumber);
      case "m":
        if (this.critChance > 0.0) bigNumber = BigNumber.Multiplication(bigNumber, BigNumber.Multiplication(this.critProfit, GameManager.Instance.Orb.crit_profit.Value));
        return BigNumber.Multiplication(GameManager.Instance.PPS.Value, bigNumber).ToReadableString("F0");
      default:
        return "+" + BigNumber.Multiplication(GameManager.Instance.PPS.Value, bigNumber).ToReadableString("F0");
    }
  }
}
