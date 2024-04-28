import { BigNumber } from "./BigNumber";
import { Effect } from "./Effect";
import { Variable } from "./Variable";

export class EffectFactory {
  public static Create(apply, delete2, preview = null) {
    return new Effect(apply, delete2, preview);
  }

  public static effect_action(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {}

  public static Linear(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    // console.log("start linear", v, a, m, w, e);

    if (e != null) {
      if (BigNumber.IsEqual(m, new BigNumber(1)) || BigNumber.IsEqual(m, new BigNumber(0))) a = BigNumber.Multiplication(a, e.Value);
      else m = BigNumber.Multiplication(m, e.Value);
    }
    if (w == null) v.Change(a, m);
    else v.Change(BigNumber.Multiplication(a, w.Value), BigNumber.Add(new BigNumber(1.0), BigNumber.Multiplication(m, w.Value)));
  }

  public static LinearDelete(v: Variable, a, m, w: Variable, e: Variable = null) {
    // if (e != null) {
    //   if (m == 1.0 || m == 0.0) a *= e.Value;
    //   else m *= e.Value;
    // }
    // if (w == null) {
    //   if (m == 0.0) console.log("/0 v= " + v + v.Value);
    //   else v.Change(-a, 1.0 / m);
    // } else if (1.0 + m * w.Value == 0.0) console.log("ayayaayaya");
    // else v.Change(-a * w.Value, 1.0 / (1.0 + m * w.Value));
  }

  public static LinearPreview(a: BigNumber, m: BigNumber, w: Variable = null, e: Variable = null, asnumber: boolean = false) {
    if (e != null) {
      if (BigNumber.IsEqual(m, new BigNumber(1)) || BigNumber.IsEqual(m, new BigNumber(0))) a = BigNumber.Multiplication(a, e.Value);
      else m = BigNumber.Multiplication(m, e.Value);
    }
    let str = "";
    if (!asnumber) {
      //   if (!BigNumber.IsEqual(a, new BigNumber(0)))
      //     str = w != null ? str + BigNumber.Multiplication(a, w.Value).ToReadableString("F0") : str + a.ToReadableString("F0");
      //   if (m != 1.0 && w == null || m != 0.0 && w != null)
      //     str = w != null ? str + (m * w.Value * 100.0).ToReadableString() + "%" : str + ((m - 1.0) * 100.0).ToReadableString() + "%";
      //   if (a == 0.0 && m == 1.0)
      //     str = str + 0.ToString() + "%";
    } else
      str =
        w != null
          ? BigNumber.Multiplication(a, w.Value).ToString() + "@" + BigNumber.Add(new BigNumber(1), BigNumber.Multiplication(m, w.Value)).ToString()
          : a.ToString() + "@" + m.ToString();
    return str;
  }
}
