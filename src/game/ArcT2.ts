import { Spells } from "@/type/Spells";
import { BigNumber } from "./BigNumber";
import { GameContext } from "./GameContext";
import { GameManager } from "./GameManager";
import { Hero } from "./Hero";
import { SimpleEffect } from "./SimpleEffect";
import { Statistic } from "./Statistic";
import { StringBuilder } from "./StringBuilder";

export class ArcT2 extends Hero {
  declare effect1: SimpleEffect;
  bonus_mult: BigNumber;
  effect2: SimpleEffect;
  bonus_mult2: BigNumber;
  // doll: ItemsDoll;
  timer;

  Init() {
    super.Init();
    this.Name = "Archon";

    this.LevelReq = 115;
    this.Feature =
      "Increase profits with the amount of spells cast and spell shards collected. Focuses on gaining more shards and increasing profits through his spells and upgrades.";
    this.Description =
      "The Archon is an extraordinarily powerful being, first created by Jas'Aham and his former mentor, Tazzaren. By performing a modification of the Abolisher's soul-binding ritual and extending the Doppelganger's reach to another human soul, the soul of Abolisher can be absorbed by another human, granted subject's powerful enough to fight the Doppelganger's ever-growing hunger and, in case of magic-wielders, capable of withstanding the Abolisher's counter-magic presence. Arcanists prove to be the perfect candidates for the transition. The resulting being is a host of three different entities. As Doppelganger gets to feed on two vastly different sources of power, he grows ever more powerful, and both human souls have to do their best to maintain sanity and control over their shared new form. Controlled, this new Soulstealer creature grants immense power and allows the two polarities to work in unison, allowing them to achieve impossible feats.";
    this.Tier = 2;
    //   this.Conditions2Unlock.push((ConditionUnlock) new ConditionUnlockMore("Time.Arcanist", "7200", "played: Time as more: Arcanist than 2h "));
    //   this.Conditions2Unlock.push((ConditionUnlock) new ConditionUnlockMore("Time.Abolisher", "7200", "played: Time as more: Abolisher than 2h "));
    //   this.Conditions2Unlock.push((ConditionUnlock) new ConditionUnlockMore("Spell.SpellCast", "50000", "cast: Reach spell "));
    //   this.Conditions2Unlock.push((ConditionUnlock) new ConditionUnlockMore("Spell.Shards", "100000000", "spell: Reach shards collected "));
    this.SpellList = [];
    this.SpellList.push(Spells.MagicMissile);
    this.SpellList.push(Spells.GemResonance);
    this.SpellList.push(Spells.RitualOfPower);
    this.SpellList.push(Spells.ConjureLesserElemental);
    this.SpellList.push(Spells.ConjureGreaterElemental);
    this.SpellList.push(Spells.ConjurePrimalElemental);
    this.SpellList.push(Spells.ConjureManabeast);
    this.SpellList.push(Spells.VoidAutomaton);
    this.SpellList.push(Spells.SyntheticEntity);
    this.SpellList.push(Spells.VoidRadiance);
    this.SpellList.push(Spells.VoidLure);
    this.SpellList.push(Spells.SpellStaffOfChamaon);
    this.SpellList.push(Spells.KarnaphensSpellshroud);
    this.SpellList.push(Spells.RadiantPools);
    this.SpellList.push(Spells.LightningBolt);
    this.SpellList.push(Spells.JAMissileStorm);
    this.SpellList.push(Spells.CounterSpell);
    this.SpellList.push(Spells.Debilitate);
    this.SpellList.push(Spells.NullZone);
    this.SpellList.push(Spells.FireWithFire);
    this.SpellList.push(Spells.SyphonPower);
    // this.effect1 = new SimpleEffect();
    this.effect1 = SimpleEffect.SimpleEffect();
    this.effect1.effect = GameContext.GetEffect("Linear");
    this.effect1.target = GameManager.Instance.Profit;
    this.effect1.add = new BigNumber(0);
    this.effect1.mult = new BigNumber(1);
    this.effect2 = SimpleEffect.SimpleEffect();
    this.effect2.effect = GameContext.GetEffect("Linear");
    this.effect2.target = GameManager.Instance.Profit;
    this.effect2.add = new BigNumber(0);
    this.effect2.mult = new BigNumber(1);
    // this.ApplyEffects();
    //   this.doll = GameManager.Instance.Craft.window.doll;
  }

  ApplyEffects() {
    // this.update_effect();
    //   let spell: Spell = GameManager.Instance.SpellBook.GetSpell(Spells.ArcaneInfusion);
    //   spell.Delete();
    //   spell.ResetUsesAll(true);
    this.update_effect();
    this.effect1.Apply();
    this.effect2.Apply();
    this.SubEffect();
    //   let castSpell: VariableBignumber = Statistic.CastSpell;
    //   castSpell.OnChange = castSpell.OnChange + new Action(((Hero) this).update_effect);
    //   if (this.quotes == null)
    //     this.quotes = (QuotesSystem) new ArconQS();
    //   this.quotes.Apply();
    //   if (GameManager.Instance.ChallengeManager.ActiveChallenge == null || GameManager.Instance.CurrentPet.AvailableToChange) {
    //     GameManager.Instance.CurrentPet.SetPet(PetNames.Assistant);
    //     GameManager.Instance.CurrentPet.Block();
    //   }
    GameManager.Instance.BuildingManager.BuildCreator.SetBuilding(7, "Arcane Anomaly");
    GameManager.Instance.BuildingManager.BuildCreator.SetBuilding(6, "Anti-magic Dome");
    GameManager.Instance.BuildingManager.BuildCreator.SetBuilding(3, "Arcanaspring");
    //   GameManager.Instance.UpgradeManager.on_buy_upgrade += new Action<Upgrade>(this.CheckAI);
  }

  // PostLoad() {
  //   upgrade: Upgrade = GameManager.Instance.UpgradeManager.ActiveUpgradeList.Find((Predicate<Upgrade>) (x => x.ID == "396"));
  //   if (upgrade == null)
  //     return;
  //   this.CheckAI(upgrade);
  // }

  // DisableAll() {
  //   this.UnsubEffect();
  //   castSpell: VariableBignumber = Statistic.CastSpell;
  //   castSpell.OnChange = castSpell.OnChange - new Action(((Hero) this).update_effect);
  //   this.effect1.Delete();
  //   this.effect2.Delete();
  //   this.quotes.Disable();
  //   GameManager.Instance.CurrentPet.Unblock();
  //   GameManager.Instance.BuildingManager.BuildCreator.SetBuilding(6, "Circle Of Power");
  //   GameManager.Instance.BuildingManager.BuildCreator.SetBuilding(3, "Spell Fountain");
  //   GameManager.Instance.BuildingManager.BuildCreator.SetBuilding(7, "Dimensional Rift");
  //   GameManager.Instance.UpgradeManager.on_buy_upgrade -= new Action<Upgrade>(this.CheckAI);
  //   GameManager.Instance.UpgradeManager.on_remove_upgrade -= new Action<Upgrade>(this.CheckRemoveAI);
  //   if (!this.SpellList.Contains(Spells.NotAI))
  //     return;
  //   this.SpellList.Remove(Spells.NotAI);
  // }

  // CheckAI(upgrade: Upgrade) {
  //   if (!(upgrade.ID == "396"))
  //     return;
  //   GameManager.Instance.UpgradeManager.on_buy_upgrade -= new Action<Upgrade>(this.CheckAI);
  //   GameManager.Instance.UpgradeManager.on_remove_upgrade += new Action<Upgrade>(this.CheckRemoveAI);
  //   this.SpellList.push(Spells.NotAI);
  //   GameManager.Instance.SpellBook.ChangeSpellSet();
  // }

  // CheckRemoveAI(upgrade: Upgrade) {
  //   if (!(upgrade.ID == "396"))
  //     return;
  //   GameManager.Instance.UpgradeManager.on_remove_upgrade -= new Action<Upgrade>(this.CheckRemoveAI);
  //   GameManager.Instance.UpgradeManager.on_buy_upgrade += new Action<Upgrade>(this.CheckAI);
  //   this.SpellList.Remove(Spells.NotAI);
  //   GameManager.Instance.SpellBook.ChangeSpellSet();
  // }

  update_effect() {
    this.bonus_mult = BigNumber.Add(
      1,
      BigNumber.Multiplication(
        0.000750000006519258,
        BigNumber.Multiplication(
          BigNumber.Add(BigNumber.Division(BigNumber.Multiplication(Statistic.CastSpell.Value, GameManager.Instance.CurrentHero.APSpeed.Value), 10000.0), 1),
          this.GetBonusMult().Pow(0.5)
        )
      )
    );
    this.effect1.mult = this.bonus_mult;
    this.effect1.Update();

    this.bonus_mult2 = BigNumber.Add(
      1,
      BigNumber.Multiplication(
        4.9999998736893758e-6,
        BigNumber.Multiplication(
          BigNumber.Add(BigNumber.Division(BigNumber.Multiplication(Statistic.ShardsSession.Value, GameManager.Instance.CurrentHero.APSpeed.Value), 100000000.0), 1).Pow(0.85),
          this.GetBonusMult().Pow(0.5)
        )
      )
    );
    this.effect2.mult = this.bonus_mult2;
    this.effect2.Update();
  }

  // recalculate_bonus() {
  //   let num = 0;
  //   for (let index = 0; index < this.doll.Slots.length; index++) {
  //     obj: Item = this.doll.Slots[index].Item;
  //     if (obj != null && obj.active)
  //       num = num + (obj.Tier + 1) * 4 + obj.Enchant.Level;
  //   }
  //   GameManager.Instance.CurrentHero.ClassBonusStacks.SetValue((BigNumber) num);
  // }

  Tips_text() {
    let stringBuilder = new StringBuilder();
    stringBuilder.Append(super.Tips_text());
    stringBuilder.Append("Increase profits by ");
    stringBuilder.Append(this.bonus_mult);
    stringBuilder.AppendLine(". Increases with spells cast.");
    stringBuilder.Append("Increase profits by ");
    stringBuilder.Append(this.bonus_mult2);
    stringBuilder.AppendLine(". Increases with collected spell shards.");
    stringBuilder.Append(this.AdditionalDescription());
    return stringBuilder.ToString();
  }
}
