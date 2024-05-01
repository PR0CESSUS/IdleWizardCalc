import { BigNumberSaveFile } from "@/type/BigNumberSaveFile";
import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";

export class VariableBignumber extends Variable {
  constructor(value: BigNumber | number | string | BigNumberSaveFile) {
    super(value);
  }

  SetValue(v: BigNumber | number | string | BigNumberSaveFile) {
    if (v instanceof BigNumber) {
      this._value = v;
    } else {
      this._value = new BigNumber(v);
    }

    if (this.OnChange == null) return;
    this.OnChange();
  }

  Reset(v: BigNumber) {
    this._value = v;
    if (this.OnChange == null) return;
    this.OnChange();
  }

  Change(addendum: BigNumber, multiplier: BigNumber = new BigNumber(1)) {
    let bigNumber: BigNumber = this._value;
    this._value = BigNumber.Multiplication(BigNumber.Add(this._value, addendum), multiplier);
    if (this.OnChange != null) this.OnChange();
    if (this.OnChangeAdd == null) return;
    this.OnChangeAdd(BigNumber.Subtract(this._value, bigNumber));
  }

  // Change(addendum: BigNumber) {
  //   this._value += addendum;
  //   if (this.OnChange != null)
  //     this.OnChange();
  //   if (this.OnChangeAdd == null)
  //     return;
  //   this.OnChangeAdd(addendum);
  // }

  Clone() {
    return new VariableBignumber(this._value);
  }
}
