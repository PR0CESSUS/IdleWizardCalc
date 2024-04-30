import { HeroesNames } from "@/type/HeroesNames";
import { BigNumber } from "./BigNumber";
import { GameManager } from "./GameManager";
import { Spec } from "./Spec";
import { VariableBignumber } from "./VariableBignumber";
import { VariableInt } from "./VariableInt";

export class Hero extends Spec {
  NameKey: HeroesNames;
  Level: VariableInt;
  LevelProgress;
  Exp2evelUp: BigNumber;
  CurrentExp: BigNumber;
  Feature;
  SpellList = [];
  ClosedBuildings = [];
  experience: VariableBignumber = new VariableBignumber(new BigNumber(0.0));
  RequedClasses;
  // OnApplyEffect: Action;
  // protected quotes: QuotesSystem;

  Init() {
    // base.Init();
    this.Level = new VariableInt(new BigNumber(1));
    this.CurrentExp = new BigNumber(0);
    this.RequedClasses = [];
    this.close_buildings();
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

  UpdateExp() {
    let y = GameManager.Instance.CurrentHero.StartingLevel.ValueInt - 1;
    let growBaseLevel = GameManager.Instance.CurrentHero.GrowBaseLevel;
    let num = 1500;
    // let valueInt = this.Level.ValueInt;
    this.RecalculateExp((num * (1.0 - Math.pow(growBaseLevel, y))) / (1.0 - growBaseLevel), GameManager.Instance.CurrentHero.ExpBoost.Value.ToDouble());
    let p = BigNumber.Division(
      BigNumber.Multiplication(BigNumber.Subtract(new BigNumber(1), this.experience.Value), BigNumber.Subtract(new BigNumber(1), new BigNumber(growBaseLevel))),
      new BigNumber(new BigNumber(150).Log_a(growBaseLevel))
    );
    if (this.Level.ValueInt != p.ToInt() + 1) this.Level.SetValue(new BigNumber(p.ToInt() + 1));
    this.Exp2evelUp = BigNumber.Multiplication(new BigNumber(num), new BigNumber(Math.pow(growBaseLevel, p.ToFloat())));
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
    // return ((BigNumber) Statistic.TotalBuildings.ValueInt * GameManager.Instance.CurrentHero.ExpManaSources.Value + new BigNumber(1)).Pow(0.85500001907348633);
  }

  GetExpActive() {
    // num1 = GameManager.Instance.CurrentHero.ExpBoost.Value.ToDouble();
    // bigNumber: BigNumber = (Statistic.Clicks.Value + Statistic.AutoClicks.Value) * (BigNumber) num1 + new BigNumber(1);
    // num2 = bigNumber.Log10() + 1.0;
    // bigNumber = Statistic.CastSpell.Value * (BigNumber) num1 + new BigNumber(1);
    // num3 = bigNumber.Ln() / 4.0 + 1.0;
    // num4 = num2 * num3;
    // bigNumber = Statistic.ManaSession.Value + new BigNumber(1);
    // num5 = bigNumber.Log10() + 1.0;
    // return (BigNumber) (num4 * num5 * (Math.log(Statistic.ClickableCollect.ValueInt * num1 + 1.0) / 2.0 + 1.0));
  }

  GetExpMultPart() {
    // return GameManager.Instance.CurrentHero.ExpMult.Value * ((this.GetExpBuildings() + (BigNumber) 100.0) * this.GetExpActive() - (BigNumber) 100.0);
  }

  RecalculateExp(starting_exp, boost) {
    // if (Statistic.TotalBuildings.ValueInt < 0)
    //   Statistic.TotalBuildings.SetValue(0);
    // this.experience.SetValue((BigNumber) starting_exp + GameManager.Instance.CurrentHero.ExpFlat.Value + this.GetExpMultPart());
  }

  GetBonusMult() {
    let currentHero = GameManager.Instance.CurrentHero;

    return BigNumber.Multiplication(BigNumber.Multiplication(currentHero.AbilityPower.Value, currentHero.Level.Value), currentHero.Level.Value);
  }

  PostLoad() {}
}
