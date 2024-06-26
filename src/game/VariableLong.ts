import { BigNumberSaveFile } from "@/type/BigNumberSaveFile";
import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";

export class VariableLong extends Variable {
  constructor(v: BigNumber | number | string | BigNumberSaveFile) {
    super(v);
  }

  get ValueInt() {
    console.log("s", this._value);
    return this._value.ToInt();
  }
  set ValueInt(value: number) {
    this._value = new BigNumber(value);
  }

  SetValue(v: BigNumber | number) {
    if (typeof v == "number") v = new BigNumber(v);
    this._value = v;
    if (this.OnChange == null) return;
    this.OnChange();
  }

  Change(ad: BigNumber, m: BigNumber = new BigNumber(1)) {
    let num = this._value.ToFloat();

    if (num > Number.MAX_VALUE - num) {
      this._value = new BigNumber(Number.MAX_VALUE);
    } else {
      this._value = BigNumber.Multiplication(BigNumber.Add(this._value, ad), m);
    }

    // if (this.OnChange != null)
    //   this.OnChange();
    // if (this.OnChangeInt != null)
    //   this.OnChangeInt((int) ((long) this._value - (long) num));
    // if (this.OnChangeAdd == null)
    //   return;
    // this.OnChangeAdd(new BigNumber((double) this._value) - new BigNumber((double) num));
  }
}
