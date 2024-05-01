import { GameManager } from "./GameManager";
import { SimpleEffect } from "./SimpleEffect";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableInt } from "./VariableInt";

export class Idle {
  CurrentSaveClicks;
  IdleBonus: VariableComplex;
  IdleAndOfflineBonus: VariableComplex;
  TimeToIdle: VariableBignumber;
  SaveClicks: VariableInt;
  SaveClickCD: VariableBignumber;
  //  defaultBar: IdleBar;
  //  customBar: IdleBar;
  effect: SimpleEffect;
  //  Tip: TextMeshProUGUI;
  //  tip_timer: Timer;
  current_timer;
  current_timer_save_clicks;
  idleFromIaO: SimpleEffect;
  offlineFromIaO: SimpleEffect;

  Init() {
    this.IdleBonus = new VariableComplex("1.50");
    this.IdleAndOfflineBonus = new VariableComplex(1.0);
    this.TimeToIdle = new VariableBignumber("30");
    this.SaveClicks = new VariableInt(0);
    this.SaveClickCD = new VariableBignumber(0.0);
    this.effect = new SimpleEffect();
    this.effect.target = GameManager.Instance.Profit;
    //    this.StartTimer();
  }
}
