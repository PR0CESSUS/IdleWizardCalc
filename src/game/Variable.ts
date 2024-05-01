import { BigNumberSaveFile } from "../type/BigNumberSaveFile";
import { BigNumber } from "./BigNumber";

export class Variable {
  _value: BigNumber;
  OnChange;
  OnChangeAdd;

  constructor(v: BigNumber | number | string | BigNumberSaveFile) {
    if (v instanceof BigNumber) {
      this._value = v;
    } else {
      this._value = new BigNumber(v);
    }
  }

  get Value() {
    return this._value;
  }

  SetValue(value: BigNumber) {}

  Change(addendum: BigNumber | number, multiplier: BigNumber | number) {}
}
