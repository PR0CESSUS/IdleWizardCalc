import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";

export class VariableFloat extends Variable {
  constructor(value) {
    super(value);
  }
  get ValueFloat() {
    return this._value;
  }
  set ValueFloat(value) {
    this._value = value;
  }

  // SetValue(value: BigNumber) {return this.SetValue(value.ToFloat());}

  SetValue(v) {
    //   this._value = v;
    //   if (this.OnChange == null)
    //     return;
    //   this.OnChange();
  }

  // Change(ad) {
  //   this._value += ad;
  //   if (this.OnChange != null)
  //     this.OnChange();
  //   if (this.OnChangeAdd == null)
  //     return;
  //   this.OnChangeAdd((BigNumber) ad);
  // }

  Change(addendum: BigNumber, multiplier: BigNumber = new BigNumber(1)) {
    let num = this._value;
    this._value = BigNumber.Multiplication(BigNumber.Add(this._value, addendum), multiplier);
    if (this.OnChange != null) this.OnChange();
    if (this.OnChangeAdd == null) return;

    this.OnChangeAdd(BigNumber.Subtract(this._value, num));
  }

  // Change(addendum: BigNumber, multiplier: BigNumber) {return this.Change(addendum.ToDouble(), multiplier.ToDouble());}
}
