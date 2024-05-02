import { HeroesNames } from "@/type/HeroesNames";
import { BigNumber } from "./BigNumber";
import { GameManager } from "./GameManager";
import { Spec } from "./Spec";
import { VariableBignumber } from "./VariableBignumber";
import { VariableInt } from "./VariableInt";
import { SimpleEffect } from "./SimpleEffect";
import { StringBuilder } from "./StringBuilder";
import { Statistic } from "./Statistic";

import { Spells } from "@/type/Spells";

export class Hero extends Spec {
  NameKey: HeroesNames;
  Level: VariableInt;
  LevelProgress;
  Exp2LevelUp: BigNumber;
  CurrentExp: BigNumber;
  Feature;
  SpellList: Spells[] = [];
  ClosedBuildings = [];
  experience: VariableBignumber = new VariableBignumber(new BigNumber(0.0));
  RequedClasses;
  effect1: SimpleEffect;
  // OnApplyEffect: Action;
  // protected quotes: QuotesSystem;

  Init() {
    // base.Init();
    this.Level = new VariableInt(1);
    this.CurrentExp = new BigNumber(0);
    this.RequedClasses = [];
    this.close_buildings();
    this.Exp2LevelUp = new BigNumber(0);
  }

  SubEffect() {
    // let level: VariableInt = GameManager.Instance.CurrentHero.Level;
    // level.OnChange = level.OnChange + new Action(this.update_effect);
    // let abilityPower: VariableComplex = GameManager.Instance.CurrentHero.AbilityPower;
    // abilityPower.OnChange = abilityPower.OnChange + new Action(this.update_effect);
  }

  UnsubEffect() {
    // level: VariableInt = GameManager.Instance.CurrentHero.Level;
    // level.OnChange = level.OnChange - new Action(this.update_effect);
    // abilityPower: VariableComplex = GameManager.Instance.CurrentHero.AbilityPower;
    // abilityPower.OnChange = abilityPower.OnChange - new Action(this.update_effect);
  }

  update_effect() {}

  update() {}

  close_buildings() {
    // if (this.ClosedBuildings == null || this.ClosedBuildings.length <= 0)
    //   return;
    // foreach (closedin: Building this.ClosedBuildings) {
    //   foreach (building: BuildingVisual in GameManager.Instance.Buildings) {
    //     if (building.building.Name == closedBuilding) {
    //       Statistic.TotalBuildings.Change(-building.building.Level.ValueInt);
    //       building.building.Level.SetValue(0);
    //       building.gameObject.SetActive(false);
    //       building.ChangeAvalible(false);
    //     }
    //   }
    // }
  }

  open_buildings() {
    // if (this.ClosedBuildings == null || this.ClosedBuildings.length <= 0)
    //   return;
    // foreach (closedin: Building this.ClosedBuildings) {
    //   foreach (building: BuildingVisual in GameManager.Instance.Buildings) {
    //     if (building.building.Name == closedBuilding) {
    //       building.gameObject.SetActive(true);
    //       building.ChangeAvalible(true);
    //     }
    //   }
    // }
  }
  RecalculateExp(starting_exp, boost) {
    if (Statistic.TotalBuildings.ValueInt < 0) Statistic.TotalBuildings.SetValue(0);
    this.experience.SetValue(starting_exp + GameManager.Instance.CurrentHero.ExpFlat.Value.ToFloat() + this.GetExpMultPart());
  }
  UpdateExp() {
    console.log("UpdateExp");

    let y = GameManager.Instance.CurrentHero.StartingLevel.ValueInt - 1;
    let growBaseLevel = GameManager.Instance.CurrentHero.GrowBaseLevel;
    let num = 1500;
    // let valueInt = this.Level.ValueInt;

    this.RecalculateExp((num * (1.0 - Math.pow(growBaseLevel, y))) / (1.0 - growBaseLevel), GameManager.Instance.CurrentHero.ExpBoost.Value.ToDouble());
    let p = BigNumber.Division(
      BigNumber.Multiplication(BigNumber.Subtract(1, this.experience.Value), BigNumber.Subtract(1, new BigNumber(growBaseLevel))),
      new BigNumber(new BigNumber(150).Log_a(growBaseLevel))
    );
    if (this.Level.ValueInt != p.ToInt() + 1) this.Level.SetValue(p.ToInt() + 1);
    this.Exp2LevelUp = BigNumber.Multiplication(num, Math.pow(growBaseLevel, p.ToFloat()));
    this.CurrentExp = BigNumber.Subtract(this.experience.Value, new BigNumber((num * (1.0 - Math.pow(growBaseLevel, p.ToFloat()))) / (1.0 - growBaseLevel)));

    // this.LevelProgress = (this.CurrentExp / this.Exp2evelUp).ToDouble();
    // if (this.Level.ValueInt > valueInt && this.Level.ValueInt > y + 1) {
    //   GameManager.Instance.CurrentHero.Hero.quotes.onLevelUp();
    //   GameManager.Instance.CurrentHero.OnLevelUp();
    // }
    // if (!GameManager.Instance.ChallengeManager.StatsIsOn()) return;
    // if (this.NameKey == HeroesNames.Apprentice && this.Level.ValueInt > Statistic.ApprenticeMaxLevelRealm.ValueInt)
    //   Statistic.ChangeSet(Statistic.ApprenticeMaxLevelRealm, this.Level.ValueInt);
    // if (this.Level.ValueInt <= Statistic.HeroMaxLevelAllTime.ValueInt) return;
    // Statistic.ChangeSet(Statistic.HeroMaxLevelAllTime, this.Level.ValueInt);
  }

  GetExpBuildings() {
    return BigNumber.Add(BigNumber.Multiplication(Statistic.TotalBuildings.ValueInt, GameManager.Instance.CurrentHero.ExpManaSources.Value), 1).Pow(0.85500001907348633);
  }

  GetExpActive() {
    let num1 = GameManager.Instance.CurrentHero.ExpBoost.Value.ToDouble();
    let bigNumber = BigNumber.Add(BigNumber.Multiplication(BigNumber.Add(Statistic.Clicks.Value, Statistic.AutoClicks.Value), num1), 1);
    let num2 = bigNumber.Log10() + 1.0;
    bigNumber = BigNumber.Add(BigNumber.Multiplication(Statistic.CastSpell.Value, num1), 1);

    let num3 = bigNumber.Ln() / 4.0 + 1.0;

    let num4 = num2 * num3;
    bigNumber = BigNumber.Add(Statistic.ManaSession.Value, 1);
    let num5 = bigNumber.Log10() + 1.0;

    return num4 * num5 * (Math.log(Statistic.ClickableCollect.ValueInt * num1 + 1.0) / 2.0 + 1.0);
  }

  GetExpMultPart() {
    return BigNumber.Multiplication(
      GameManager.Instance.CurrentHero.ExpMult.Value,
      BigNumber.Subtract(BigNumber.Multiplication(BigNumber.Add(this.GetExpBuildings(), 100.0), this.GetExpActive()), 100)
    );
  }

  GetBonusMult() {
    let currentHero = GameManager.Instance.CurrentHero;
    let value = BigNumber.Multiplication(BigNumber.Multiplication(currentHero.AbilityPower.Value, currentHero.Level.Value), currentHero.Level.Value);
    // if (mul) return BigNumber.Multiplication(mul, value);

    return value;
  }

  PostLoad() {}

  Tips_text() {
    return this.BaseTip();
  }

  AdditionalDescription() {
    let stringBuilder = new StringBuilder();
    let bigNumber = GameManager.Instance.CurrentHero.AbilityPower.Value;
    if (!BigNumber.IsEqual(bigNumber, 1)) {
      stringBuilder.AppendLine();
      stringBuilder.Append("Ability power: ");
      stringBuilder.Append(this.GetBonusMult());
    }

    return stringBuilder.ToString();
  }

  BaseTip() {
    let stringBuilder = new StringBuilder();
    stringBuilder.Append("<b>");
    stringBuilder.Append(this.Name);
    stringBuilder.Append("</b>");
    stringBuilder.Append(" Level: ");
    stringBuilder.AppendLine(this.Level.ValueInt.toString());
    stringBuilder.Append("Experience ");
    stringBuilder.Append(this.CurrentExp.ToReadableString("F0"));
    stringBuilder.Append(" / ");
    stringBuilder.AppendLine(this.Exp2LevelUp.ToReadableString("F0"));
    stringBuilder.AppendLine();
    return stringBuilder.ToString();
  }
}
