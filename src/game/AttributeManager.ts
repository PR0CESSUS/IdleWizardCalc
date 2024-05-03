import { Attributes } from "@/type/Attributes";
import { BigNumber } from "./BigNumber";
import { CharacterAttribute, Perk } from "./CharacterAttribute";
import { GameContext } from "./GameContext";
import { GlobalData } from "./GlobalData";
import { VariableBignumber } from "./VariableBignumber";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";
import { AttributeFormat } from "@/type/AttributeFormat";
import { CharacterEffect } from "./CharacterEffect";
import { SimpleEffect } from "./SimpleEffect";
import { GameManager } from "./GameManager";

export class AttributeManager {
  IsEnabled = true;
  Total: VariableInt;
  Free: VariableInt;
  Searched: VariableInt;
  BonusPoints: VariableInt;
  SearchRate: VariableFloat;
  AttributePower: VariableFloat;
  VersatilityPower: VariableFloat;
  Resets;
  // Panel: AttributePanel;
  // AddButton: Button;
  based = 1.25;
  MaxValue: VariableInt;
  BonusToAll: VariableBignumber;
  BonusToAllMem: VariableBignumber;
  // text_position: Vector3;
  // color: Color;
  effectsToAll;
  effectsToAllApplied;
  prev_all_bonus: BigNumber = new BigNumber(0);
  // OnInvest: Action;
  need;
  // Attributes: ([ keyof typeof Attributes])
  Attributes: CharacterAttribute[] = [];

  constructor() {}

  Init() {
    this.Total = new VariableInt(0);
    this.Free = new VariableInt(0);
    this.Searched = new VariableInt(0);
    this.SearchRate = new VariableFloat(1);
    this.BonusToAll = new VariableBignumber(0.0);
    this.BonusToAllMem = new VariableBignumber(0.0);
    this.BonusPoints = new VariableInt(0);
    this.MaxValue = new VariableInt(250); // 100
    this.AttributePower = new VariableFloat(1);
    this.VersatilityPower = new VariableFloat(1);
    this.Resets = 1;
    this.need = new BigNumber(100.0);

    GameContext.ContextAddResource("CharChar.Total", this.Total);
    GameContext.ContextAddResource("Char.Free", this.Free);
    GameContext.ContextAddResource("Char.Seached", this.Searched);
    GameContext.ContextAddResource("Char.Rate", this.SearchRate);
    GameContext.ContextAddResource("Char.ToAll", this.BonusToAll);
    GameContext.ContextAddResource("Char.ToAllMem", this.BonusToAllMem);
    GameContext.ContextAddResource("Char.Cap", this.MaxValue);
    GameContext.ContextAddResource("Char.AttributePower", this.AttributePower);
    GameContext.ContextAddResource("Char.VersatilityPower", this.VersatilityPower);
    //   this.CreateDump(this.Panel.dump);
    this.Create(Attributes.Intelligence);
    this.Create(Attributes.Insight);
    this.Create(Attributes.Spellcraft);
    this.Create(Attributes.Wisdom);
    this.Create(Attributes.Dominance);
    this.Create(Attributes.Patience);
    this.Create(Attributes.Mastery);
    this.Create(Attributes.Empathy);

    // this.Searched.OnChange = null;
    //   Reborn.Souls.OnChange = null;
    //   GameManager.Instance.CurrentHero.Level.OnChange = null;
    this.InitBonusToAll();
    //   let searched: VariableInt = this.Searched;
    //   searched.OnChange = searched.OnChange + new Action(this.RecalculateNeed);
    //   let souls: VariableBignumber = Reborn.Souls;
    //   souls.OnChange = souls.OnChange + new Action(this.RecalculateNeed);
    //   let level: VariableInt = GameManager.Instance.CurrentHero.Level;
    //   level.OnChange = level.OnChange + new Action(this.RecalculateNeed);
    //   this.PostSave();
    //   this.text_position = new Vector3(0.0, Camera.main.ScreenToWorldPoint(GameManager.Instance.CurrentHero.transform.position).y - 1.4, 0.0);
    //   this.text_position.z = 0.0;
    //   this.color = new Color(1, 1, 0.2);
    //   GameManager.Instance.OnExile += new Action(this.CheckButon);
    // this.Panel.Init();
  }

  // Restart() {
  //   GameManager.Instance.Paragon.onChangeLVL -= new Action(this.UpdateBonusToAll);
  //   bonusToAllMem: VariableBignumber = this.BonusToAllMem;
  //   bonusToAllMem.OnChange = bonusToAllMem.OnChange - new Action(this.UpdateBonusToAll);
  //   attributePower: VariableFloat = this.AttributePower;
  //   attributePower.OnChange = attributePower.OnChange - new Action(this.UpdateAllAttributes);
  //   versatilityPower: VariableFloat = this.VersatilityPower;
  //   versatilityPower.OnChange = versatilityPower.OnChange - new Action(this.UpdateVersatility);
  //   this.RemoveBonusToAll();
  //   foreach (allAttribute: AttributeBar in this.Panel.GetAllAttributes())
  //     allAttribute.OffPerks();
  //   this.Panel.dump.Off();
  // }

  // PostReset() {
  //   this.ApplyBonusToAll();
  //   foreach (allAttribute: AttributeBar in this.Panel.GetAllAttributes())
  //     allAttribute.OnPerk();
  //   this.Panel.dump.On();
  //   GameManager.Instance.Paragon.onChangeLVL += new Action(this.UpdateBonusToAll);
  //   bonusToAllMem: VariableBignumber = this.BonusToAllMem;
  //   bonusToAllMem.OnChange = bonusToAllMem.OnChange + new Action(this.UpdateBonusToAll);
  //   attributePower: VariableFloat = this.AttributePower;
  //   attributePower.OnChange = attributePower.OnChange + new Action(this.UpdateAllAttributes);
  //   versatilityPower: VariableFloat = this.VersatilityPower;
  //   versatilityPower.OnChange = versatilityPower.OnChange + new Action(this.UpdateVersatility);
  //   this.RecalculateNeed();
  // }

  // IsInvested() {return this.Free.ValueInt != this.Total.ValueInt;}

  // RealmReset() {
  //   this.PreSave();
  //   this.Restart();
  //   this.ResetAttributesAll();
  //   this.Free.SetValue(0);
  //   this.Searched.SetValue(0);
  //   this.progress = 0.0;
  //   this.PostSave();
  //   this.CheckButon();
  // }

  // Update() {
  //   this.EarnCalculations();
  //   if (!(this.BonusToAll.Value != this.prev_all_bonus))
  //     return;
  //   this.prev_all_bonus = this.BonusToAll.Value;
  //   this.UpdateBonusToAll();
  // }

  Create(key: Attributes) {
    let attributeFormatList: AttributeFormat[];
    let characterAttribute = new CharacterAttribute();
    characterAttribute.Key = key;
    characterAttribute.Level = new VariableInt(0);
    characterAttribute.TrueLevel = new VariableInt(0);
    characterAttribute.perks = [];
    switch (key) {
      case Attributes.Intelligence:
        attributeFormatList = GlobalData.Intelligence;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Int);
        break;
      case Attributes.Insight:
        attributeFormatList = GlobalData.Insight;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Ins);
        break;
      case Attributes.Spellcraft:
        attributeFormatList = GlobalData.Spellcraft;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Scr);
        break;
      case Attributes.Wisdom:
        attributeFormatList = GlobalData.Wisdom;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Wis);
        break;
      case Attributes.Dominance:
        attributeFormatList = GlobalData.Dominance;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Dom);
        break;
      case Attributes.Patience:
        attributeFormatList = GlobalData.Patience;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Pat);
        break;
      case Attributes.Mastery:
        attributeFormatList = GlobalData.Mastery;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Mas);
        break;
      case Attributes.Empathy:
        attributeFormatList = GlobalData.Empathy;
        characterAttribute.Level = new VariableInt(GameManager.Instance.SaveFile.Emp);
        break;
      default:
        attributeFormatList = GlobalData.Intelligence;
        break;
    }

    for (let index = 0; index < attributeFormatList.length; index++) {
      const attributeFormat = attributeFormatList[index];
      let level = parseInt(attributeFormat.Level);
      if (level == 0) {
        characterAttribute.Description = attributeFormat.Description;
        characterAttribute.main_effect = new CharacterEffect(parseFloat(attributeFormat.m), GameContext.GetResource(attributeFormat.Target), characterAttribute.Level);
      } else if (attributeFormat.Target) {
        let e = SimpleEffect.SimpleEffect();
        if (attributeFormat.e) e.effect = GameContext.GetEffect(attributeFormat.e);
        // console.log(attributeFormat.e);

        e.target = GameContext.GetResource(attributeFormat.Target);
        e.add = !attributeFormat.a ? new BigNumber(0) : new BigNumber(attributeFormat.a);
        e.mult = !attributeFormat.m ? new BigNumber(1) : new BigNumber(attributeFormat.m);
        if (attributeFormat.w) e.parameter = GameContext.GetResource(attributeFormat.w);
        characterAttribute.perks.push(new Perk(level, e, attributeFormat.Description));
        characterAttribute.perks[characterAttribute.perks.length - 1].attribute = Attributes[key];
        characterAttribute.perks[characterAttribute.perks.length - 1].Data = attributeFormat;
      }
    }
    this.Attributes[key] = characterAttribute;
    GameContext.ContextAddResource(`Char.${Attributes[key]}`, this.Attributes[key].Level);
    //   bar.parameter = characterAttribute;
    //   bar.Init();
    this.Attributes[key].main_effect.Start();

    for (let index = 0; index < this.Attributes[key].perks.length; index++) {
      const perk = this.Attributes[key].perks[index];
      if (this.Attributes[key].Level.ValueInt >= perk.Level) perk.Activate();
    }
  }

  // CreateDump(dump: AttributeBarDump) {
  //   characterAttribute: CharacterAttribute = new CharacterAttribute()
  //   {
  //     Key = Attributes.Versatility,
  //     Level = new VariableInt(0),
  //     TrueLevel = new VariableInt(0),
  //     Description = "profits: Increases by #1"
  //   };
  //   characterAttribute.main_effect = new CharacterEffect(1.018, GameManager.Instance.Profit, characterAttribute.Level);
  //   dump.parameter = characterAttribute;
  //   dump.Init();
  //   dump.parameter.main_effect.Start();
  // }

  // EarnCalculations() {
  //   if (!this.IsAvailable())
  //     return;
  //   this.progress += Time.unscaledDeltaTime / this.need.ToDouble();
  //   if (this.progress < 1.0)
  //     return;
  //   --this.progress;
  //   this.Earn();
  // }

  // IsAvailable() {return GameManager.Instance.Paragon.AttributesIsAvailable && GameManager.Instance.ChallengeManager.StatsIsOn() && this.IsEnabled && Time.deltaTime != 0.0 && Time.timeScale != 0.0;}

  // RecalculateNeed() {
  //   if (!this.IsAvailable())
  //     return;
  //   valueInt = GameManager.Instance.CurrentHero.Level.ValueInt;
  //   if (valueInt > Statistic.HeroMaxLevelAllTime.ValueInt)
  //     valueInt = Statistic.HeroMaxLevelAllTime.ValueInt;
  //   x = (this.Searched.ValueInt - (Reborn.Souls.Value + 1.0).Log10() * 1.75 - valueInt * 0.20000000298023224);
  //   if (x > 50.0)
  //     x = 50;
  //   this.need = new BigNumber(this.based).Pow(x) * 60.0;
  //   if (this.need < 10.0)
  //     this.need = 10.0;
  //   this.need /= this.SearchRate.ValueFloat;
  //   if (!(this.need < 1.0))
  //     return;
  //   this.need = 1.0;
  // }

  // Earn() {
  //   this.earn1();
  //   this.Panel.EnableButtons();
  //   GameManager.Instance.AnimatedText.TextUp("+1 Attribute", this.text_position, this.color, -1.2);
  // }

  // earn1() {
  //   this.Searched.Change(1);
  //   this.Free.Change(1);
  //   this.CheckButon();
  //   v = this.TotalInRealm();
  //   if (v <= this.Total.ValueInt)
  //     return;
  //   this.Total.SetValue(v);
  // }

  // TotalInRealm() {return this.Searched.ValueInt + this.BonusPoints.ValueInt;}

  // Earn(i) {
  //   this.Total.Change(i);
  //   this.Free.Change(i);
  //   this.CheckButon();
  //   v = this.Searched.ValueInt + this.BonusPoints.ValueInt;
  //   if (v <= this.Total.ValueInt)
  //     return;
  //   this.Total.SetValue(v);
  // }

  // ResetAttributes() {
  //   this.ResetAttributesExile();
  //   this.Panel.CheckEnable();
  // }

  // ResetAttributesExile() {
  //   this.ResetAttributesAll();
  //   this.Panel.intelligence.UpdateButton();
  //   this.CheckButon();
  // }

  // HardReset() {
  //   this.ResetAttributesAll();
  //   this.Total.SetValue(0);
  //   this.Free.SetValue(0);
  //   this.Searched.SetValue(0);
  //   this.CheckButon();
  // }

  // ResetAttributesAll(update = false) {
  //   foreach (allAttribute: AttributeBar in this.Panel.GetAllAttributes())
  //     allAttribute.parameter.Reset();
  //   this.Panel.dump.parameter.Reset();
  //   if (!update)
  //     return;
  //   this.UpdateBonusToAll();
  // }

  // LoadProgress(_progress) {
  //   if (double.IsNaN(_progress))
  //     _progress = 0.0;
  //   this.progress = _progress;
  // }

  // Offline(sec: BigNumber) {return !GameManager.Instance.Paragon.AttributesIsAvailable ? 0 : this.Offline(sec, this.progress);}

  // Offline(sec: BigNumber, _progress) {
  //   if (!this.IsAvailable())
  //     0: return;
  //   if (double.IsNaN(_progress))
  //     _progress = 0.0;
  //   free = this.GetFree();
  //   this.progress = _progress;
  //   if (GameManager.Instance.Paragon.AttributesIsAvailable && GameManager.Instance.ChallengeManager.StatsIsOn()) {
  //     bigNumber: BigNumber = sec;
  //     while (bigNumber > 1.0) {
  //       this.RecalculateNeed();
  //       if (bigNumber >= this.need) {
  //         this.earn1();
  //         bigNumber -= this.need.ToDouble();
  //       }
  //       else {
  //         this.progress += (bigNumber / this.need).ToDouble();
  //         bigNumber = 0.0;
  //       }
  //     }
  //   }
  //   this.CheckButon();
  //   return this.GetFree() - free;
  // }

  // PreSave() {return this.BonusPoints.OnChangeInt -= new Action<int>(this.ApplyBonusPointsChange);}

  // PostSave() {
  //   this.ApplyBonusPointsChange(this.BonusPoints.ValueInt);
  //   this.BonusPoints.OnChangeInt += new Action<int>(this.ApplyBonusPointsChange);
  // }

  FindAttribute(key: Attributes) {
    return this.Attributes[key].Level;
  }

  //   get Int() {
  //     return this.Panel.intelligence.parameter.TrueLevel.ValueInt;
  //   }
  //   set Int(value) {
  //     this.Panel.intelligence.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Ins() {
  //     return this.Panel.insight.parameter.TrueLevel.ValueInt;
  //   }
  //   set Ins(value) {
  //     this.Panel.insight.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Scr() {
  //     return this.Panel.spellcraft.parameter.TrueLevel.ValueInt;
  //   }
  //   set Scr(value) {
  //     this.Panel.spellcraft.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Wis() {
  //     return this.Panel.wisdom.parameter.TrueLevel.ValueInt;
  //   }
  //   set Wis(value) {
  //     this.Panel.wisdom.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Dom() {
  //     return this.Panel.dominance.parameter.TrueLevel.ValueInt;
  //   }
  //   set Dom(value) {
  //     this.Panel.dominance.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Pat() {
  //     return this.Panel.patience.parameter.TrueLevel.ValueInt;
  //   }
  //   set Pat(value) {
  //     this.Panel.patience.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Mas() {
  //     return this.Panel.mastery.parameter.TrueLevel.ValueInt;
  //   }
  //   set Mas(value) {
  //     this.Panel.mastery.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Emp() {
  //     return this.Panel.empathy.parameter.TrueLevel.ValueInt;
  //   }
  //   set Emp(value) {
  //     this.Panel.empathy.parameter.TrueLevel.ValueInt = value;
  //   }

  //   get Ver() {
  //     return this.Panel.dump.parameter.TrueLevel.ValueInt;
  //   }
  //   set Ver(value) {
  //     this.Panel.dump.parameter.TrueLevel.ValueInt = value;
  //   }

  // CheckButon() {
  //   if (!GameManager.Instance.Paragon.AttributesIsAvailable) {
  //     this.AddButton.transform.parent.gameObject.SetActive(false);
  //   }
  //   else {
  //     this.AddButton.transform.parent.gameObject.SetActive(this.GetFree() > 0);
  //     this.AddButton.targetGraphic.color = Color.white;
  //   }
  // }

  //   UpdateVersatility() {
  //     return this.Panel.dump.parameter.main_effect.Update();
  //   }

  UpdateAllAttributes() {
    //   foreach (allAttribute: AttributeBar in this.Panel.GetAllAttributes())
    //     allAttribute.parameter.main_effect.Update();
  }

  InitBonusToAll() {
    //   this.effectsToAll = [];
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.intelligence.parameter));
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.insight.parameter));
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.spellcraft.parameter));
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.wisdom.parameter));
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.dominance.parameter));
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.patience.parameter));
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.mastery.parameter));
    //   this.effectsToAll.push(new AttributeManager.BonusToAttribute(this.Panel.empathy.parameter));
  }

  ApplyBonusToAll() {
    //   valueInt = this.BonusToAll.Value.ToInt();
    //   if (valueInt >= this.MaxValue.ValueInt)
    //     valueInt = this.MaxValue.ValueInt;
    //   num = valueInt + this.BonusToAllMem.Value.ToInt();
    //   this.effectsToAllApplied = new List<AttributeManager.BonusToAttribute>();
    //   foreach (AttributeManager.bonusToAttribute: BonusToAttribute in this.effectsToAll) {
    //     if ((bonusToAttribute.Key != Attributes.Mastery || GameManager.Instance.Paragon.MasteryIsAvailable) && (bonusToAttribute.Key != Attributes.Empathy || GameManager.Instance.Paragon.EmpathyIsAvailable)) {
    //       bonusToAttribute.effect.add = num;
    //       bonusToAttribute.effect.Apply();
    //       this.effectsToAllApplied.push(bonusToAttribute);
    //     }
    //   }
  }

  UpdateBonusToAll() {
    //   valueInt = this.BonusToAll.Value.ToInt();
    //   if (valueInt >= this.MaxValue.ValueInt)
    //     valueInt = this.MaxValue.ValueInt;
    //   num = valueInt + this.BonusToAllMem.Value.ToInt();
    //   foreach (AttributeManager.bonusToAttribute: BonusToAttribute in this.effectsToAll) {
    //     if (bonusToAttribute.Key == Attributes.Mastery && !GameManager.Instance.Paragon.MasteryIsAvailable) {
    //       if (this.effectsToAllApplied.Find((Predicate<AttributeManager.BonusToAttribute>) (x => x.Key == Attributes.Mastery)) == null)
    //         this.effectsToAllApplied.push(bonusToAttribute);
    //     }
    //     else if (bonusToAttribute.Key == Attributes.Empathy && !GameManager.Instance.Paragon.EmpathyIsAvailable) {
    //       if (this.effectsToAllApplied.Find((Predicate<AttributeManager.BonusToAttribute>) (x => x.Key == Attributes.Empathy)) == null)
    //         this.effectsToAllApplied.push(bonusToAttribute);
    //     }
    //     else {
    //       bonusToAttribute.effect.add = num;
    //       if (bonusToAttribute.effect.IsActive)
    //         bonusToAttribute.effect.Update();
    //       else
    //         bonusToAttribute.effect.Apply();
    //     }
    //   }
  }

  // GetFree() {return this.Free.ValueInt + this.BonusPoints.ValueInt;}

  RemoveBonusToAll() {
    //   if (this.effectsToAllApplied == null)
    //     return;
    //   foreach (AttributeManager.bonusToAttribute: BonusToAttribute in this.effectsToAllApplied)
    //     bonusToAttribute.effect.Delete();
    //   this.prev_all_bonus = 0.0;
  }

  ApplyBonusPointsChange(change) {
    //   v = this.Searched.ValueInt + this.BonusPoints.ValueInt;
    //   if (v <= this.Total.ValueInt)
    //     return;
    //   this.Total.SetValue(v);
  }

  // export class BonusToAttribute {
  //   Key: Attributes;
  //   effect: SimpleEffect;

  //   BonusToAttribute(attribute: CharacterAttribute) {
  //     this.Key = attribute.Key;
  //     this.effect = new SimpleEffect(attribute.Level);
  //   }
  // }
}
