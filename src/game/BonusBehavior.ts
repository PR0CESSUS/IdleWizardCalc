import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";
import { VariableComplex } from "./VariableComplex";
import { VariableInt } from "./VariableInt";

export class BonusBehavior {
  baseTimeInterval = 5;
  baseTimeScatter = 0.35;
  baseBonus = 100;
  baseLifeTime = 2;
  TimeInterval: VariableComplex;
  TimeScatter: VariableComplex;
  SpawnSpeed: VariableComplex;
  SpawnRate = 1;
  BonusProfit: VariableComplex;
  BonusScatter: VariableComplex;
  BonusLifeTime: VariableComplex;
  BuffOnCollect: VariableComplex;
  DecreaseSpawnOnCollect: VariableInt;
  Objects;
  OnCollect;
  IncomeMode: Variable;

  Init(OnCollectEvent = null, incomeMod: Variable = null) {
    this.TimeInterval = new VariableComplex(this.baseTimeInterval);
    this.TimeScatter = new VariableComplex(this.baseTimeScatter);
    this.SpawnSpeed = new VariableComplex(1.0);
    this.BonusProfit = new VariableComplex(this.baseBonus);
    this.BonusLifeTime = new VariableComplex(this.baseLifeTime);
    this.BuffOnCollect = new VariableComplex(0.0);
    this.DecreaseSpawnOnCollect = new VariableInt(0);
    this.IncomeMode = incomeMod;
    this.OnCollect = OnCollectEvent;
  }

  Reset() {
    this.TimeInterval.SetValue(this.baseTimeInterval);
    this.TimeScatter.SetValue(this.baseTimeScatter);
    this.BonusProfit.SetValue(this.baseBonus);
    this.BonusLifeTime.SetValue(this.baseLifeTime);
    this.SpawnSpeed.SetValue(1.0);
  }

  GetInterval() {
    return this.TimeInterval.Value.ToString();
  }

  GetScatter() {
    // return (this.TimeInterval.Value * this.TimeScatter.Value).toFixed(2);
  }

  GetLifeTime() {
    return this.BonusLifeTime.Value.ToString();
  }

  GetBonusValue() {
    return this.IncomeMode == null ? this.BonusProfit.Value : BigNumber.Multiplication(this.BonusProfit.Value, this.IncomeMode.Value);
  }
}
