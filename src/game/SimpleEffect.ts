import { BigNumber } from "./BigNumber";
import { Effect } from "./Effect";
import { EffectDiminishing } from "./EffectDiminishing";
import { GameContext } from "./GameContext";
import { Variable } from "./Variable";
import { VariableBignumber } from "./VariableBignumber";

export class SimpleEffect extends EffectDiminishing {
  effect: Effect;
  target: Variable;
  add: BigNumber;
  mult: BigNumber;
  parameter: Variable;
  protected applied_add: BigNumber;
  protected applied_mult: BigNumber;
  protected prev_w: VariableBignumber;
  applied;

  get IsActive() {
    return this.applied;
  }

  public static SimpleEffect() {
    const newClass = new SimpleEffect();
    newClass.effect = GameContext.GetEffect("Linear");
    newClass.target = newClass.parameter = null;
    newClass.add = new BigNumber(0);
    newClass.mult = new BigNumber(1);
    newClass.diminishing = 1;
    return newClass;
  }

  public static SimpleEffect2(t: Variable) {
    const newClass = new SimpleEffect();
    newClass.effect = GameContext.GetEffect("Linear");
    newClass.target = t;
    newClass.parameter = null;
    newClass.add = new BigNumber(0);
    newClass.mult = new BigNumber(1);
    newClass.diminishing = 1;
    return newClass;
  }

  public static SimpleEffect3(t: Variable, a: BigNumber, m: BigNumber, effName = "Linear", pow_diminish = 1) {
    const newClass = new SimpleEffect();
    newClass.effect = GameContext.GetEffect(effName);
    newClass.target = t;
    newClass.parameter = null;
    newClass.add = a;
    newClass.mult = m;
    newClass.diminishing = 1;
    newClass.pow_diminishing = pow_diminish;
    return newClass;
  }

  public static SimpleEffect4(t: Variable, a: BigNumber, m: BigNumber, param: Variable, effName = "Linear", pow_diminish = 1) {
    const newClass = new SimpleEffect();
    newClass.effect = GameContext.GetEffect(effName);
    newClass.target = t;
    newClass.parameter = param;
    newClass.add = a;
    newClass.mult = m;
    newClass.diminishing = 1;
    newClass.pow_diminishing = pow_diminish;
    return newClass;
  }

  Apply() {
    if (this.applied) return;
    if (this.target == null) {
      console.log("target is null");
      console.log(this.add);
      console.log(this.mult);
      console.log(this.parameter);
      if (this.parameter == null) return;
      // console.log(this.parameter.Value);
    } else {
      if (this.parameter != null) {
        if (this.prev_w == null) this.prev_w = new VariableBignumber(this.parameter.Value);
        else this.prev_w.SetValue(this.parameter.Value);
      }
      this.applied_add = this.add;
      this.applied_mult = this.mult;
      // console.log("chyba tu");
      this.RecalculateEff();
      if (this.effect == null) console.log("effect null");
      this.effect.apply(this.target, this.applied_add, this.applied_mult, this.parameter, this.prev_e);
      this.applied = true;
    }
  }

  Delete() {
    if (!this.applied) return;
    this.effect.Delete(this.target, this.applied_add, this.applied_mult, this.prev_w, this.prev_e);
    this.applied = false;
  }

  Update() {
    if (
      !this.applied ||
      ((this.prev_e == null || this.prev_e.Value == this.GetEfficiency().Value) &&
        (this.prev_w == null || this.prev_w.Value == this.parameter.Value) &&
        this.applied_add == this.add &&
        this.applied_mult == this.mult)
    )
      return;
    this.Delete();
    this.Apply();
  }

  // GetDebugCheck() {
  //   let str1 = "";
  //   let str2;
  //   if (this.prev_e != null)
  //     str2 = str1 + this.prev_e.Value.ToReadableString() + " " + this.GetEfficiency().Value.ToReadableString() + " " + (this.prev_e.Value == this.GetEfficiency().Value).ToString() + " / ";
  //   else
  //     str2 = str1 + "e is null / ";
  //   let str3;
  //   if (this.prev_w != null)
  //     str3 = str2 + this.prev_w.Value.ToReadableString() + " " + this.parameter.Value.ToReadableString() + " " + (this.prev_w.Value == this.parameter.Value).ToString() + " / ";
  //   else
  //     str3 = str2 + "w is null / ";
  //   return str3 + this.applied_add.ToReadableString() + " " + this.add.ToReadableString() + " " + (this.applied_add == this.add).ToString() + " / " + this.applied_mult.ToReadableString() + " " + this.mult.ToReadableString() + " " + (this.applied_mult == this.mult).ToString();
  // }

  // Preview( a: BigNumber,  m: BigNumber, parameter: Variable) {
  //   this.GetEfficiency();
  //   return this.effect.preview(this.add, this.mult, parameter, this.preview_eff);
  // }

  Preview(key = "") {
    let str = "";
    this.GetEfficiency();
    switch (key) {
      case "":
        str = this.effect.preview(this.add, this.mult, this.parameter, this.preview_eff);
        break;
      // case "t":
      //   str = BigNumber.Multiplication(BigNumber.Subtract(BigNumber.Multiplication(this.mult, this.preview_eff.Value), 1), 100).ToStringPercent();
      //   break;
      // case "k":
      //   str = (new BigNumber(this.effect.preview(this.add, this.mult, this.parameter, (Variable) this.preview_eff, true).Split('@', StringSplitOptions.None)[0]) * new BigNumber(100)).ToReadableString() + "%";
      //   break;
      // case "q":
      //   let strArray1 = this.effect.preview(this.add, this.mult, this.parameter, (Variable) this.preview_eff, true).Split("@", StringSplitOptions.None);
      //   let bigNumber = strArray1[0];
      //   str = !(bigNumber >= new BigNumber(1)) ? (((BigNumber) strArray1[1] - new BigNumber(1)) * new BigNumber(100)).ToReadableString() + "%" : ((bigNumber - new BigNumber(1)) * new BigNumber(100)).ToReadableString() + "%";
      //   break;
      // case "%":
      //   str = !(this.add != (BigNumber) 0.0) ? this.effect.preview(this.add, this.mult, this.parameter, (Variable) this.preview_eff) : (!(this.add < (BigNumber) 0.0) ? (this.add * new BigNumber(100)).ToReadableString() + "%" : (this.add * new BigNumber(100)).Abs().ToReadableString() + "%");
      //   break;
      // case "@":
      //   str = !(this.mult < new BigNumber(1)) ? ((this.mult - new BigNumber(1)) * new BigNumber(100)).ToReadableString() + "%" : ((new BigNumber(1) - this.mult) * new BigNumber(100)).ToReadableString() + "%";
      //   break;
      // case "e":
      //   return ((this.preview_eff.Value - new BigNumber(1)) * new BigNumber(100)).ToReadableString() + "%";
      default:
        // string[] strArray2 = this.effect.preview(this.add, this.mult, this.parameter, (Variable) this.preview_eff, true).Split('@', StringSplitOptions.None);
        // if (key == "a")
        //   str = new BigNumber(strArray2[0]).ToReadableString();
        // if (key == "m") {
        //   str = ((new BigNumber(strArray2[1]) - new BigNumber(1)) * new BigNumber(100)).ToReadableString();
        //   break;
        // }
        break;
    }
    console.log(str);

    return str;
  }
}
