import { BigNumber } from "./BigNumber";
import { GameManager } from "./GameManager";
import { Orb } from "./Orb";
import { VariableComplex } from "./VariableComplex";

export class CritRatingCalculations {
  crit_rating: VariableComplex;
  prev_chance_bonus: BigNumber;
  prev_profit_bonus: BigNumber;
  orb: Orb;
  changed;

  constructor() {
    this.crit_rating = new VariableComplex(0.0);
    this.prev_chance_bonus = new BigNumber(0.0);
    this.prev_profit_bonus = new BigNumber(0.0);
    this.orb = GameManager.Instance.Orb;
    //   VariableComplex critRating = this.crit_rating;
    //   critRating.OnChange = critRating.OnChange + new Action(this.MarkForChange);
    //   VariableComplex critChance = this.orb.crit_chance;
    //   critChance.OnChange = critChance.OnChange + new Action(this.MarkForChange);
  }

  Recalculate() {
    //   if (this.prev_chance_bonus != 0.0)
    //     this.orb.crit_chance.Change(-this.prev_chance_bonus, 1.0);
    //   if (this.prev_profit_bonus != 0.0)
    //     this.orb.crit_profit.Change(-this.prev_profit_bonus, 1.0);
    //   if (this.crit_rating.Value <= 1.0) {
    //     this.prev_chance_bonus = this.prev_profit_bonus = 0.0;
    //     this.crit_rating.SetValue(0.0);
    //   }
    //   else {
    //     this.prev_chance_bonus = (this.crit_rating.Value + 1.0).Log10();
    //     BigNumber bigNumber1 = 0.0;
    //     if (this.orb.crit_chance.Value + this.prev_chance_bonus > 100.0) {
    //       BigNumber bigNumber2 = this.orb.crit_chance.Value + this.prev_chance_bonus - 100.0;
    //       this.prev_chance_bonus = !(this.orb.crit_chance.Value >= 100.0) ? 100.0 - this.orb.crit_chance.Value : 0.0;
    //     }
    //     this.prev_profit_bonus = this.crit_rating.Value / 100.0;
    //     this.orb.crit_chance.Change(this.prev_chance_bonus, 1.0);
    //     this.orb.crit_profit.Change(this.prev_profit_bonus, 1.0);
    //   }
  }

  Update() {
    if (!this.changed) return;
    this.Recalculate();
    this.changed = false;
  }

  MarkForChange() {
    return (this.changed = true);
  }

  Restart() {
    //   this.crit_rating.Reset(0.0);
    //   this.prev_chance_bonus = this.prev_profit_bonus = 0.0;
  }
}
