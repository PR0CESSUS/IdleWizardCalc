import { BigNumber } from "./BigNumber";
import { ConditionUnlock } from "./ConditionUnlock";
import { StringBuilder } from "./StringBuilder";
import { Variable } from "./Variable";

export class ConditionUnlockVariable extends ConditionUnlock {
  param: Variable;
  ext_des: boolean;
  display_des: boolean;

  constructor(par: Variable, arg: string, des: string, calculate_des = true, show_progress = true) {
    super();
    this.argument = new BigNumber(arg);
    this.Description = des;
    this.ext_des = calculate_des;
    this.display_des = show_progress;
    this.param = par;
  }

  Check() {
    return this.param != null && BigNumber.BiggerOrEqualThan(this.param.Value, BigNumber.Subtract(this.argument, 1 / 1000));
  }

  GetParameter() {
    return this.param;
  }

  Preview(show_progress = true, show_complete = true) {
    let str = this.Description + " ";
    if (show_progress) {
      if (this.param != null) {
        if (this.param.Value >= this.argument) {
          if (this.ext_des) str += this.argument.ToReadableString("F0");
          if (show_complete) str += " complete";
        } else {
          let stringBuilder = new StringBuilder();
          if (this.ext_des) {
            stringBuilder.Append(this.param.Value.ToReadableString("F0"));
            stringBuilder.Append(" / ");
            stringBuilder.Append(this.argument.ToReadableString("F0"));
          }
          if (this.display_des) {
            let bigNumber =
              this.argument.Exponent < 6
                ? BigNumber.Division(this.param.Value, this.argument)
                : !(this.param.Value.ToInt() > 1.0)
                ? 0.0
                : this.param.Value.Log10() / this.argument.Log10();
            stringBuilder.Append(" (");
            stringBuilder.Append(BigNumber.Multiplication(bigNumber, 100.0).ToReadableString());
            stringBuilder.Append("%)");
          }
          str += stringBuilder.ToString();
        }
      }
    } else if (this.display_des) str += this.argument.ToReadableString();
    return str;
  }
}
