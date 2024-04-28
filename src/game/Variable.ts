import { BigNumber } from "./BigNumber";

export class Variable {
  _value: BigNumber;
  OnChange;
  OnChangeAdd;

  constructor(value: BigNumber) {
    if (typeof value == "number") {
      this._value = new BigNumber(value);
    } else {
      this._value = value;
    }
  }

  get Value() {
    return this._value;
  }

  SetValue(value: BigNumber) {}

  Change(addendum: BigNumber, multiplier: BigNumber) {}
}
