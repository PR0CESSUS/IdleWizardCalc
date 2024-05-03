import { BigNumberSaveFile } from "@/type/BigNumberSaveFile";
import { Gods } from "@/type/Gods";
import { BigNumber } from "./BigNumber";
import { GameContext } from "./GameContext";
import { GameManager } from "./GameManager";
import { God } from "./God";
import { MainGod } from "./MainGod";
import { MinorGod } from "./MinorGod";
import { SimpleEffect } from "./SimpleEffect";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";

export class PantheonManager {
  MaxChooses: VariableInt;
  MaxLevel: VariableInt;
  MinorMaxLevel: VariableInt;
  GodExp: VariableComplex;
  MainAP: VariableComplex;
  SecAP: VariableComplex;
  MinorAP: VariableComplex;
  MinorExp: VariableComplex;
  SaveExpPart: VariableFloat;
  baseExpIncome = 0.014;
  unlocks: boolean[] = [];
  skillSecond: boolean;
  chosen: number[] = [];
  gods: God[] = [];
  timer;
  // praying: Skill;
  available;

  // OnGetExp: Action;

  constructor() {
    this.MaxChooses = new VariableInt(4);
    this.MaxLevel = new VariableInt(GameManager.Instance.SaveFile.Pantheon.maxLvl);
    this.MinorMaxLevel = new VariableInt(GameManager.Instance.SaveFile.Pantheon.minorLvl);
    this.GodExp = new VariableComplex(1.0);
    this.MainAP = new VariableComplex(1.0);
    this.SecAP = new VariableComplex(1.0);
    this.MinorAP = new VariableComplex(1.0);
    this.MinorExp = new VariableComplex(1.0);
    this.SaveExpPart = new VariableFloat(1);
    GameContext.ContextAddResource("Pantheon.ExpBonus", this.GodExp);
    GameContext.ContextAddResource("Pantheon.MaxChoose", this.MaxChooses);
    GameContext.ContextAddResource("Pantheon.MaxLevel", this.MaxLevel);
    GameContext.ContextAddResource("Pantheon.MainAP", this.MainAP);
    GameContext.ContextAddResource("Pantheon.SecAP", this.SecAP);
    GameContext.ContextAddResource("Pantheon.MinorAP", this.MinorAP);
    GameContext.ContextAddResource("Pantheon.MinorExp", this.MinorExp);
    GameContext.ContextAddResource("Pantheon.MinorMaxLevel", this.MinorMaxLevel);
    GameContext.ContextAddResource("Pantheon.SaveExpPart", this.SaveExpPart);
    this.chosen = GameManager.Instance.SaveFile.Pantheon.chooses;
  }

  Init() {
    this.AddGod(
      new MainGod(
        Gods.Energy,
        1,
        "Increase Evocation efficiency by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Scrolls.EvocationEfficiency, 0.0, 0.14000000059604645),
        "Increase Click profit by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Orb.click_profit, 0.0, 0.05000000074505806)
      )
    );
    this.AddGod(
      new MainGod(
        Gods.Life,
        1,
        "Increase Summoning efficiency by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Scrolls.SummoningEfficiency, 0.0, 0.02199999988079071),
        "Increase Void Mana per Entity by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.VoidManaManager.VoidCore.BonusProfit, 0.0, 0.02500000037252903)
      )
    );
    this.AddGod(
      new MainGod(
        Gods.Change,
        1,
        "Increase Incantation efficiency by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Scrolls.IncantationEfficiency, 0.0, 0.02199999988079071),
        "Increase Pet experience gain by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.CurrentPet.ExpBonus, 0.0, 0.02500000037252903)
      )
    );
    this.AddGod(
      new MainGod(
        Gods.Existence,
        2,
        "Increase Autoclick profit by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Orb.autoclick_profit, 0.0, 0.14000000059604645),
        "Increase Shards income by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Scrolls.ShardsPassive, 0.0, 0.02500000037252903)
      )
    );
    this.AddGod(
      new MainGod(
        Gods.Time,
        2,
        "Increase Idle bonus by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Idle.IdleBonus, 0.0, 0.14000000059604645),
        "Increase Offline bonus by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.OfflineProduction, 0.0, 0.02500000037252903)
      )
    );
    this.AddGod(
      new MainGod(
        Gods.Creation,
        2,
        "Increase Pet ability power by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.CurrentPet.AbilityPower, 0.0, 0.14000000059604645),
        "Increase Character experience from sources by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.CurrentHero.ExpManaSources, 0.0, 0.02500000037252903)
      )
    );
    this.AddGod(
      new MainGod(
        Gods.Chaos,
        3,
        "Increase Void Profits by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.VoidManaManager.Power, 0.0, 0.14000000059604645),
        "Increase Mysteries bonus by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.Reborn.SoulPower, 0.0, 0.02500000037252903)
      )
    );
    this.AddGod(
      new MainGod(
        Gods.Consciousness,
        4,
        "Increase Character Ability Power by # per level (total #t)",
        SimpleEffect.Create(GameManager.Instance.CurrentHero.AbilityPower, 0.0, 0.15000000596046448),
        "Increase Gods' experience bonus by # per level (total #t)",
        SimpleEffect.Create(this.GodExp, 0.0, 0.02500000037252903)
      )
    );
    this.AddGod(
      new MinorGod(
        Gods.minorSpells,
        5,
        "Increase all Spells efficiency by # per level (total #t)",
        [
          SimpleEffect.Create(GameManager.Instance.Scrolls.EvocationEfficiency, 0.0, 0.0099999997764825821),
          SimpleEffect.Create(GameManager.Instance.Scrolls.SummoningEfficiency, 0.0, 0.0099999997764825821),
          SimpleEffect.Create(GameManager.Instance.Scrolls.IncantationEfficiency, 0.0, 0.0099999997764825821),
        ],

        [Gods.Energy, Gods.Life, Gods.Change]
      )
    );
    this.AddGod(
      new MinorGod(
        Gods.minorExp,
        5,
        "Increase Character, Pet, God experience gain by # per level (total #t)",

        [
          SimpleEffect.Create(GameManager.Instance.CurrentPet.ExpBonus, 0.0, 0.0099999997764825821),
          SimpleEffect.Create(GameManager.Instance.CurrentHero.ExpMult, 0.0, 0.0099999997764825821),
          SimpleEffect.Create(this.GodExp, 0.0, 0.0099999997764825821),
        ],
        [Gods.Creation, Gods.Consciousness, Gods.Change]
      )
    );
    this.AddGod(
      new MinorGod(
        Gods.minorVoid,
        5,
        "Increase Void Mana per Entity and Void Profits by # per level (total #t)",

        [
          SimpleEffect.Create(GameManager.Instance.VoidManaManager.VoidCore.BonusProfit, 0.0, 0.20000000298023224),
          SimpleEffect.Create(GameManager.Instance.VoidManaManager.Power, 0.0, 0.20000000298023224),
        ],
        [Gods.Life, Gods.Chaos]
      )
    );
    this.AddGod(
      new MinorGod(
        Gods.minorIdle,
        5,
        "Increase Idle bonus and Autoclick profit by # per level (total #t)",

        [
          SimpleEffect.Create(GameManager.Instance.Orb.autoclick_profit, 0.0, 0.20000000298023224),
          SimpleEffect.Create(GameManager.Instance.Idle.IdleBonus, 0.0, 0.20000000298023224),
        ],
        [Gods.Time, Gods.Existence, Gods.Energy]
      )
    );
    this.AddGod(
      new MinorGod(
        Gods.minorEdust,
        5,
        "Increase Enchanting Dust income by # per level (total #t)",

        [SimpleEffect.Create(GameManager.Instance.Resources.EnchantingBonus, 0.0, 0.012500000186264515)],
        [Gods.Change, Gods.Creation, Gods.Energy, Gods.Life, Gods.Existence, Gods.Time]
      )
    );
    this.AddGod(
      new MinorGod(
        Gods.minorSplinter,
        5,
        "Increase Memetic Splinters income by # per level (total #t)",

        [SimpleEffect.Create(GameManager.Instance.Gilding.SplinterIncome, 0.0, 0.004999999888241291)],
        [Gods.Chaos, Gods.Consciousness]
      )
    );
    //   this.praying = GameManager.Instance.SkillManager.Get(SkillManager.SkillNames.Praying);
    //   this.window.Init();

    this.Load(GameManager.Instance.SaveFile.Pantheon.exp);
    this.Reactivate();
  }

  Update() {
    //   if (!GameManager.Instance.Paragon.PantheonIsAvailable)
    //     return;
    //   this.timer += Time.unscaledDeltaTime;
    //   if ((double) this.timer <= 1.0)
    //     return;
    //   this.GiveExp(this.GetExpIncome());
    //   --this.timer;
    //   if (this.MaxChooses.ValueInt > this.chosen.length && this.available > this.chosen.length)
    //     this.sign.TurnOnRed();
    //   Action onGetExp = this.OnGetExp;
    //   if (onGetExp == null)
    //     return;
    //   onGetExp();
  }

  Offline(seconds: BigNumber) {
    //   if (!GameManager.Instance.Paragon.PantheonIsAvailable)
    //     return;
    //   this.GiveExp(this.GetExpIncome() * seconds);
    //   Action onGetExp = this.OnGetExp;
    //   if (onGetExp == null)
    //     return;
    //   onGetExp();
  }

  //  GetExpIncome() {return this.baseExpIncome * this.GodExp.Value * this.praying.GetBonus()}

  GetCurrentMax() {
    //   let a = 0;
    //   foreach (KeyValuePair<Gods, God> god in this.gods)
    //     a = Mathf.Max(a, god.Value.Level.ValueInt);
    //   a: return;
  }

  Load(data: { [key in keyof typeof Gods]?: BigNumberSaveFile }) {
    // console.log(data);

    for (const [key, value] of Object.entries(data)) {
      this.GetGod(Gods[key]).Load(value);
    }
  }

  ResetOnRealmChange() {
    //   foreach (KeyValuePair<Gods, God> god in this.gods)
    //     god.Value.Load(0.0);
  }

  Reactivate() {
    this.unlocks[0] = GameManager.Instance.Paragon.PantheonIsAvailable;
    this.unlocks[1] = GameManager.Instance.Paragon.Pantheon2IsAvailable;
    this.unlocks[2] = GameManager.Instance.Paragon.Pantheon3IsAvailable;
    this.unlocks[3] = GameManager.Instance.Paragon.Pantheon4IsAvailable;
    this.unlocks[4] = GameManager.Instance.Paragon.PantheonMinorsIsAvailable;
    this.skillSecond = GameManager.Instance.Paragon.Gods2SkillIsAvailable;
    //   if (GameManager.Instance.Paragon.PantheonMinorsIsAvailable)
    //     this.MaxChooses.SetValue(2);
    //   else
    //     this.MaxChooses.SetValue(1);
    //   this.available = 0;

    for (const god of this.gods) {
      if (!god) continue;

      if (this.unlocks[god.Group - 1]) {
        god.ActivateAbility(this.skillSecond);
      } else god.DeactivateAll();
    }
    //   godsList: Gods[] = [];
    //   foreach (Gods key in this.chosen) {
    //     if (this.unlocks[this.GetGod(key).Group - 1])
    //       godsList.push(key);
    //   }
    //   this.chosen = godsList;
  }

  GetGod(key: Gods) {
    return this.gods[key];
  }

  GetAllGods() {
    return this.gods;
  }

  // IsChosen( key: Gods) {return this.chosen.Contains(key);}

  GetChosenAmount() {
    //   chosenAmount = this.chosen.length;
    //   if (chosenAmount > this.MaxChooses.ValueInt)
    //     chosenAmount = this.MaxChooses.ValueInt;
    //   chosenAmount: return;
  }

  IsAvailable(key: Gods) {
    return this.unlocks[this.gods[key].Group - 1];
  }

  ChooseGod(key: Gods) {
    //   if (this.IsChosen(key)) {
    //     this.chosen.Remove(key);
    //   }
    //   else {
    //     if (this.chosen.length >= this.MaxChooses.ValueInt)
    //       this.chosen.RemoveAt(0);
    //     if (!this.IsAvailable(key))
    //       return;
    //     this.chosen.push(key);
    //   }
  }

  GiveExp(value: BigNumber) {
    //   let bigNumber = 0.0;
    //   for (let index = 0; index < this.chosen.length; index++) {
    //     God god = this.GetGod(this.chosen[index]);
    //     if (god.Group < 5) {
    //       god.AddExp(value);
    //       bigNumber += value;
    //     }
    //   }
    //   for (let index = 0; index < this.chosen.length; index++) {
    //     God god = this.GetGod(this.chosen[index]);
    //     if (god.Group == 5) {
    //       god.AddExp(value);
    //       bigNumber += value * this.MinorExp.Value;
    //     }
    //   }
    //   this.praying.AddExp(bigNumber / 1000.0);
  }

  AddGod(god: God) {
    this.gods[god.Key] = god;
  }

  OnParagonChange() {
    //   if (this.unlocks[0] == GameManager.Instance.Paragon.PantheonIsAvailable && this.unlocks[1] == GameManager.Instance.Paragon.Pantheon2IsAvailable && this.unlocks[2] == GameManager.Instance.Paragon.Pantheon3IsAvailable && this.unlocks[3] == GameManager.Instance.Paragon.Pantheon4IsAvailable && this.unlocks[4] == GameManager.Instance.Paragon.PantheonMinorsIsAvailable && this.skillSecond == GameManager.Instance.Paragon.Gods2SkillIsAvailable)
    //     return;
    //   this.Reactivate();
  }

  OnChangeMaxChoose() {
    //   if (this.chosen.length < this.MaxChooses.ValueInt)
    //     return;
    //   godsList: Gods[] = [];
    //   for (let index = 0; index < this.MaxChooses.ValueInt; index++)
    //     godsList.push(this.chosen[this.chosen.length - index - 1]);
    //   this.chosen = godsList;
  }
}
