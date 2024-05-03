import { Gods } from "@/type/Gods";
import { God } from "./God";
import { SimpleEffect } from "./SimpleEffect";
import { VariableInt } from "./VariableInt";
import { StringBuilder } from "./StringBuilder";
import { GameManager } from "./GameManager";
import { BigNumber } from "./BigNumber";

export class MainGod extends God {
  declare firstSkill: SimpleEffect;
  declare secondSkill: SimpleEffect;
  declare DescriptionFirst: string;
  declare DescriptionSecond: string;

  constructor(key: Gods, group: number, descrF: string, f: SimpleEffect, descrS: string, s: SimpleEffect) {
    super(key, group);
    this.Level = new VariableInt(0);
    this.first_req = 100;
    this.grow_base = 1.02;
    this.DescriptionFirst = descrF;
    this.firstSkill = f;
    this.firstSkill.parameter = this.Level;
    this.DescriptionSecond = descrS;
    this.secondSkill = s;
    this.secondSkill.parameter = this.Level;
    this.RecalculateLevel(0.0);
  }

  ActivateFirst() {
    let pantheon = GameManager.Instance.Pantheon;
    this.firstSkill.SetEfficiency(pantheon.MainAP);
    this.firstSkill.Apply();
    // VariableInt level = this.Level;
    // level.OnChange = level.OnChange + new Action(((EffectDiminishing) this.firstSkill).Update);
    // VariableComplex mainAp = pantheon.MainAP;
    // mainAp.OnChange = mainAp.OnChange + new Action(((EffectDiminishing) this.firstSkill).Update);
  }

  ActivateSecond() {
    let pantheon = GameManager.Instance.Pantheon;
    this.secondSkill.SetEfficiency(pantheon.SecAP);
    this.secondSkill.Apply();
    // VariableInt level = this.Level;
    // level.OnChange = level.OnChange + new Action(((EffectDiminishing) this.secondSkill).Update);
    // VariableComplex secAp = pantheon.SecAP;
    // secAp.OnChange = secAp.OnChange + new Action(((EffectDiminishing) this.secondSkill).Update);
  }

  ActivateAbility(second = false) {
    this.ActivateFirst();
    if (!second) return;
    this.ActivateSecond();
  }

  DeactivateAll() {
    // let pantheon = GameManager.Instance.Pantheon;
    // this.firstSkill.Delete();
    // this.secondSkill.Delete();
    // VariableInt level1 = this.Level;
    // level1.OnChange = level1.OnChange - new Action(((EffectDiminishing) this.firstSkill).Update);
    // VariableInt level2 = this.Level;
    // level2.OnChange = level2.OnChange - new Action(((EffectDiminishing) this.secondSkill).Update);
    // VariableComplex mainAp = pantheon.MainAP;
    // mainAp.OnChange = mainAp.OnChange - new Action(((EffectDiminishing) this.firstSkill).Update);
    // VariableComplex secAp = pantheon.SecAP;
    // secAp.OnChange = secAp.OnChange - new Action(((EffectDiminishing) this.secondSkill).Update);
  }

  AddExp(dE: BigNumber) {
    this.ExpCurrent = BigNumber.Add(this.ExpCurrent, dE);
    this.ExpTotal = BigNumber.Add(this.ExpTotal, dE);
    for (; BigNumber.BiggerOrEqualThan(this.ExpCurrent, this.ExpReq); this.ExpReq = BigNumber.Multiplication(this.ExpReq, this.grow_base)) {
      this.Level.Change(1);
      let pantheon = GameManager.Instance.Pantheon;
      if (pantheon.MaxLevel.ValueInt < this.Level.ValueInt) pantheon.MaxLevel.SetValue(this.Level.ValueInt);
      this.ExpCurrent = BigNumber.Subtract(this.ExpCurrent, this.ExpReq);
    }
  }

  GetDescription() {
    let stringBuilder = new StringBuilder();
    stringBuilder.Append("Level: ");
    stringBuilder.AppendLine(this.Level.ValueInt.toString());
    stringBuilder.Append("Experience: ");
    stringBuilder.Append(this.ExpCurrent.ToReadableString());
    stringBuilder.Append(" / ");
    stringBuilder.Append(this.ExpReq.ToReadableString());
    stringBuilder.AppendLine();
    stringBuilder.AppendLine();
    stringBuilder.AppendLine(this.GetSkillDescription(this.DescriptionFirst, this.firstSkill));
    stringBuilder.AppendLine();
    // if (!GameManager.Instance.Paragon.Gods2SkillIsAvailable)
    //   stringBuilder.Append("<color=#808080f>");
    stringBuilder.Append(this.GetSkillDescription(this.DescriptionSecond, this.secondSkill));
    // if (!GameManager.Instance.Paragon.Gods2SkillIsAvailable)
    //   stringBuilder.Append("</color>");
    return stringBuilder.ToString();
  }
}
