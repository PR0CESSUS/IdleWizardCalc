import translation from "@/data/translation.json";
import { EffectUpdateType } from "../type/EffectUpdateType";
import { UpgradeFormat } from "../type/UpgradeFormat";
import { BigNumber } from "./BigNumber";
import { Effect } from "./Effect";
import { GameContext } from "./GameContext";
import { Variable } from "./Variable";

export class Upgrade {
  ID: number;
  Name: string;
  base_cost_string: string;
  SpriteKey: string;
  Class: string;
  Description: string;
  add: BigNumber;
  mult: BigNumber;
  effect: Effect;
  manager;
  parameter: Variable;
  Cost: string;
  Addendum: string;
  Multiplier: string;
  target;
  Data: UpgradeFormat;
  effect_type: EffectUpdateType;
  applied: boolean;
  isSpell;

  constructor(u: UpgradeFormat) {
    // this.manager = manager;

    this.Name = u.Name;
    this.ID = parseInt(u.ID);
    this.base_cost_string = u.Cost;
    this.SpriteKey = u.Sprite;
    this.Class = u.Class == null ? "" : u.Class;
    this.Description = u.Description;
    if (u.Effect == null || u.Effect == "") u.Effect = "Linear";
    this.effect = GameContext.GetEffect(u.Effect);
    if (u.Addendum == null || u.Addendum == "") u.Addendum = "0";
    this.add = new BigNumber(u.Addendum);
    if (u.Multiplier == null || u.Multiplier == "") u.Multiplier = "1";
    this.mult = new BigNumber(u.Multiplier);
    this.Addendum = u.Addendum;
    this.Multiplier = u.Multiplier;

    //

    // if (u.CondtionAccess != null && u.CondtionAccess != "") {
    //   if (u.CondtionAccess == "Achieve")
    //     this.achieve = true;
    //   this.condition_access = GameContext.GetCondition(u.CondtionAccess);
    //   this.access_parameter = u.CAParameter;
    //   this.access_argumet = !(u.CAArgumet != "") ? new BigNumber(0.0) : new BigNumber(u.CAArgumet);
    // }
    this.Building(u);
    // this.isSpell = !string.IsNullOrEmpty(u.Spell);
  }

  Apply() {
    if (this.applied && !this.isSpell) {
      console.log(this.applied + " " + this.ID);
    } else {
      // console.log(this.effect.apply);
      // console.log("this.target:", this.target);
      // console.log("this.add:", this.add);
      // console.log("this.mult:", this.mult);
      // console.log("this.parameter:", this.parameter);

      try {
        this.effect.apply(this.target, this.add, this.mult, this.parameter);
      } catch (error) {
        console.log("ERROR Upgrade Apply()");
        console.log("this.target:", this.target);
        console.log("this.add:", this.add);
        console.log("this.mult:", this.mult);
        console.log("this.parameter:", this.parameter);
        console.log("this.Data", this.Data);
      }

      // if (this.effect_type != EffectUpdateType.Permanent) {
      //   this.prev_parameter = (Variable) new VariableComplex(this.parameter.Value);
      // if (this.effect_type == EffectUpdateType.Parameterized)
      //   this.parameter.OnChange += new Action(this.UpdateParametrized);
      // else if (this.effect_type == EffectUpdateType.Conditional)
      //   this.manager.update_conditional_upgrade += new Action(this.UpdateConditional);
      // }
      this.applied = true;
    }
  }

  Building(data: UpgradeFormat) {
    if (data.V != null && data.V != "") {
      this.target = GameContext.GetResource(data.V);
      // if (this.target == null) Debug.LogError(object("not found V in " + this.Name + " " + data.V));
    }
    if (data.W != null && data.W != "") {
      this.parameter = GameContext.GetResource(data.W);
      this.effect_type = EffectUpdateType.Parameterized;
      // if (this.parameter == null) Debug.LogError(object("not found W in " + this.Name));
    }
    this.Data = data;
    if (this.Description != null) return;
    this.Description = "";
  }
  GetDescription() {
    // let desc = this.Description.slice(1, this.Description.length - 1);
    if (this.Description == "?" || this.Description == "272.13") return "";
    // let desc = this.Description.replace(/\[|\]/, "");
    // console.log(desc);
    let translationKey = this.Description.replace(/\[(.*?)\].*/gm, "$1");
    let strRest = this.Description.replace(/\[.*?\](.*)/gm, "$1");

    // console.log("translationKey:", translationKey);
    let description = "";
    try {
      description = (translation.bonuses[translationKey].En as string) + strRest;
    } catch (error) {
      console.log(error, translationKey, strRest, this.ID);
    }

    let strArray = ["0", "0"];
    try {
      strArray = this.effect.preview(this.add, this.mult, this.parameter, null, true).split("@");
      // console.log(strArray);
    } catch (error) {
      // console.log(error, strArray, strRest, this.ID);
    }

    let number1 = new BigNumber(strArray[0]);
    // let number1 = parseFloat(this.Addendum);
    let number2 = BigNumber.Multiplication(BigNumber.Subtract(new BigNumber(strArray[1]), new BigNumber(1.0)), new BigNumber(100));

    // let number2 = (parseFloat(this.Multiplier) - 1.0) * 100.0;

    // if (this.parameter) number2 = parseFloat(this.Multiplier) * this.parameter.Value * 100.0;

    // let number1String = number1.toFixed(2);
    // let number2String = number2.toFixed(2);

    // if (number2 > 1000) number2String = number2.toExponential(2);
    // if (number1 > 1000) number1String = number1.toExponential(2);

    //
    if (this.parameter != null) {
      description = description.replace("#a", number1.ToString()).replace("#m", `${number2.ToString()}%`);
      // if (this.parameter != null) description = description.replace("#p", "<color=#e2b018>" + this.parameter.Value.ToReadableString("F0") + "</color>");
    } else {
      description = description.replace("#a", number1.ToString()).replace("#m", number2.ToString() + "%");
      // if (this.parameter != null) description = description.replace("#p", this.parameter.Value.ToReadableString("F0"));
    }
    return description;
  }
}
