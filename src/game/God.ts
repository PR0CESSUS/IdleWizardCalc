import { Gods } from "@/type/Gods";
import { BigNumber } from "./BigNumber";
import { SimpleEffect } from "./SimpleEffect";
import { VariableInt } from "./VariableInt";
import { BigNumberSaveFile } from "@/type/BigNumberSaveFile";

export class God {
  Level: VariableInt;
  first_req = 100;
  grow_base = 1.02;
  Key: Gods;
  Group: number;
  ExpCurrent: BigNumber;
  ExpReq: BigNumber;
  ExpTotal: BigNumber;
  IsActive: boolean;
  firstSkill?: SimpleEffect;
  secondSkill?: SimpleEffect;
  DescriptionFirst?: string;
  DescriptionSecond?: string;
  Description?: string;
  effects?: SimpleEffect[];
  constructor(key: Gods, group) {
    this.Key = key;
    this.Group = group;
    this.Level = new VariableInt(0);
  }

  DeactivateAll() {}

  AddExp(dE: BigNumber) {}

  ActivateAbility(second = false) {}

  Activate() {
    this.IsActive = true;
  }

  Deactivate() {
    this.IsActive = false;
  }

  Load(totalExp: BigNumber | BigNumberSaveFile) {
    if (totalExp instanceof BigNumber) return this.RecalculateLevel(totalExp);
    return this.RecalculateLevel(new BigNumber(totalExp));
  }

  GetDescription() {
    return "";
  }

  GetSkillDescription(str: string, effect: SimpleEffect) {
    // console.log(str);

    return str
      .replace("#t", effect.Preview("t"))
      .replace("#", BigNumber.Multiplication(BigNumber.Multiplication(effect.mult, effect.efficiency == null ? 1.0 : effect.efficiency.Value), 100).ToReadableString() + "%");
  }

  RecalculateLevel(totalExp: BigNumber | number) {
    if (typeof totalExp == "number") totalExp = new BigNumber(totalExp);
    if (BigNumber.IsEqual(totalExp, 0)) {
      this.Level.SetValue(0);
      this.ExpReq = new BigNumber(this.first_req);
      this.ExpCurrent = new BigNumber(0);
      this.ExpTotal = new BigNumber(0);
    } else {
      let num = BigNumber.Subtract(1, BigNumber.Division(BigNumber.Multiplication(totalExp, BigNumber.Subtract(1, this.grow_base)), this.first_req)).Log_a(this.grow_base);
      if (this.Level.ValueInt != num) this.Level.SetValue(num);
      let bigNumber = new BigNumber(this.grow_base).Pow(num);
      this.ExpReq = BigNumber.Multiplication(this.first_req, bigNumber);

      this.ExpCurrent = BigNumber.Subtract(
        totalExp,
        BigNumber.Division(BigNumber.Multiplication(this.first_req, BigNumber.Subtract(1, bigNumber)), BigNumber.Subtract(1, this.grow_base))
      );
      this.ExpTotal = totalExp;
    }
  }
}
