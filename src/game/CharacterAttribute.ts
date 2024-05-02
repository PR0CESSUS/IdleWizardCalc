import { Attributes } from "@/type/Attributes";
import { CharacterEffect } from "./CharacterEffect";
import { SimpleEffect } from "./SimpleEffect";
import { VariableInt } from "./VariableInt";

export class CharacterAttribute {
  Key: Attributes;
  Level: VariableInt;
  TrueLevel: VariableInt;
  main_effect: CharacterEffect;
  Description: string;
  perks: Perk[] = [];

  get IsAvailable() {
    //  {
    //   if (this.Key == Attributes.Mastery)
    //     return GameManager.Instance.Paragon.MasteryIsAvailable;
    //   return this.Key != Attributes.Empathy || GameManager.Instance.Paragon.EmpathyIsAvailable;
    // }
    return true;
  }

  //   Reset() {
  //     valueInt = this.TrueLevel.ValueInt;
  //     GameManager.Instance.AttributeManager.Free.Change(valueInt);
  //     this.TrueLevel.SetValue(0);
  //     this.Level.Change(-valueInt);
  //   }

  Preview() {
    return this.main_effect.Preview();
  }
  GetDescription() {
    return this.Description.replace("#1", this.main_effect.GetMainBonus().ToStringPercent());
  }
}

export class Perk {
  Level: number;
  Description: string;
  effect: SimpleEffect;
  activated: boolean;
  attribute: string;
  Data;

  constructor(level: number, e: SimpleEffect, des: string) {
    this.Level = level;
    this.effect = e;
    this.Description = des;
  }
  GetDescription() {
    // if (this.Level == 50) console.log("s");

    return this.Description.replace("#1", this.effect.Preview());
  }

  Activate() {
    if (this.activated) return;

    try {
      this.effect.Apply();
    } catch (error) {
      console.log(this.attribute, this.Level, this.effect);
    }

    // if (this.effect != null && this.effect.parameter != null)
    //   this.effect.parameter.OnChange += new Action(((EffectDiminishing) this.effect).Update);
    this.activated = true;
  }

  // Deactivate() {
  //   if (!this.activated)
  //     return;
  //   if (this.effect != null && this.effect.parameter != null)
  //     this.effect.parameter.OnChange -= new Action(((EffectDiminishing) this.effect).Update);
  //   this.effect.Delete();
  //   this.activated = false;
  // }
}
