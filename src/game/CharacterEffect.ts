import { BigNumber } from "./BigNumber";
import { GameManager } from "./GameManager";
import { Variable } from "./Variable";
import { VariableBignumber } from "./VariableBignumber";
import { VariableInt } from "./VariableInt";

export class CharacterEffect {
  based;
  target: Variable;
  level: VariableInt;
  protected applied_mult: BigNumber;
  prev_w: VariableBignumber;
  applyed;
  isDump;

  constructor(b: number, t: Variable, l: VariableInt) {
    this.based = b - 1;
    this.target = t;
    this.level = l;
    this.applied_mult = new BigNumber(1.0);
  }

  SetIsDump(isDump) {
    return (this.isDump = isDump);
  }

  Start() {
    this.Apply();
    // let level: VariableInt = this.level;
    // level.OnChange = level.OnChange + new Action(this.Update);
  }

  Apply() {
    if (this.applyed) return;
    this.apply();
    this.applyed = true;
  }

  GetMainBonus() {
    return BigNumber.Multiplication(new BigNumber(this.based), this.GetEfficiency());
  }

  apply() {
    this.applied_mult = BigNumber.Add(1, this.GetMainBonus()).Pow(this.level.ValueInt);
    // console.log("changed before", this.target.Value.ToString());
    this.target.Change(0, this.applied_mult);
    // console.log("changed after", this.target.Value.ToString());
  }

  GetEfficiency() {
    return !this.isDump ? GameManager.Instance.AttributeManager.AttributePower.Value : GameManager.Instance.AttributeManager.VersatilityPower.Value;
  }

  Delete() {
    if (!this.applyed) return;
    // this.target.Change( 0.0, 1.0 / this.applied_mult);
    this.applyed = false;
  }

  Update() {
    this.Delete();
    this.Apply();
  }

  Preview() {
    return this.applied_mult.ToStringPercent();
    return BigNumber.Multiplication(BigNumber.Subtract(this.applied_mult, 1.0), 100).ToReadableString();
  }
}
