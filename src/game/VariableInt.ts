import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";

export class VariableInt extends Variable {
  OnChangeInt;

  constructor(v: BigNumber | number | string) {
    super(v);
  }

  get ValueInt() {
    return this._value.ToInt();
  }
  set ValueInt(value) {
    this._value = new BigNumber(value);
  }

  Reset(v) {
    return (this._value = v);
  }

  SetValue(v: BigNumber) {
    //   if (this.OnChangeAdd != null)
    //     this.OnChangeAdd( Math.max(0.0, (v - this._value)));
    this._value = v;
    //   if (this.OnChange == null)
    //     return;
    //   this.OnChange();
  }

  Change(addendum: BigNumber, multiplier: BigNumber = new BigNumber(1), isCallback = true) {
    // let num = this._value;

    this._value = BigNumber.Multiplication(BigNumber.Add(this._value, addendum), multiplier);
    //   if (!isCallback)
    //     return;
    //   if (this.OnChange != null)
    //     this.OnChange();
    //   if (this.OnChangeInt != null)
    //     this.OnChangeInt(this._value - num);
    //   if (this.OnChangeAdd == null)
    //     return;
    //   this.OnChangeAdd((this._value - num));
  }

  // Change(addendum: BigNumber, multiplier: BigNumber) {return this.Change(addendum.ToInt(), multiplier.ToInt());}
}
