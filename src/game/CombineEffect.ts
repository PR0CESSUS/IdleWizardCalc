import { IEffect } from "@/type/IEffect";
import { Variable } from "./Variable";
import { SimpleEffect } from "./SimpleEffect";
import { Effect } from "./Effect";
import { BigNumber } from "./BigNumber";
import { GameContext } from "./GameContext";

export class CombineEffect implements IEffect {
  target: Variable;
  simple_effects: SimpleEffect[];
  with_efficienty: SimpleEffect[];
  efficiency: Variable;
  gilding: Variable;

  constructor(_target: Variable) {
    this.target = _target;
    this.simple_effects = [];
    this.with_efficienty = [];
  }

  AddEffect(a: BigNumber | number, m: BigNumber | number, w: Variable = null, effect: Effect = null, eff = true, dimishing = 1, pow_diminish = 1) {
    a = a instanceof BigNumber ? a : new BigNumber(a);
    m = m instanceof BigNumber ? m : new BigNumber(m);

    let simpleEffect = new SimpleEffect();
    simpleEffect.target = this.target;
    simpleEffect.add = a;
    simpleEffect.mult = m;
    simpleEffect.parameter = w;
    simpleEffect.diminishing = dimishing;
    simpleEffect.pow_diminishing = pow_diminish;
    simpleEffect.effect = effect != null ? effect : GameContext.GetEffect("Linear");
    this.simple_effects.push(simpleEffect);
    if (!eff) return;
    this.with_efficienty.push(simpleEffect);
  }

  SetEfficiency(eff: Variable) {
    this.efficiency = eff;
    for (const effectDiminishing of this.with_efficienty) effectDiminishing.SetEfficiency(this.efficiency);
  }

  SetGilding(eff: Variable) {
    this.gilding = eff;
    for (const effectDiminishing of this.with_efficienty) effectDiminishing.SetGilding(this.gilding);
  }

  Apply() {
    for (const simpleEffect of this.simple_effects) simpleEffect.Apply();
  }

  Delete() {
    for (const simpleEffect of this.simple_effects) simpleEffect.Delete();
  }

  Update() {
    this.Delete();
    this.Apply();
  }

  Preview(key = "") {
    let number = new BigNumber(0);
    let bigNumber = new BigNumber(1);
    for (const simpleEffect of this.simple_effects) {
      let strArray = simpleEffect.effect
        .preview(simpleEffect.add, simpleEffect.mult, simpleEffect.parameter, this.with_efficienty.includes(simpleEffect) ? simpleEffect.GetEfficiency() : null, true)
        .split("@");
      number = BigNumber.Add(number, new BigNumber(strArray[0]));
      bigNumber = BigNumber.Multiplication(bigNumber, new BigNumber(strArray[1]));
    }
    let str = "";
    if (key == "") {
      if (!BigNumber.IsEqual(number, 0)) str += number.ToReadableString();
      if (!BigNumber.IsEqual(bigNumber, 1)) str = str + BigNumber.Multiplication(BigNumber.Subtract(bigNumber, 1.0), 100).ToReadableString() + "%";
    }
    if (key == "a") str = number.ToReadableString();

    if (key == "m") str += BigNumber.Multiplication(BigNumber.Subtract(bigNumber, 1.0), 100).ToReadableString();
    if (key == "t") str = BigNumber.Multiplication(number, 100).ToReadableString() + "%";

    return str;
  }
}
