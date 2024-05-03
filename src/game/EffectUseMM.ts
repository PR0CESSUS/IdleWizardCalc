import { IEffect } from "@/type/IEffect";
import { Spells } from "@/type/Spells";
import { BigNumber } from "./BigNumber";
import { EffectAddProduction } from "./EffectAddProduction";
import { GameManager } from "./GameManager";
import { Spell } from "./Spell";
import { Variable } from "./Variable";

export class EffectUseMM implements IEffect {
  target: Spell;
  base_count: number;
  add: BigNumber;
  mult: number;
  parameter: Variable;
  count: number;
  ep: EffectAddProduction;

  constructor(a: BigNumber | number, m: BigNumber | number, base: number = 0, p: Variable = null) {
    if (typeof a == "number") a = new BigNumber(a);
    if (typeof m == "number") m = new BigNumber(m);
    this.target = GameManager.Instance.SpellBook.GetSpell(Spells.MagicMissile);
    this.add = new BigNumber(0);
    this.mult = 1;
    this.count = 0.0;
  }

  Apply() {
    //TODO calculation
    // this.recalculate_count();
    // if (this.ep == null) this.ep = this.target.effects[0] as EffectAddProduction;
    // this.ep.k *= this.count;
    // this.target.Apply();
    // this.ep.k /= this.count;
    //   this.target.IncreaseUses(this.count);
    //   this.target.IncreaseUseThisRun(this.count);
    // Statistic.CastSpell.Change(this.count);
    //   Statistic.Change(Statistic.CastSpellTotal, this.count);
    //   Statistic.Change(Statistic.CastSpellRealm, this.count);
    //   if (GameManager.Instance.Scrolls.OnCastAmount == null)
    //     return;
    //   GameManager.Instance.Scrolls.OnCastAmount(this.target, this.count >  int.MaxValue ? 1000000000 : this.count);
  }

  SetEfficiency(eff: Variable = null) {}

  SetGilding(eff: Variable = null) {}

  Update() {}

  Delete() {}

  recalculate_count() {
    this.count = this.base_count;
    if (this.parameter != null) {
      let count = this.count;
      let bigNumber = BigNumber.Add(1.0, BigNumber.Division(this.parameter.Value, this.add));
      bigNumber = bigNumber.Pow(this.mult);
      let num = bigNumber.ToDouble();
      this.count = count + num;
    } else {
      let count = this.count;
      let bigNumber = BigNumber.Add(1.0, BigNumber.Division(1, this.add));
      bigNumber = bigNumber.Pow(this.mult);
      let num = bigNumber.ToDouble();
      this.count = count + num;
    }
  }

  Preview(key = "") {
    //TODO preview
    // this.recalculate_count();

    if (!(key == "t")) return BigNumber.Multiplication((this.target.effects[0] as EffectAddProduction).GetValue(), this.count).ToReadableString();
    return this.count < 1000000000.0 ? this.count.toString() : new BigNumber(this.count).ToReadableString();
  }
}
