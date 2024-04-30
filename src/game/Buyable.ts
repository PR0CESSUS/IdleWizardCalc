import { BigNumber } from "./BigNumber";
import { VariableComplex } from "./VariableComplex";

export class Buyable {
  Cost: BigNumber;
  base_cost: VariableComplex;
  base_cost_string;

  get CostBase() {
    if (this.base_cost == null) {
      this.base_cost = new VariableComplex(this.base_cost_string);
      this.Cost = this.base_cost.Value;
    }
    return this.base_cost.Value;
  }
  set CostBase(value) {
    this.base_cost.SetValue(value);
  }

  Buy(action) {
    //   let  bigNumber = -this.Cost;
    //   this.OnBuy();
    //   action(bigNumber);
  }

  OnBuy() {}
}
