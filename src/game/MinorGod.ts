import { Gods } from "@/type/Gods";
import { God } from "./God";
import { SimpleEffect } from "./SimpleEffect";
import { VariableInt } from "./VariableInt";
import { GameManager } from "./GameManager";
import { BigNumber } from "./BigNumber";
import { StringBuilder } from "./StringBuilder";

export class MinorGod extends God {
  declare effects: SimpleEffect[];
  connections: Gods[];
  declare Description: string;

  constructor(key: Gods, group: number, descr: string, f: SimpleEffect[], connections: Gods[]) {
    super(key, group);
    this.Level = new VariableInt(0);
    this.first_req = 1000;
    this.grow_base = 1.125;
    this.Description = descr;
    this.effects = f;
    for (const effect of this.effects) effect.parameter = this.Level;
    this.RecalculateLevel(0.0);
    this.connections = connections;
  }

  ActivateAbility(second = false) {
    if (!GameManager.Instance.Pantheon.chosen.includes(this.Key)) return;
    let pantheon = GameManager.Instance.Pantheon;
    for (const effect of this.effects) {
      effect.SetEfficiency(pantheon.MinorAP);
      effect.Apply();
    }

    //   VariableInt level = this.Level;
    //   level.OnChange = level.OnChange + new Action(this.UpdateEffect);
    //   VariableComplex minorAp = pantheon.MinorAP;
    //   minorAp.OnChange = minorAp.OnChange + new Action(this.UpdateEffect);
  }

  UpdateEffect() {
    for (const effect of this.effects) effect.Update();
  }

  DeactivateAll() {
    //   foreach (EffectDiminishing effect in this.effects)
    //     effect.Delete();
    //   VariableInt level = this.Level;
    //   level.OnChange = level.OnChange - new Action(this.UpdateEffect);
    //   VariableComplex minorAp = GameManager.Instance.Pantheon.MinorAP;
    //   minorAp.OnChange = minorAp.OnChange - new Action(this.UpdateEffect);
  }

  AddExp(dE: BigNumber) {
    //   let pantheon = GameManager.Instance.Pantheon;
    //   let dE *= 2.0;
    //   let bigNumber1 = 0.0;
    //   foreach (Gods connection in this.connections) {
    //     God god = pantheon.GetGod(connection);
    //     if (god.ExpCurrent > dE) {
    //       bigNumber1 += dE;
    //       god.AddExp(-dE);
    //     }
    //     else if (god.ExpTotal > dE) {
    //       bigNumber1 += dE;
    //       god.RecalculateLevel(god.ExpTotal - dE);
    //     }
    //     else {
    //       bigNumber1 += god.ExpTotal;
    //       god.RecalculateLevel(0.0);
    //     }
    //   }
    //   BigNumber bigNumber2 = bigNumber1 * pantheon.MinorExp.Value;
    //   if (bigNumber2.Mantissa <= 0.0)
    //     return;
    //   this.ExpCurrent = this.ExpCurrent + bigNumber2;
    //   this.ExpTotal = this.ExpTotal + bigNumber2;
    //   for (; this.ExpCurrent >= this.ExpReq; this.ExpReq = this.ExpReq * (double) this.grow_base) {
    //     this.Level.Change(1);
    //     this.ExpCurrent = this.ExpCurrent - this.ExpReq;
    //   }
    //   if (pantheon.MinorMaxLevel.ValueInt >= this.Level.ValueInt)
    //     return;
    //   pantheon.MinorMaxLevel.SetValue(this.Level.ValueInt);
  }

  GetDescription() {
    let stringBuilder = new StringBuilder();
    stringBuilder.Append("Level: ");
    stringBuilder.AppendLine(this.Level.ValueInt.toString());
    stringBuilder.AppendLine("Drain exp from: ");
    //   foreach (Gods connection in this.connections) {
    //     stringBuilder.Append("- ");
    //     stringBuilder.AppendLine(GameManager.Instance.Pantheon.window.GetName(connection));
    //   }
    stringBuilder.Append("Experience: ");
    stringBuilder.Append(this.ExpCurrent.ToReadableString());
    stringBuilder.Append(" / ");
    stringBuilder.Append(this.ExpReq.ToReadableString());
    stringBuilder.AppendLine();
    stringBuilder.AppendLine();
    stringBuilder.AppendLine(this.GetSkillDescription(this.Description, this.effects[0]));
    return stringBuilder.ToString();
  }
}
