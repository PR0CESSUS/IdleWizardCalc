import { BigNumber } from "./BigNumber";
import { CritRatingCalculations } from "./CritRatingCalculations";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";

export class Orb {
  click_profit_str = "1";
  crit_chance_str = "5";
  crit_profit_str = ".5";
  click_profit: VariableComplex;
  crit_chance: VariableComplex;
  crit_profit: VariableComplex;
  crit_additional_proc: VariableFloat;
  autoclick_profit: VariableComplex;
  percent_pps: VariableComplex;
  autoclicksFromSpell: VariableComplex;
  Passive;

  //   mega: MegaClick;
  critRating: CritRatingCalculations;
  autoclicksChange;
  manualClicksChange;
  clicksUpdateTimer;
  clicksUpdatePeriod = 0.2;
  autoclicks: VariableInt;
  //   autoclick_effect: EffectAutoClick;
  //   ClickCounter: IncomeCounter;
  //   Orb.AutoclickPool autoclickPool;
  AutoclicksPerSecond: VariableFloat;

  //   get GetCritChange() {return this.crit_chance.Value >= 100.0 ? 100 : this.crit_chance.ValueFloat;}

  //    AutoclickCounter => this.autoclickPool.AutoclickCounter;

  //   get getAutoclickPerSec() {return this.autoclickPool.autoclickPerSec;}

  constructor() {
    this.click_profit = new VariableComplex(this.click_profit_str);
    this.crit_chance = new VariableComplex(this.crit_chance_str);
    this.crit_profit = new VariableComplex(this.crit_profit_str);
    this.crit_additional_proc = new VariableFloat(0.0);
    this.critRating = new CritRatingCalculations();
    this.autoclick_profit = new VariableComplex(1.0);
    this.percent_pps = new VariableComplex(0.0);
    this.autoclicksFromSpell = new VariableComplex(1.0);
    this.autoclicks = new VariableInt(0);
    // this.autoclick_effect = new EffectAutoClick(0.0, fromSpell: false);
    this.autoclicksChange = this.manualClicksChange = 0;
    this.AutoclicksPerSecond = new VariableFloat(0.0);
    // this.ClickCounter = new IncomeCounter(20);
    // this.autoclickPool = new Orb.AutoclickPool();
  }

  Update() {
    // this.critRating.Update();
    // if (this.clicksUpdateTimer > this.clicksUpdatePeriod) {
    //   if (this.autoclicksChange > 0) {
    //     Statistic.AutoClicks.Change(this.autoclicksChange);
    //     Statistic.Change(Statistic.AutoClicksTotal, this.autoclicksChange);
    //     Statistic.Change(Statistic.AutoClicksRealm, this.autoclicksChange);
    //     this.autoclicksChange = 0;
    //   }
    //   if (this.manualClicksChange > 0) {
    //     Statistic.Clicks.Change(this.manualClicksChange);
    //     Statistic.ClicksTotal.Change(this.manualClicksChange);
    //     Statistic.ClicksRealm.Change(this.manualClicksChange);
    //     this.manualClicksChange = 0;
    //   }
    //   this.clicksUpdateTimer = 0.0;
    // }
    // if (Time.timeScale != 0.0)
    //   this.clicksUpdateTimer += Time.deltaTime / Time.timeScale;
    // if (this.autoclicks.ValueInt != this.autoclick_effect.Frequency)
    //   this.autoclick_effect.Frequency = this.autoclicks.ValueInt;
    // this.autoclick_effect.Update();
    // this.autoclickPool.Update(Time.unscaledDeltaTime);
    // if (this.AutoclicksPerSecond.ValueFloat == this.getAutoclickPerSec)
    //   return;
    // this.AutoclicksPerSecond.SetValue(this.getAutoclickPerSec);
  }

  //   debug() {return Debug.Log((object) (this.crit_chance.debug() + " " + this.crit_profit.debug()));}

  Click() {
    // if (this.mega == null || this.mega.megaCharges.ValueInt == 0)
    //   GameManager.Instance.Idle.OnClickOrb();
    // this.click();
  }

  UpdateSimulationSpeed() {}

  AutoClick(profit: BigNumber, crit_chance_arg: BigNumber, crit_profit_arg: BigNumber, shard_drop, pet_click = false, idle_break = false, pet_exp = 1, times = 1) {
    // let profit1 = profit * this.autoclick_profit.Value *  times;
    // let crit = 0;
    // if (times == 1) {
    //   crit = this.checkCrit(crit_chance_arg);
    //   if (crit >= 0) {
    //     crit = 1;
    //     if (this.OnCrit != null)
    //       this.OnCrit(1);
    //     if (this.OnCritAuto != null)
    //       this.OnCritAuto(1);
    //     profit1 *= 1.0 + crit_profit_arg;
    //   }
    // }
    // else {
    //   num1 = (crit_chance_arg == 0.0 ? this.GetCritChange : crit_chance_arg).ToFloat();
    //   num2 = Mathf.FloorToInt((times * num1 / 100.0));
    //   if (num2 >= 1) {
    //     crit = num2;
    //     profit1 *= 1.0 + num1 * crit_profit_arg / 100.0;
    //     if (this.OnCrit != null)
    //       this.OnCrit(num2);
    //     if (this.OnCritAuto != null)
    //       this.OnCritAuto(num2);
    //   }
    // }
    // if (idle_break && (UnityEngine.Object) GameManager.Instance.Idle != (UnityEngine.Object) null)
    //   GameManager.Instance.Idle.Restart();
    // BigNumber shards = 0.0;
    // if (shard_drop != 0.0)
    //   shards = GameManager.Instance.Scrolls.ShardsPerClick.Value * shard_drop * 0.20000000298023224 * times;
    // BigNumber exp = 0.0;
    // if (pet_click && GameManager.Instance.CurrentPet.Pet != null)
    //   exp = pet_exp;
    // this.autoclickPool.push(profit1, shards, exp, crit, times);
    // this.autoclicksChange += times;
    // if (this.OnClick != null)
    //   this.OnClick(times);
    // if (this.OnAutoClick == null)
    //   return;
    // this.OnAutoClick(times);
  }

  click() {
    // BigNumber bigNumber = this.click_profit.Value;
    // crit = this.checkCrit(this.GetCritChange);
    // if (crit >= 0 && this.OnCrit != null)
    //   this.OnCrit(1);
    // if (this.mega != null && this.mega.megaCharges.ValueInt > 0) {
    //   if (!this.mega.Super) {
    //     bigNumber *= this.mega.megaProfit.Value * this.mega.GetHC();
    //     if (crit >= 0)
    //       bigNumber *= 1.0 + this.crit_profit.Value;
    //   }
    //   else {
    //     bigNumber = this.click_profit.Value * (1.0 + this.GetCritChange * this.crit_profit.Value / 100.0) * this.mega.megaProfit.Value * this.mega.megaCharges.Value.Pow(this.mega.superPower);
    //     crit = 0;
    //   }
    //   this.text_up_mega(bigNumber, crit);
    //   if (this.OnMega != null)
    //     this.OnMega();
    //   this.mega.onMega(this.mega.Super);
    // }
    // else {
    //   if (crit >= 0) {
    //     bigNumber *= 1.0 + this.crit_profit.Value;
    //     if (Settings.Particles) {
    //       this.CritEffect.transform.position = Camera.main.ScreenToWorldPoint(Input.mousePosition) with
    //       {
    //         z = 0.0
    //       };
    //       this.CritEffect.Play();
    //     }
    //   }
    //   this.text_up(bigNumber, crit);
    // }
    // GameManager.Instance.ManaChange(bigNumber);
    // this.ClickCounter.push(bigNumber);
    // this.DropShards(GameManager.Instance.Scrolls.GetProgressFromClick());
    // this.manualClicksChange++;
    // if (this.OnClick != null)
    //   this.OnClick(1);
    // if (this.OnManualClick == null)
    //   return;
    // this.OnManualClick();
  }

  DropShards(dp: BigNumber) {
    // if (Settings.ThrowShards && this.OrbContainer.activeInHierarchy)
    //   this.AnimatedShards.ThrowShard(dp);
    // else
    //   GameManager.Instance.Scrolls.ShardsPool.push(dp);
  }

  text_up_mega(profit: BigNumber, crit) {
    // if (!GameManager.Instance.AnimatedText.AvailableText)
    //   return;
    // Vector3 worldPo= Camera.main.ScreenToWorldPoint(Input.mousePosition) with
    // {
    //   z = 0.0
    // };
    // Color color = crit >= 0 ? this.orange : Color.yellow;
    // StringBuilder stringBuilder = new StringBuilder();
    // stringBuilder.Append(profit.ToReadableString());
    // if (!this.VisualContainer.activeSelf)
    //   return;
    // GameManager.Instance.AnimatedText.TextUp(stringBuilder.ToString(), worldPoint, color, size: (1.25 + 0.05000000074505806 * crit));
  }

  text_up(profit: BigNumber, crit, auto = false, amount = 1) {
    // if (!GameManager.Instance.AnimatedText.AvailableText || !this.gameObject.activeInHierarchy)
    //   return;
    // position: Vector3;
    // if (auto)
    //   position = this.transform.position;
    // else
    //   position = Camera.main.ScreenToWorldPoint(Input.mousePosition) with
    //   {
    //     z = 0.0
    //   };
    // Color white = Color.white with
    // {
    //   g = (1.0 - crit / amount),
    //   b = (1.0 - crit / amount),
    //   r = 1
    // };
    // StringBuilder stringBuilder = new StringBuilder();
    // stringBuilder.Append(profit.ToReadableString());
    // if (amount > 1) {
    //   stringBuilder.Append(" (<sprite=0 tint=1>");
    //   stringBuilder.Append(amount);
    //   stringBuilder.Append(")");
    // }
    // if (!this.VisualContainer.activeSelf)
    //   return;
    // size = 1.25;
    // GameManager.Instance.AnimatedText.TextUp(stringBuilder.ToString(), position, white, size: size, lifetime: 2);
  }

  //   checkCrit(BigNumber chance) {
  //     num1 = -1;
  //     if (chance < 0.0)
  //       num1: return;
  //     num2 = (chance == 0.0 ? this.GetCritChange : chance).ToDouble();
  //     if (UnityEngine.Random.Range(0.0, 100) / num2 <= 1.0)
  //       num1 = 0;
  //     num1: return;
  //   }

  //   export class AutoclickPool {
  //     Dictionary<string, Orb.AutoclickPool.AutoclickData> data;
  //     AutoclickCounter: IncomeCounter;
  //     autoclickPerSec;
  //     tempAC;
  //     timerAC;
  //     timerRelease;

  //     AutoclickPool() {
  //       this.Reset();
  //       this.AutoclickCounter = new IncomeCounter(20);
  //     }

  //     Update(dt) {
  //       this.timerAC += dt;
  //       if (this.timerAC >= 1.0) {
  //         this.autoclickPerSec = this.tempAC;
  //         --this.timerAC;
  //         this.tempAC = 0;
  //       }
  //       this.timerRelease += dt;
  //       if (this.timerRelease <= 0.25)
  //         return;
  //       this.timerRelease = 0.0;
  //       this.Release();
  //     }

  //     Reset() {return this.data = new Dictionary<string, Orb.AutoclickPool.AutoclickData>()}

  //     Release() {
  //       BigNumber profit = 0.0;
  //       BigNumber bigNumber = 0.0;
  //       let crit = 0;
  //       foreach (KeyValuePair<string, Orb.AutoclickPool.AutoclickData> keyValuePair in this.data) {
  //         BigNumber add = keyValuePair.Value.Mana * keyValuePair.Value.Amount;
  //         crit += keyValuePair.Value.IsCritical;
  //         profit += add;
  //         bigNumber += keyValuePair.Value.Amount;
  //         GameManager.Instance.ManaChange(add);
  //         GameManager.Instance.Orb.AutoclickCounter.push(add);
  //         if (keyValuePair.Value.Shards >= 1.0)
  //           GameManager.Instance.Orb.DropShards(keyValuePair.Value.Shards);
  //         if (keyValuePair.Value.PetExp >= 1.0 && GameManager.Instance.CurrentPet.Pet != null)
  //           GameManager.Instance.CurrentPet.Pet.AddExpConst(keyValuePair.Value.PetExp);
  //       }
  //       if (bigNumber >= 1.0) {
  //         this.AutoclickCounter.push(profit / bigNumber);
  //         GameManager.Instance.Orb.text_up(profit, crit, true, bigNumber.ToInt());
  //       }
  //       this.Reset();
  //     }

  //     ReleaseMin() {
  //       str = string.Empty;
  //       BigNumber bigNumber = 0.0;
  //       foreach (KeyValuePair<string, Orb.AutoclickPool.AutoclickData> keyValuePair in this.data) {
  //         if (str == string.Empty || keyValuePair.Value.Amount < bigNumber) {
  //           str = keyValuePair.Key;
  //           bigNumber = keyValuePair.Value.Amount;
  //         }
  //       }
  //       Orb.AutoclickPool.AutoclickData autoclickData = this.data[str];
  //       GameManager.Instance.Orb.text_up(str, autoclickData.IsCritical, true, autoclickData.Amount);
  //       BigNumber add = autoclickData.Mana * autoclickData.Amount;
  //       GameManager.Instance.ManaChange(add);
  //       GameManager.Instance.Orb.AutoclickCounter.push(add);
  //       if (autoclickData.Shards >= 1.0)
  //         GameManager.Instance.Orb.DropShards(autoclickData.Shards);
  //       if (autoclickData.PetExp >= 1.0)
  //         GameManager.Instance.CurrentPet.Pet.AddExp(autoclickData.PetExp);
  //       this.AutoclickCounter.push(add / autoclickData.Amount);
  //       this.Reset();
  //     }

  //     Add(BigNumber profit, BigNumber shards, BigNumber exp, crit, times = 1) {
  //       scientific = profit.ToScientific();
  //       if (!this.data.ContainsKey(scientific))
  //         this.data.push(scientific, new Orb.AutoclickPool.AutoclickData(0, profit));
  //       Orb.AutoclickPool.AutoclickData autoclickData = this.data[scientific];
  //       autoclickData.IsCritical += crit;
  //       autoclickData.Amount += times;
  //       autoclickData.Shards += shards;
  //       if (exp.Mantissa > 0.0)
  //         autoclickData.PetExp += GameManager.Instance.CurrentPet.ExpBonus.ApplyModOnVar(exp) * times;
  //       this.tempAC += times;
  //     }

  //     export class AutoclickData {
  //       Amount;
  //       Mana: BigNumber;
  //       Shards: BigNumber;
  //       PetExp: BigNumber;
  //       IsCritical;

  //       AutoclickData(crit, BigNumber mana) {
  //         this.Amount = 0;
  //         this.IsCritical = crit;
  //         this.Mana = mana;
  //         this.Shards = 0.0;
  //         this.PetExp = 0.0;
  //       }
  //     }
  //   }
}
