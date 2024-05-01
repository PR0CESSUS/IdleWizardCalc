import { BigNumberSaveFile } from "@/type/BigNumberSaveFile";
import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";

export class VariableComplex extends Variable {
  add: BigNumber;
  mult: BigNumber;
  OnChangeVector;

  constructor(value: BigNumber | number | string | BigNumberSaveFile) {
    super(value);

    this.add = new BigNumber(0);
    this.mult = new BigNumber(1);
  }

  get GetInternalValue() {
    return this._value;
  }

  get ValueFloat() {
    return this.Value.ToFloat();
  }

  get Value() {
    return BigNumber.Multiplication(BigNumber.Add(this._value, this.add), this.mult);
  }

  ChangeValue(a: BigNumber, m: BigNumber) {
    this._value = BigNumber.Add(this._value, a);
    this._value = BigNumber.Multiplication(this._value, m);
    if (this.OnChange != null) this.OnChange();
    if (this.OnChangeAdd != null) this.OnChangeAdd(a);
    if (this.OnChangeVector == null) return;
    this.OnChangeVector(a, m);
  }

  SetValue(v) {
    this._value = v;
    if (this.OnChange == null) return;
    this.OnChange();
  }

  debug() {
    return this._value + " " + this.add + " " + this.mult;
  }

  Reset(_v = null) {
    // if (_v) {
    //   this._value = _v;
    // } else {
    //   this._value = 0.0;
    // }
    // this.add = 0.0;
    // this.mult = 1.0;
  }

  // VariableComplex(BigNumber v) {
  //   this._value = v;
  //   this.add = (BigNumber) 0.0;
  //   this.mult = (BigNumber) 1.0;
  // }

  Change(addendum: BigNumber, multiplier: BigNumber) {
    this.add = BigNumber.Add(this.add, addendum);
    this.mult = BigNumber.Multiplication(this.mult, multiplier);
    if (this.OnChange != null) this.OnChange();
    if (this.OnChangeAdd != null) this.OnChangeAdd(addendum);
    if (this.OnChangeVector == null) return;
    this.OnChangeVector(addendum, multiplier);
  }

  ApplyModOnVar(target: BigNumber) {
    return BigNumber.Multiplication(BigNumber.Add(target, this.add), this.mult);
  }

  ApplyComponents(component) {
    // return (component + this._value + this.add) * this.mult;
  }

  Clone() {
    const clone = new VariableComplex(this._value);

    return clone;
  }
}
