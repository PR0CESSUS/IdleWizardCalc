import { BigNumber } from "./BigNumber";
import { VariableBignumber } from "./VariableBignumber";

export class ManaManager {
  Mana: VariableBignumber;
  StartingMana: VariableBignumber;
  manaChange = new BigNumber(0);
  manaChangeTimer;
  manaChangePeriod = 0.2;
  avChange = new BigNumber(0);
  avMSChange = new BigNumber(0);
  avChangeTimer;
  // counterIncome: IncomeCounter;
  // counterMSources: IncomeCounter;

  constructor() {
    this.Mana = new VariableBignumber(0.0);
    this.StartingMana = new VariableBignumber(0.0);
    //   this.manaChange = this.avChange = this.avMSChange = 0.0;
    this.manaChangeTimer = this.avChangeTimer = 0.0;
    //   this.counterIncome = new IncomeCounter(10);
    //   this.counterMSources = new IncomeCounter(10);
  }

  Restart() {
    this.Mana.SetValue(this.StartingMana.Value);
    //   this.manaChange = this.avChange = this.avMSChange = 0.0;
    this.manaChangeTimer = this.avChangeTimer = 0.0;
    //   this.counterIncome.Reset();
    //   this.counterMSources.Reset();
  }

  Reset(value: BigNumber) {
    this.Mana.SetValue(value);
    //   this.manaChange = this.avChange = this.avMSChange = 0.0;
    this.manaChangeTimer = this.avChangeTimer = 0.0;
    //   this.counterIncome.Reset();
    //   this.counterMSources.Reset();
  }

  Change(add: BigNumber, msources = false) {
    if (BigNumber.Sign(add) == 1) {
      // this.manaChange += add;
      // this.avChange += add;
      // if (!msources)
      //   return;
      // this.avMSChange += add;
    } else this.Mana.Change(add);
  }

  ManaChange() {
    //   if (this.manaChangeTimer > this.manaChangePeriod && this.manaChange != 0.0) {
    //     this.Mana.Change(this.manaChange);
    //     Statistic.Change(Statistic.ManaAllTime, this.manaChange);
    //     Statistic.Change(Statistic.ManaRealm, this.manaChange);
    //     Statistic.ManaSession.Change(this.manaChange);
    //     this.manaChange = 0.0;
    //     this.manaChangeTimer = 0.0;
    //   }
    //   if (this.avChangeTimer >= 1.0) {
    //     this.counterIncome.push(this.avChange);
    //     this.counterMSources.push(this.avMSChange);
    //     this.avChange = this.avMSChange = 0.0;
    //     --this.avChangeTimer;
    //   }
    //   if (Time.timeScale == 0.0)
    //     return;
    //   this.manaChangeTimer += Time.deltaTime / Time.timeScale;
    //   this.avChangeTimer += Time.deltaTime / Time.timeScale;
    // }
  }
}
