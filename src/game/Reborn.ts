import { BigNumber } from "./BigNumber";
import { GameManager } from "./GameManager";
import { Statistic } from "./Statistic";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableInt } from "./VariableInt";

export class Reborn {
  SoulPower: VariableComplex = new VariableComplex(0.03);
  SoulPowerFactor: VariableComplex = new VariableComplex(1.0);
  SoulPowerTotal: VariableBignumber = new VariableBignumber(0.0);
  Souls: VariableBignumber = new VariableBignumber(0.0);
  StartingSouls: VariableInt = new VariableInt(0);
  power_mult = 1;
  //   label_current: TextMeshProUGUI;
  //   label_next: TextMeshProUGUI;
  //   AscendButton: Button;
  //   visualEffect: ScreenshotCamera;
  prev_souls_effect: BigNumber;
  Bonus: BigNumber = new BigNumber(0);
  reborn_message;
  update_time = 1;

  constructor() {
    this.prev_souls_effect = new BigNumber(0.0);
    this.reborn_message = "Lose your mana sources, mana, mana, Character and pet experience, upgrades to start anew, earning mysteries which boost your progression speed.";
    this.Souls.SetValue(GameManager.Instance.SaveFile.Souls);
    // this.SoulPowerTotal.SetValue(GameManager.Instance.SaveFile.Souls);
  }

  Init() {
    // this.TurnOn();

    this.ApplySouls();
    // GameManager.Instance.Profit.Change(0.0, this.GetSoulPower());
  }

  ApplySouls() {
    if (!BigNumber.IsEqual(this.prev_souls_effect, 0.0)) GameManager.Instance.Profit.Change(0.0, BigNumber.Division(1.0, this.prev_souls_effect));

    this.SoulPowerTotal.SetValue(
      BigNumber.Multiplication(
        this.SoulPower.Value,
        BigNumber.Add(1, BigNumber.Division(BigNumber.Multiplication(BigNumber.Subtract(this.SoulPowerFactor.Value, 1.0), BigNumber.Add(this.Souls.Value, 1.0).Log10()), 100))
      )
    );

    // Reborn.SoulPowerTotal.SetValue(Reborn.SoulPower.Value * (1.0 + (Reborn.SoulPowerFactor.Value - 1.0) * (Reborn.Souls.Value + 1.0).Log10() / 100.0));
    this.prev_souls_effect = BigNumber.Add(1, BigNumber.Multiplication(this.SoulPowerTotal.Value, this.GetSoulPower()));

    if (!BigNumber.IsEqual(this.prev_souls_effect, 0.0)) GameManager.Instance.Profit.Change(0.0, this.prev_souls_effect);
  }

  GetSoulPower() {
    return BigNumber.Multiplication(this.Souls.Value, this.power_mult);
  }

  GetMysteries() {
    return BigNumber.Division(BigNumber.Subtract(BigNumber.Add(BigNumber.Division(BigNumber.Multiplication(8.0, Statistic.ManaRealm.Value), this.Souls.Value), 1).Sqrt(), 1.0), 2);
  }
}
