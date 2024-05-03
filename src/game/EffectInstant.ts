import { BigNumber } from "./BigNumber";
import { EffectDiminishing } from "./EffectDiminishing";
import { Variable } from "./Variable";

export class EffectInstant extends EffectDiminishing {
  time = 20;
  a: BigNumber;
  m: BigNumber;
  w: Variable;

  ApplyW(t: BigNumber | number) {
    t = t instanceof BigNumber ? t : new BigNumber(t);
    if (this.w != null)
      t = BigNumber.Multiplication(BigNumber.Add(t, BigNumber.Multiplication(this.a, this.w.Value)), BigNumber.Add(1, BigNumber.Multiplication(this.m, this.w.Value)));

    return this.ApplyEfficiency(t);
  }
}
