import { IEffect } from "@/type/IEffect";
import { SpellFormat } from "@/type/SpellFormat";
import { SpellTypeBehavior } from "@/type/SpellTypeBehavior";
import { SpellTypeGroup } from "@/type/SpellTypeGroup";
import { Spells } from "@/type/Spells";
import { AdditionalSpellEffect } from "./AdditionalSpellEffect";
import { GameManager } from "./GameManager";
import { StringBuilder } from "./StringBuilder";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";

export class Spell {
  Data: SpellFormat;

  Name: string;
  NameKey: Spells;
  TypeBehavior: SpellTypeBehavior;
  Type: SpellTypeGroup;
  Duration: VariableComplex;
  Period;
  Description;
  Use: VariableComplex;
  UseThisRun: VariableBignumber;
  Priority;
  ResetUses = false;
  Accumulated;
  ShardsBuilding = true;
  IsShadow = false;
  LimitedCharges = true;
  CursedChallenge = true;
  //   Spell.AdditionalCost SubCost;
  PassiveEffect: IEffect;
  //   OnChoose: Action;
  //   OnClear: Action;
  //   useCounter: CounterAverage;
  //   useThisRunCounter: CounterAverage;
  GildingCost: VariableFloat;
  AdditionalCastRate: VariableInt;
  CostModifier = 1;
  chargeCount;
  chargeProgress;
  level_req = 1;
  choice;
  effects: IEffect[] = [];
  addSpellEffect: AdditionalSpellEffect;
  full_build;
  available: boolean;
  active = false;

  get LevelReq() {
    let levelReq = this.level_req - GameManager.Instance.LevelReduction.ValueInt;

    if (levelReq < 1) levelReq = 1;
    return levelReq;
  }

  set LevelReq(value) {
    this.level_req = value;
  }

  get IsAccumulated() {
    return this.Accumulated;
  }

  get IsAugment() {
    return this.TypeBehavior == SpellTypeBehavior.Permanent;
  }
  get IsPersistent() {
    return this.ResetUses;
  }
  constructor(f: SpellFormat) {
    this.Data = f;
    this.Name = f.Name;
    this.NameKey = Spells[f.Key];
    this.TypeBehavior = SpellTypeBehavior[f.TypeBehavior];
    this.Type = SpellTypeGroup[f.SpellType];
    this.Duration = new VariableComplex(f.Duration);
    // this.FullBuild = (double) float.Parse(f.Build, (IFormatProvider) CultureInfo.InvariantCulture);
    this.Description = f.Description;
    this.LevelReq = parseInt(f.Requirements);
    this.Use = new VariableComplex(0.0);
    this.UseThisRun = new VariableBignumber(0.0);
    if (f.ResetUses) this.ResetUses = true;
    if (f.SB) this.ShardsBuilding = false;
    if (f.Shadow) this.IsShadow = true;
    if (f.Acc) this.Accumulated = true;
    if (f.Priority != "" && f.Priority != "0") this.Priority = parseInt(f.Priority);
    // if (f.AddCost != "") {
    //   this.SubCost = new Spell.AdditionalCost();
    //   this.SubCost.resource = GameContext.GetResource(f.AddCost);
    //   this.SubCost.cost = int.Parse(f.AddCostValue);
    //   this.SubCost.name = f.AddCostName;
    //   this.SubCost.isBuilding = f.AddCost.Contains("Building.");
    // }
    this.LimitedCharges = f.Limited ? true : false;
    this.CursedChallenge = f.Curse ? true : false;
    if (this.TypeBehavior == SpellTypeBehavior.Permanent) GameManager.Instance.SpellBook.PermanentSpellList.push(this);
    // this.useCounter = new CounterAverage();
    // this.useThisRunCounter = new CounterAverage();
  }

  getTip() {
    let stringBuilder = new StringBuilder();
    stringBuilder.Append("<b>");
    stringBuilder.Append(this.Name);
    stringBuilder.AppendLine("</b> ");
    stringBuilder.AppendLine();
    // stringBuilder.Append("Requires: ");
    // stringBuilder.Append(this.LevelReq);
    // stringBuilder.AppendLine(" level");
    // stringBuilder.AppendLine();
    stringBuilder.Append("Type: ");
    // stringBuilder.Append(this.get_color_by_type());
    stringBuilder.Append(SpellTypeGroup[this.Type]);
    if (this.IsPersistent) stringBuilder.Append(" (Persistent)");
    if (this.Accumulated) stringBuilder.Append(" (Accumulated)");
    if (this.IsAugment) stringBuilder.Append(" (Augment)");
    stringBuilder.AppendLine();
    stringBuilder.AppendLine();
    stringBuilder.Append(this.GetDescription());
    stringBuilder.AppendLine();
    // stringBuilder.AppendLine();
    // if (this.ShardsBuilding) {
    // stringBuilder.Append("Shard cost: ");
    // stringBuilder.AppendLine(this.GetShardCostDesc());
    // } else if (this.IsShadow) {
    // stringBuilder.Append("Shadow cost: ");
    // stringBuilder.AppendLine(this.GetShardCostDesc());
    // } else stringBuilder.AppendLine("Charging");
    // if (this.SubCost != null) {
    //   stringBuilder.Append(this.SubCost.name);
    //   stringBuilder.Append(": ");
    //   stringBuilder.Append(this.SubCost.resource.Value.ToReadableString("F0"));
    //   stringBuilder.Append(" / ");
    //   stringBuilder.AppendLine(this.SubCost.Cost.ToString());
    // }
    // stringBuilder.AppendLine();
    // stringBuilder.Append("Charges: ");
    // stringBuilder.AppendLine(this.chargeCount);
    // stringBuilder.Append("Progress: ");
    // if (this.ShardsBuilding || this.IsShadow) {
    //   stringBuilder.Append(new BigNumber(this.GetProgressBuild).ToReadableString("F0"));
    //   stringBuilder.Append(" / ");
    //   stringBuilder.Append(new BigNumber(this.FullBuild).ToReadableString("F0"));
    // }
    // else {
    //   stringBuilder.Append(((float) (this.GetProgressBuild / this.FullBuild) * 100f).ToString("F2"));
    //   stringBuilder.Append("%");
    // }
    stringBuilder.AppendLine();
    if (this.IsPersistent) stringBuilder.Append("Cast in this Exile: ");
    else stringBuilder.Append("Real casts: ");
    stringBuilder.Append(this.UseThisRun.Value.ToReadableString("F0"));
    // stringBuilder.Append(" (");
    // stringBuilder.Append(this.useThisRunCounter.GetDescription());
    // stringBuilder.Append(")");
    stringBuilder.AppendLine();
    stringBuilder.Append("Total casts: ");
    stringBuilder.Append(this.Use.Value.ToReadableString("F0"));
    // stringBuilder.Append(" (");
    // stringBuilder.Append(this.useCounter.GetDescription());
    // stringBuilder.Append(")");
    stringBuilder.AppendLine();
    stringBuilder.AppendLine();
    // stringBuilder.AppendLine(this.GetDescription());
    // let duration = this.get_duration();
    // if (duration > 0.0) {
    //   stringBuilder.AppendLine();
    //   stringBuilder.Append("Duration: ");
    //   if (duration > 1.0) {
    //     stringBuilder.AppendLine(Statistic.time_to_string((BigNumber) duration, true));
    //   }
    //   else {
    //     stringBuilder.Append(duration.ToString("F2", (IFormatProvider) CultureInfo.InvariantCulture));
    //     stringBuilder.Append(" sec");
    //   }
    // }
    // else {
    //   stringBuilder.AppendLine();
    //   stringBuilder.AppendLine("Duration: Instant");
    // }
    return stringBuilder.ToString();
  }
  SetEfficiency() {
    let eff = null;
    if (!this.effects) return;

    if (this.Type == SpellTypeGroup.Incantation) eff = GameManager.Instance.Scrolls.IncantationEfficiency;
    else if (this.Type == SpellTypeGroup.Evocation) eff = GameManager.Instance.Scrolls.EvocationEfficiency;
    else if (this.Type == SpellTypeGroup.Summoning) eff = GameManager.Instance.Scrolls.SummoningEfficiency;

    for (const effect of this.effects) effect.SetEfficiency(eff);
  }
  GetDescription() {
    // console.log(this.Description);
    let description = this.Description.replace(/#\d[amtpq]*/, this.ReplaceMatch.bind(this));
    // console.log(description);

    if (this.addSpellEffect != null) description = description + "<br>" + this.addSpellEffect.GetDescription();
    return description;
  }

  ReplaceMatch(m: string) {
    let key = "";
    let ch;

    if (m.length > 2) {
      ch = m.slice(1, 2);
      key = m.slice(2, 3);
    }
    // console.log("ReplaceMatch", m, m.length);
    // console.log("ch:", ch);
    // console.log("key:", key);

    // if (key == "p") {
    //   return 1111;
    //   return this.PassiveEffect != null ? this.PassiveEffect.Preview() : 0;
    // }
    // console.log("effects1:", this.effects);
    // if (this.effects) console.log("true");

    let effects1 = this.effects;
    // if (this.effects)

    ch = m.slice(1, 2);
    let index1 = parseInt(ch) - 1;
    // console.log("index1:", index1);
    if (effects1) {
      return effects1[index1].Preview(key);
    } else {
      return "NO EFFECT";
    }
  }

  Apply() {
    for (const effect of this.effects) effect.Apply();
    this.addSpellEffect?.effect.Apply();
    this.active = true;
  }

  Update() {
    if (!this.active) return;
    for (const effect of this.effects) effect.Update();
    this.addSpellEffect?.effect.Update();
  }
}
