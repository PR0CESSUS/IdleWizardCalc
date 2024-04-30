import { Attributes } from "@/type/Attributes";
import { VariableInt } from "./VariableInt";
import { CharacterEffect } from "./CharacterEffect";
import { SimpleEffect } from "./SimpleEffect";

export class CharacterAttribute {
  Key: Attributes;
  Level: VariableInt;
  TrueLevel: VariableInt;
  main_effect: CharacterEffect;
  Description;
  perks;

  //   IsAvailable {
  //     get {
  //       if (this.Key == Attributes.Mastery)
  //         return GameManager.Instance.Paragon.MasteryIsAvailable;
  //       return this.Key != Attributes.Empathy || GameManager.Instance.Paragon.EmpathyIsAvailable;
  //     }
  //   }

  //   Reset() {
  //     valueInt = this.TrueLevel.ValueInt;
  //     GameManager.Instance.AttributeManager.Free.Change(valueInt);
  //     this.TrueLevel.SetValue(0);
  //     this.Level.Change(-valueInt);
  //   }

  //   Preview() {return this.main_effect.Preview();}
  // GetDescription() => this.Description.Replace("#1", this.effect.parameter == null || !Settings.ColoredTips ? this.effect.Preview("") : "<color=#e2b018>" + this.effect.Preview("") + "</color>");

  // Activate() {
  //   if (this.activated)
  //     return;
  //   this.effect.Apply();
  //   if (this.effect != null && this.effect.parameter != null)
  //     this.effect.parameter.OnChange += new Action(((EffectDiminishing) this.effect).Update);
  //   this.activated = true;
  // }

  // Deactivate() {
  //   if (!this.activated)
  //     return;
  //   if (this.effect != null && this.effect.parameter != null)
  //     this.effect.parameter.OnChange -= new Action(((EffectDiminishing) this.effect).Update);
  //   this.effect.Delete();
  //   this.activated = false;
  // }
}

export class Perk {
  Level;
  Description;
  effect: SimpleEffect;
  activated;

  constructor(level, e: SimpleEffect, des) {
    this.Level = level;
    this.effect = e;
    this.Description = des;
  }
}
