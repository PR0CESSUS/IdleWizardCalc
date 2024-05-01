import { BigNumber } from "./BigNumber";
import { BonusBehavior } from "./BonusBehavior";
import { Effect } from "./Effect";
import { GameContext } from "./GameContext";
import { GameManager } from "./GameManager";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";

export class VoidMana {
  Value: VariableBignumber;
  Decrease: VariableComplex;
  Power: VariableComplex;
  Income: VariableComplex;
  DecreasePercent = 0.01;
  DecreaseConstant = 2.5;
  Diminish = 1;
  effect: Effect;
  AllBiuldingsProfit: VariableComplex;
  prev: BigNumber;
  time_update = 1;
  current_time;
  subscribe;
  off;
  OnSpawn;
  VoidCore: BonusBehavior;
  constructor() {
    this.VoidCore = new BonusBehavior();
  }

  Init() {
    this.Value = new VariableBignumber(GameManager.Instance.SaveFile.VMana);
    this.Power = new VariableComplex(0.019999999552965164);
    this.Decrease = new VariableComplex(1.0);
    this.Income = new VariableComplex(1.0);
    this.prev = new BigNumber(1);
    this.effect = GameContext.GetEffect("Linear");
    this.AllBiuldingsProfit = GameManager.Instance.Profit;

    // const v = this.Value;

    //
    this.VoidCore.Init();
  }

  UpdateEffect() {
    this.effect.Delete(this.AllBiuldingsProfit, new BigNumber(0), this.prev, null);
    this.prev = this.GetBonus();
    this.effect.apply(this.AllBiuldingsProfit, new BigNumber(0), this.prev, null);
  }

  GetBonus() {
    return this.Diminish != 1.0
      ? BigNumber.Add(new BigNumber(1), BigNumber.Multiplication(this.Value.Value, this.Power.Value).Pow(this.Diminish))
      : BigNumber.Add(new BigNumber(1), BigNumber.Multiplication(this.Value.Value, this.Power.Value));
  }
}
