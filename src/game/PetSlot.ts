import { PetNames } from "@/type/PetNames";
import { GameContext } from "./GameContext";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";
import { VariableLong } from "./VariableLong";

export class PetSlot {
  //   Pet: Pet;
  DefaultPet: PetNames;
  ExpBonus: VariableComplex;
  AbilityPower: VariableComplex;
  AbilityPowerT1: VariableComplex;
  AbilityPowerT2: VariableComplex;
  //   LevelLabel: TextMeshProUGUI;
  //   ExpBar: Image;
  //   Tip: TextMeshProUGUI;
  //   Portrait: PetPortraitFrame;
  Level: VariableInt;
  //   PetPanel: PetChoosePanel;
  PlayedTime: VariableLong;
  SkipedPlayedTime: VariableBignumber;
  StartingLevel: VariableInt;
  ChargeAbilityBoost: VariableFloat;
  //   Ability: GameObject;
  //   AbilityFiller: Image;
  //   sign: BottomPanelButton;
  //   OnSelect: Action;

  //   ExpCounter: CounterAverageBigNumber;
  tips_active;
  //   timer: Timer;
  tip_update_time = 0.25;
  //   OnMirror: Action;

  constructor() {
    this.ExpBonus = new VariableComplex(1.0);
    this.AbilityPower = new VariableComplex(1.0);
    this.AbilityPowerT1 = new VariableComplex(1.0);
    this.AbilityPowerT2 = new VariableComplex(1.0);
    this.Level = new VariableInt(1);
    this.PlayedTime = new VariableLong(0);
    this.SkipedPlayedTime = new VariableBignumber(0.0);
    this.StartingLevel = new VariableInt(0);
    this.ChargeAbilityBoost = new VariableFloat(1);
    // this.ExpCounter = new CounterAverageBigNumber();
    this.DefaultPet = PetNames.None;
    GameContext.ContextAddResource("Pet.BonusExp", this.ExpBonus);
    GameContext.ContextAddResource("Pet.AbilityPower", this.AbilityPower);
    GameContext.ContextAddResource("Pet.AbilityPowerT1", this.AbilityPowerT1);
    GameContext.ContextAddResource("Pet.AbilityPowerT2", this.AbilityPowerT2);
    GameContext.ContextAddResource("Pet.Time", this.PlayedTime);
    GameContext.ContextAddResource("Pet.StartingLvl", this.StartingLevel);
    GameContext.ContextAddResource("Pet.Level", this.Level);
    GameContext.ContextAddResource("Pet.ChargeAbility", this.ChargeAbilityBoost);

    // VariableInt startingLevel = this.StartingLevel;
    // startingLevel.OnChange = startingLevel.OnChange + new Action(this.RecalcLevel);
    // this.Unblock();
    // this.PetPanel.InitSecond();
  }
}
