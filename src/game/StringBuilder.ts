import { BigNumber } from "./BigNumber";

export class StringBuilder {
  private _str = "";

  constructor() {}

  Append(str: string | BigNumber | number) {
    if (str instanceof BigNumber) {
      this._str += `<span class="orange">${str.ToStringPercent()}</span>`;
    } else {
      this._str += str;
    }
  }

  AppendLine(str: string | number = "") {
    this._str += str + "<br>";
  }

  ToString() {
    return this._str;
  }
}
