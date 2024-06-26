import { BigNumber } from "./BigNumber";
import { Effect } from "./Effect";
import { Variable } from "./Variable";

export class EffectFactory {
  public static Create(apply, delete2, preview = null) {
    return new Effect(apply, delete2, preview);
  }

  public static Linear(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    // console.log("start linear", v, a, m, w, e);

    if (e != null) {
      if (BigNumber.IsEqual(m, 1) || BigNumber.IsEqual(m, 0)) a = BigNumber.Multiplication(a, e.Value);
      else m = BigNumber.Multiplication(m, e.Value);
    }
    if (w == null) v.Change(a, m);
    else v.Change(BigNumber.Multiplication(a, w.Value), BigNumber.Add(1, BigNumber.Multiplication(m, w.Value)));
  }

  public static LinearDelete(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    if (e != null) {
      if (m.ToFloat() == 1.0 || m.ToFloat() == 0.0) a = BigNumber.Multiplication(a, e.Value);
      else m = BigNumber.Multiplication(m, e.Value);
    }
    if (w == null) {
      if (m.ToFloat() == 0.0) console.log("/0 v= " + v + v.Value);
      else v.Change(a.Negative(), BigNumber.Division(new BigNumber(1), m));
    } //else if (1.0 + m * w.Value == 0.0) console.log("ayayaayaya");
    else v.Change(BigNumber.Multiplication(a.Negative(), w.Value), BigNumber.Division(new BigNumber(1), BigNumber.Add(new BigNumber(1), BigNumber.Multiplication(m, w.Value))));
  }

  public static LinearPreview(a: BigNumber, m: BigNumber, w: Variable = null, e: Variable = null, asnumber: boolean = false) {
    if (e != null) {
      if (BigNumber.IsEqual(m, new BigNumber(1)) || BigNumber.IsEqual(m, new BigNumber(0))) a = BigNumber.Multiplication(a, e.Value);
      else m = BigNumber.Multiplication(m, e.Value);
    }
    let str = "";
    if (!asnumber) {
      if (!BigNumber.IsEqual(a, 0)) str = w != null ? str + BigNumber.Multiplication(a, w.Value).ToString() : str + a.ToString();
      if ((!BigNumber.IsEqual(m, 1) && w == null) || (!BigNumber.IsEqual(m, 0) && w != null))
        str = w != null ? str + BigNumber.Multiplication(m, w.Value).ToString() : str + BigNumber.Multiplication(BigNumber.Subtract(m, 1), 100).ToString() + "%";
      if (BigNumber.IsEqual(a, 0) && BigNumber.IsEqual(m, 1)) str = str + "0%";
    } else
      str =
        w != null
          ? BigNumber.Multiplication(a, w.Value).ToString() + "@" + BigNumber.Add(new BigNumber(1), BigNumber.Multiplication(m, w.Value)).ToString()
          : a.ToString() + "@" + m.ToString();
    return str;
  }

  public static Log10(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    let variable = v;
    let addendum = new BigNumber(0.0);
    let bigNumber1 = new BigNumber(1.0);
    let bigNumber2 = a;
    let bigNumber3 = BigNumber.Add(w.Value, new BigNumber(1.0));
    bigNumber3 = new BigNumber(bigNumber3.Log10());
    let bigNumber4 = bigNumber3.Pow(m.ToFloat());
    let bigNumber5 = BigNumber.Multiplication(bigNumber2, bigNumber4);
    let multiplier = BigNumber.Multiplication(bigNumber1, bigNumber5);
    variable.Change(addendum, multiplier);
  }

  public static Log10Delete(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    let variable = v;
    let addendum = new BigNumber(0.0);
    let bigNumber1 = new BigNumber(1.0);
    let bigNumber2 = new BigNumber(1.0);
    let bigNumber3 = a;
    let bigNumber4 = BigNumber.Add(w.Value, new BigNumber(1.0));
    bigNumber4 = new BigNumber(bigNumber4.Log10());
    let bigNumber5 = bigNumber4.Pow(m.ToFloat());
    let bigNumber6 = BigNumber.Multiplication(bigNumber3, bigNumber5);
    let bigNumber7 = BigNumber.Add(bigNumber2, bigNumber6);
    let multiplier = BigNumber.Division(bigNumber1, bigNumber7);
    variable.Change(addendum, multiplier);
  }

  public static Log10Preview(a: BigNumber, m: BigNumber, w: Variable, e: Variable = null, asnumber = false) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    let str;
    if (!asnumber) {
      let bigNumber1 = BigNumber.Multiplication(new BigNumber(100), a);
      let bigNumber2 = BigNumber.Add(w.Value, new BigNumber(1.0));
      bigNumber2 = new BigNumber(bigNumber2.Log10());
      let bigNumber3 = bigNumber2.Pow(m.ToFloat());
      bigNumber2 = BigNumber.Multiplication(bigNumber1, bigNumber3);
      str = bigNumber2.Abs().ToStringPercent();
    } else {
      let bigNumber4 = new BigNumber(1.0);
      let bigNumber5 = a;
      let bigNumber6 = BigNumber.Add(w.Value, new BigNumber(1.0));
      bigNumber6 = new BigNumber(bigNumber6.Log10());
      let bigNumber7 = bigNumber6.Pow(m.ToFloat());
      let bigNumber8 = BigNumber.Multiplication(bigNumber5, bigNumber7);
      bigNumber6 = BigNumber.Add(bigNumber4, bigNumber8);
      str = "0@" + bigNumber6.ToString();
    }
    return str;
  }

  public static PowerA(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    v.Change(0, BigNumber.Add(1, BigNumber.Multiplication(a, BigNumber.Add(w.Value, 1.0).Pow(m.ToFloat()))));
  }

  public static PowerADelete(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    v.Change(0.0, BigNumber.Division(1, BigNumber.Add(1, BigNumber.Multiplication(a, BigNumber.Add(w.Value, 1.0).Pow(m.ToFloat())))));
  }

  public static PowerAPreview(a: BigNumber, m: BigNumber, w: Variable, e: Variable = null, asnumber = false) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    let str;
    if (!asnumber) {
      str = BigNumber.Multiplication(100, BigNumber.Multiplication(a, BigNumber.Add(w.Value, 1.0).Pow(m.ToDouble()))).ToReadableString() + "%";
    } else {
      let bigNumber1 = new BigNumber(1);
      let bigNumber2 = a;
      let bigNumber3 = BigNumber.Add(w.Value, 1.0);
      let bigNumber4 = bigNumber3.Pow(m.ToDouble());
      let bigNumber5 = BigNumber.Multiplication(bigNumber2, bigNumber4);
      bigNumber3 = BigNumber.Add(bigNumber1, bigNumber5);
      str = "0@" + bigNumber3.ToString();
    }
    return str;
  }

  public static Power(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    let bigNumber = new BigNumber(1);
    if (e != null) bigNumber = BigNumber.Multiplication(bigNumber, e.Value);

    v.Change(0.0, BigNumber.Add(1, BigNumber.Multiplication(bigNumber, BigNumber.Multiplication(a, BigNumber.Add(w.Value, 1.0)).Pow(m.ToDouble()))));
  }

  public static PowerDelete(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    let bigNumber = new BigNumber(1);
    if (e != null) bigNumber = BigNumber.Multiplication(bigNumber, e.Value);
    v.Change(0.0, BigNumber.Division(1, BigNumber.Add(1, BigNumber.Multiplication(bigNumber, BigNumber.Multiplication(a, BigNumber.Add(w.Value, 1.0)).Pow(m.ToDouble())))));
  }

  public static PowerPreview(a: BigNumber, m: BigNumber, w: Variable, e: Variable = null, asnumber = false) {
    let bigNumber1 = new BigNumber(1);
    if (e != null) bigNumber1 = BigNumber.Multiplication(bigNumber1, e.Value);
    let str;
    if (!asnumber) {
      str =
        BigNumber.Multiplication(100.0, BigNumber.Multiplication(bigNumber1, BigNumber.Multiplication(a, BigNumber.Add(w.Value, 1.0).Pow(m.ToDouble())))).ToReadableString() + "%";
    } else {
      let bigNumber2 = 1.0;
      let bigNumber3 = bigNumber1;
      let bigNumber4 = BigNumber.Multiplication(a, BigNumber.Add(w.Value, 1.0));
      let bigNumber5 = bigNumber4.Pow(m.ToDouble());
      let bigNumber6 = BigNumber.Multiplication(bigNumber3, bigNumber5);
      bigNumber4 = BigNumber.Add(bigNumber2, bigNumber6);
      str = "0@" + bigNumber4.ToString();
    }
    return str;
  }

  public static LogA(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);

    v.Change(0.0, 1.0 + BigNumber.Add(BigNumber.Multiplication(a, w.Value), 1).Log_a(m.ToDouble()));
  }

  public static LogADelete(v: Variable, a: BigNumber, m: BigNumber, w: Variable, e: Variable = null) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    v.Change(0.0, 1.0 / (1.0 + BigNumber.Add(BigNumber.Multiplication(a, w.Value), 1).Log_a(m.ToDouble())));
  }

  public static LogAPreview(a: BigNumber, m: BigNumber, w: Variable, e: Variable = null, asnumber = false) {
    if (e != null) a = BigNumber.Multiplication(a, e.Value);
    return asnumber
      ? "0@" + (1.0 + BigNumber.Add(BigNumber.Multiplication(a, w.Value), 1).Log_a(m.ToDouble())).toString()
      : new BigNumber(100.0 * BigNumber.Add(BigNumber.Multiplication(a, w.Value), 1).Log_a(m.ToDouble())).ToReadableString() + "%";
  }
}
