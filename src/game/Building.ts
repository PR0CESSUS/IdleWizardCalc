import { BigNumber } from "./BigNumber";
import { Buyable } from "./Buyable";
import { GameContext } from "./GameContext";
import { GameManager } from "./GameManager";
import { VariableComplex } from "./VariableComplex";
import { VariableInt } from "./VariableInt";

export class Building extends Buyable {
  Available = true;
  Level: VariableInt;
  TotalLevel: VariableInt;
  TemporalyLevel: VariableInt;
  levelsToBuy;
  cost_current = new BigNumber(0);
  base_cost_growth = 1.1;
  Tier;
  ACatalyst;
  MCatalyst;
  RCatalyst;
  Name;
  base_pps: string;
  pps_per_building: VariableComplex;
  Pps: VariableComplex;
  pps_multiplicator = new BigNumber(1);
  cost_growth: VariableComplex;
  NextGoal;
  NextGoalBonus;
  oldRed;
  oldTempRed;
  redIsOff;
  Description = "";

  // BuildingSpecBase spec { get; set; }

  // BigNumber cost_one => this.cost_growth.Value.Pow(this.Level.ValueInt) * this.base_cost.Value;

  Init() {
    this.Level = new VariableInt(0);
    this.TemporalyLevel = new VariableInt(0);
    this.TotalLevel = new VariableInt(0);
    this.pps_per_building = new VariableComplex(this.base_pps);
    this.Pps = new VariableComplex(0.0);
    this.base_cost = new VariableComplex(this.base_cost_string);
    this.cost_growth = new VariableComplex(this.base_cost_growth);
    // VariableInt level = this.Level;
    // level.OnChange = level.OnChange + new Action(this.recalculateTotalLevel);
    // VariableInt temporalyLevel = this.TemporalyLevel;
    // temporalyLevel.OnChange = temporalyLevel.OnChange + new Action(this.recalculateTotalLevel);
    GameContext.ContextAddBuilding(this);
  }

  Restart() {
    // this.Pps.Reset();
    // if (this.spec != null) {
    //   this.base_cost.Reset(this.spec.BuildingCost);
    //   this.cost_growth.SetValue(this.spec.GetBuildingGrowthRate());
    //   this.pps_per_building.SetValue(this.spec.BuildingProfit);
    // }
    // else {
    //   this.base_cost.Reset(this.base_cost_string);
    //   this.cost_growth.SetValue(this.base_cost_growth);
    //   this.pps_per_building.SetValue(this.base_pps);
    // }
    // valueInt = this.Level.ValueInt;
    // this.Level.SetValue(0);
    // this.TemporalyLevel.SetValue(this.RCatalyst);
    // this.recalculate_pps_multiplier();
    // if (Statistic.TotalBuildings.ValueInt >= valueInt)
    //   Statistic.TotalBuildings.Change(-valueInt);
    // else
    //   Statistic.TotalBuildings.SetValue(0);
  }

  ResetSpec() {
    // if (this.spec != null) {
    //   if (this.spec.building != this)
    //     Debug.Log((object) "wrong assign spec");
    //   this.spec.TurnOff();
    //   this.spec = (BuildingSpecBase) null;
    // }
    // this.Restart();
  }

  SetSpecialization(spec, reset = false) {
    // BuildingSpecBase
    // if (reset)
    //   this.ResetSpec();
    // this.spec = spec;
    // this.base_cost.SetValue(spec.BuildingCost);
    // this.cost_growth.SetValue(spec.GetBuildingGrowthRate());
    // this.pps_per_building.SetValue(spec.GetPPS());
    // this.recalculate_pps_multiplier();
    // this.CalculatePps();
    // this.CalculateCost(GameManager.Instance.BuyPack);
  }

  RecalculateTemp() {
    // if (this.redIsOff)
    //   return;
    // rcatalyst = this.RCatalyst;
    // num = (rcatalyst * GameManager.Instance.BuildingManager.CatalystTempPower.Value.ToFloat());
    // if (this.oldRed == rcatalyst && num == this.oldTempRed)
    //   return;
    // this.TemporalyLevel.Change(num - this.oldTempRed);
    // this.oldRed = rcatalyst;
    // this.oldTempRed = num;
  }

  TurnOffRed() {
    // this.redIsOff = true;
    // this.TemporalyLevel.Change(-this.oldTempRed);
    // this.oldTempRed = 0;
  }

  TurnOnRed() {
    this.redIsOff = false;
    this.RecalculateTemp();
  }

  SetRedCatalysts(red) {
    this.RCatalyst = red;
    this.RecalculateTemp();
    this.oldRed = this.RCatalyst;
    if (this.redIsOff) return;
    this.oldTempRed = this.oldRed * GameManager.Instance.BuildingManager.CatalystTempPower.Value.ToFloat();
  }

  LoadRedCatalysts(red) {
    this.RCatalyst = red;
    this.oldRed = this.RCatalyst;
    this.oldTempRed = this.oldRed * GameManager.Instance.BuildingManager.CatalystTempPower.Value.ToFloat();
    this.TemporalyLevel.SetValue(this.oldTempRed);
  }

  get GetBasePPS() {
    // if (this.pps_per_building != null && GameManager.Instance.Profit != null)
    //   return GameManager.Instance.Profit.ApplyModOnVar(this.pps_per_building.Value) * this.pps_multiplicator * (1.0 + this.ACatalyst * this.GetGreenCataPower()) * (1.0 + GameManager.Instance.BuildingManager.CatalystMultPower.Value).Pow(this.MCatalyst);
    // Debug.LogError((object) ("PPS is null " + this.Tier.ToString()));
    return 0.0;
  }

  GetGreenCataPower() {
    // BigNumber greenCataPower = GameManager.Instance.BuildingManager.CatalystAddPower.Value;
    // if (GameManager.Instance.BuildingManager.CatalystAddPowerScale.ValueFloat > 1.0)
    //   greenCataPower *= 1.0 + this.ACatalyst * (GameManager.Instance.BuildingManager.CatalystAddPowerScale.Value - 1.0);
    // greenCataPower: return;
  }

  CalculatePps() {
    return this.Pps.SetValue(this.TotalLevel.ValueInt * this.GetBasePPS);
  }

  OnBuy() {
    // levelsToBuy = this.levelsToBuy;
    // Statistic.TotalBuildings.Change(levelsToBuy);
    // this.Level.SetValue(this.Level.ValueInt + levelsToBuy);
  }

  recalculateTotalLevel() {
    // this.TotalLevel.SetValue(this.Level.ValueInt + this.TemporalyLevel.ValueInt);
    // this.recalculate_pps_multiplier();
  }

  recalculate_pps_multiplier() {
    // length = GameManager.Instance.BuildingLeveling.length;
    // num = -1;
    // this.pps_multiplicator = 1.0;
    // if (!this.IsEnableGoals())
    //   return;
    // for (let index = 0; index < length - 1 && this.TotalLevel.ValueInt >= GameManager.Instance.BuildingLeveling[index].level; index++)
    //   num = index;
    // this.NextGoal = GameManager.Instance.BuildingLeveling[num + 1].level;
    // this.NextGoalBonus = GameManager.Instance.BuildingLeveling[num + 1].increace;
    // if (num < 0)
    //   return;
    // for (let index = 0; index <= num; index++)
    //   this.pps_multiplicator *= GameManager.Instance.BuildingLeveling[index].increace;
    // if (num != length - 2)
    //   return;
    // x = (this.TotalLevel.ValueInt - GameManager.Instance.BuildingLeveling[length - 2].level) / GameManager.Instance.BuildingLeveling[length - 1].level;
    // if (x > 0)
    //   this.pps_multiplicator *= new BigNumber(GameManager.Instance.BuildingLeveling[length - 1].increace).Pow(x);
    // this.NextGoal = GameManager.Instance.BuildingLeveling[length - 2].level + GameManager.Instance.BuildingLeveling[length - 1].level * (1 + x);
    // this.NextGoalBonus = GameManager.Instance.BuildingLeveling[length - 1].increace;
  }

  // IsEnableGoals() {return this.spec == null || this.spec.Key == BuildingGilding.SourceType.Production;}

  //  getCostCurrent() => this.getCostFor(this.Level.ValueInt);

  //  getCostFor(level) => this.cost_growth.Value.Pow(level) * this.base_cost.Value / GameManager.Instance.BuildingManager.CostReduction.Value;

  //  GetCost(additionalLevels) => this.getCostCurrent() * this.cost_growth.Value.Pow(additionalLevels);

  CalculateCost(n = 1) {
    // this.cost_current = this.getCostCurrent();
    // if (n == 1) {
    //   this.levelsToBuy = 1;
    //   this.Cost = this.cost_current;
    // }
    // else {
    //   if (n < 1) {
    //     this.levelsToBuy = this.GetAmountAvailable();
    //     if (n == -25) {
    //       if (this.levelsToBuy < 25)
    //         this.levelsToBuy = 25;
    //       if (Settings.FloorMultiBuy)
    //         this.levelsToBuy -= (this.levelsToBuy + this.Level.ValueInt + this.TemporalyLevel.ValueInt) % n;
    //       else
    //         this.levelsToBuy -= this.levelsToBuy % 25;
    //     }
    //   }
    //   else
    //     this.levelsToBuy = !Settings.FloorMultiBuy ? n : n - (this.Level.ValueInt + this.TemporalyLevel.ValueInt) % n;
    //   this.Cost = 0.0;
    //   let num = 0;
    //   while (this.levelsToBuy > 0) {
    //     x = this.levelsToBuy >= 1000 ? 1000 : this.levelsToBuy;
    //     this.Cost = this.Cost + this.cost_current * (1.0 - this.cost_growth.Value.Pow(x)) / (1.0 - this.cost_growth.Value);
    //     this.levelsToBuy -= x;
    //     num += x;
    //     if (this.levelsToBuy > 0)
    //       this.cost_current = this.getCostFor(this.Level.ValueInt + num);
    //   }
    //   this.levelsToBuy = num;
    // }
  }

  // GetAmountAvailable() {return this.GetAmountAvailable(GameManager.Instance.Mana.Value);}

  // GetAmountAvailable( mana) {return (1.0 - (1.0 - this.cost_growth.Value) * mana / this.cost_current).Log_a(this.cost_growth.Value.ToDouble());}
}
