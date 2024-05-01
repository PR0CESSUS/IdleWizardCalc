import { BigNumber } from "./BigNumber";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableInt } from "./VariableInt";

export class Reborn {
  public static Instance: Reborn;
  public static SoulPower: VariableComplex = new VariableComplex(0.03);
  public static SoulPowerFactor: VariableComplex = new VariableComplex(1.0);
  public static SoulPowerTotal: VariableBignumber = new VariableBignumber(0.0);
  public static Souls: VariableBignumber = new VariableBignumber(0.0);
  public static StartingSouls: VariableInt = new VariableInt(0);
  power_mult = 1;
  //   label_current: TextMeshProUGUI;
  //   label_next: TextMeshProUGUI;
  //   AscendButton: Button;
  //   visualEffect: ScreenshotCamera;
  prev_souls_effect: BigNumber;
  Bonus;
  reborn_message;
  update_time = 1;

  //   Awake() {return Reborn.Instance = this;}

  Init() {
    this.prev_souls_effect = new BigNumber(0.0);
    this.reborn_message = "Lose your mana sources, mana, mana, Character and pet experience, upgrades to start anew, earning mysteries which boost your progression speed.";
    // this.SetMysteriesBonus();
    // this.AscendButton.interactable = false;
    // Reborn.SoulPower.OnChange = (Action) null;
    // VariableComplex soulPower = Reborn.SoulPower;
    // soulPower.OnChange = soulPower.OnChange + new Action(this.OnSoulsChange);
    // VariableComplex soulPowerFactor = Reborn.SoulPowerFactor;
    // soulPowerFactor.OnChange = soulPowerFactor.OnChange + new Action(this.OnSoulsChange);
  }
}
