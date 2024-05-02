import { BigNumber } from "./BigNumber";
import { SimpleEffect } from "./SimpleEffect";

export class AdditionalSpellEffect {
  effect: SimpleEffect;
  value;
  description;

  GetBonus(rank) {
    return new BigNumber(1.5).Pow(rank);
  }

  UpdateEffect(rank) {
    return (this.effect.mult = this.GetBonus(rank));
  }

  GetDescription(rankCurrent = 0, rankNext = 0) {
    let str1 = "Increases Character autoclick profits while active by #";
    if (rankNext == rankCurrent) return str1.replace("#", this.effect.Preview(""));
    let mult = this.effect.mult;
    let str2 = this.effect.Preview("");
    this.UpdateEffect(rankNext);
    let description = str1.replace("#", str2 + " -> " + this.effect.Preview(""));
    this.effect.mult = mult;
    return description;
  }

  // GetDescription() {return this.description.Replace("#", this.effect.Preview(""));}
}
