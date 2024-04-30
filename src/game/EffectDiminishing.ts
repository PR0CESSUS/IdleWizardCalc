import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";
import { VariableBignumber } from "./VariableBignumber";

export class EffectDiminishing {
  efficiency: Variable;
  gilding: Variable;
  diminishing = 1;
  pow_diminishing = 1;
  preview_eff: VariableBignumber;
  prev_e: VariableBignumber;

  Apply() {}

  Delete() {}

  Update() {}

  SetEfficiency(eff: Variable = null) {
    if (this.diminishing == 0.0) return;
    this.efficiency = eff;
  }

  SetGilding(eff: Variable = null) {
    if (this.diminishing == 0.0) return;
    this.gilding = eff;
  }

  RecalculateEff() {
    if (this.efficiency == null) return;
    this.prev_e = this.GetEfficiency().Clone();
  }

  GetEfficiency() {
    if (this.preview_eff == null) this.preview_eff = new VariableBignumber(0);
    let bigNumber: BigNumber = new BigNumber(1);
    if (this.gilding != null) bigNumber = this.gilding.Value;
    if (this.efficiency != null) bigNumber = BigNumber.Multiplication(bigNumber, this.efficiency.Value);
    if (this.diminishing != 1.0) this.preview_eff.SetValue(new BigNumber(1.0 + this.diminishing * bigNumber.Log10()));
    else if (this.pow_diminishing != 1.0) this.preview_eff.SetValue(bigNumber.Pow(this.pow_diminishing));
    else this.preview_eff.SetValue(bigNumber);
    return this.preview_eff;
  }

  ApplyEfficiency(t: BigNumber) {
    if (this.efficiency != null) {
      this.GetEfficiency();
      t = BigNumber.Multiplication(t, this.preview_eff.Value);
    }
    return t;
  }

  Preview(key) {}
}
