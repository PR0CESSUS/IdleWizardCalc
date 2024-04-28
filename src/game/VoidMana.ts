import { BonusBehavior } from "./BonusBehavior";
import { VariableComplex } from "./VariableComplex";

export class VoidMana {
  Value;
  Decrease;
  Power: VariableComplex;
  Income;
  DecreasePercent = 0.01;
  DecreaseConstant = 2.5;
  Diminish = 1;
  effect;
  AllBiuldingsProfit;
  prev;
  time_update = 1;
  current_time;
  subscribe;
  off;
  OnSpawn;
  VoidCore: BonusBehavior;
  constructor() {
    this.Init();
    this.VoidCore = new BonusBehavior();
  }

  Init() {
    this.Value = 0;
    this.Power = new VariableComplex(0.019999999552965164);
    this.Decrease = 1.0;
    this.Income = 1.0;
    this.prev = 1.0;
    // this.VoidCore.Init(new Action<BigNumber, int>(this.Collect));
  }
}
