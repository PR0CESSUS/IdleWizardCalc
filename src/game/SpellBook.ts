import { Spells } from "@/type/Spells";
import { GameManager } from "./GameManager";
import { GlobalData } from "./GlobalData";
import { Spell } from "./Spell";
import { IEffect } from "@/type/IEffect";
import { SimpleEffect } from "./SimpleEffect";
import { GameContext } from "./GameContext";
import { BigNumber } from "./BigNumber";
import { SpellTypeGroup } from "@/type/SpellTypeGroup";

export class SpellBook {
  // public SpriteAtlas atlas;
  // public Transform SpellContent;
  AvailableSpells: Spell[] = [];
  SpellList: Spell[] = [];
  PermanentSpellList: Spell[] = [];
  AccumalatedSpellList: Spell[] = [];
  // public SetsPanel SetsPanel;
  effect_map: IEffect[][] = [];
  // private Dictionary<Spells, Action> on_choose;
  // private Dictionary<Spells, Action> on_clear;
  // public Dictionary<Spells, IEffect>
  persistentPassive: { [key in keyof typeof Spells]?: IEffect } = {};
  // public List<Spells> MemeticBanList;
  // public List<Spells> NonscaledSpells;
  // private Text ChooseTip;
  SpellChooses: Spell[] = [];

  constructor() {
    //
    // this.InitPermanent();
    // this.SetsPanel.Init();
  }

  Init() {
    this.create_all();
    this.PostLoad();
    this.ChangeSpellSet();
  }

  create_all() {
    for (let spell of GlobalData.Spells) this.SpellList.push(new Spell(spell));
    this.create_effect_map();
    for (const spell of this.SpellList) {
      spell.effects = this.effect_map[spell.NameKey];

      spell.SetEfficiency();

      //   this.on_choose.TryGetValue(spell.NameKey, out spell.OnChoose);
      //   this.on_clear.TryGetValue(spell.NameKey, out spell.OnClear);
      if (spell.IsAccumulated) this.AccumalatedSpellList.push(spell);
      if (spell.IsPersistent) spell.PassiveEffect = this.persistentPassive[spell.NameKey];
      const Uses = GameManager.Instance.SaveFile.SpellUses.filter((e) => e.key == spell.NameKey)[0];
      const UsesTR = GameManager.Instance.SaveFile.SpellUsesTR.filter((e) => e.key == spell.NameKey)[0];

      if (Uses) spell.Use.SetValue(Uses.value);
      if (UsesTR) spell.UseThisRun.SetValue(UsesTR.value);
    }
    this.GetSpell(Spells.JAMissileStorm2).ResetUses = true;
  }

  ChangeSpellSet() {
    this.set_available_spells();
    // let count = this.AvailableSpells.length;
    // for (let index = 0; index < count; index++) {
    //   if (this.SpellChooses.length < index + 1) this.SpellChooses.push(this.AvailableSpells[index]);
    //   //   this.SpellChooses[index].Init(this.AvailableSpells[index], this.ChooseTip);
    // }
    // for (index = count; index < this.SpellChooses.length; index++)
    //   this.SpellChooses[index].gameObject.SetActive(false);
  }

  set_available_spells() {
    let spellList = GameManager.Instance.CurrentHero.Hero.SpellList;
    this.AvailableSpells = [];
    for (let spells of spellList) {
      let s = spells;
      let spell = this.SpellList.filter((x) => x.NameKey == s)[0];
      if (spell != null) this.AvailableSpells.push(spell);
    }

    const preset = this.GetSaveFilePreset()[GameManager.Instance.SaveFile.Stance].value;

    for (let index = 0; index < preset.length; index++) {
      const element = preset[index].split(",")[0];

      let spell = this.AvailableSpells.filter((x) => x.NameKey == element)[0];
      if (spell != null) this.SpellChooses.push(spell);
    }
    // foreach (SpellChoose spellChoose in this.SpellChooses) {
    //   if (!this.AvailableSpells.Contains(spellChoose.Spell)) {
    //     spellChoose.gameObject.SetActive(false);
    //     GameManager.Instance.Scrolls.ClearSlot(spellChoose.Spell);
    //   }
    //   else
    //     spellChoose.gameObject.SetActive(true);
    // }
    // this.AvailableSpells.Sort((Comparison<Spell>) ((x, y) => x.level_req < y.level_req ? -1 : 1));
  }

  GetSaveFilePreset() {
    let data = GameManager.Instance.SaveFile.SpellPresets.prime.Archon; // TODO hardcoded hero
    let preset = [];
    let initial = data.match(/#(\d)#(.*?)@(.*?)(?=(?:#|$))/gm);
    for (let index = 0; index < initial.length; index++) {
      const i = initial[index].replace(/#(\d)#.*/gm, "$1");
      const name = initial[index].replace(/#.*?#(.*?)@.*/gm, "$1");
      const value = initial[index].replace(/#\d#.*?@(.*?)(?=(?:#|$))/gm, "$1");
      let valueSplit = value.match(/(\d+),(\d+)(?:;|$)/gm);
      for (let i = 0; i < valueSplit.length; i++) valueSplit[i] = valueSplit[i].replace(/;/gm, "");

      preset[i] = {
        name: name,
        value: valueSplit,
      };
    }

    return preset;
  }

  create_effect_map() {
    // this.effect_map[Spells.GemResonance] = new EffectAddTemporaryBuildings(1, 100, 250.0, -3.5, 1.0, Reborn.Souls);
    // this.effect_map[Spells.MagicMissile] = new EffectAddProduction(30, 0.0, 0.0);
    this.effect_map[Spells.RadiantPools] = [
      SimpleEffect.Create(GameContext.GetResource("Building.3.Profit"), 2.1500000953674316, 0.81000000238418579, this.GetSpell(Spells.RadiantPools).Use, "PowA"),
    ];
    // this.effect_map[Spells.JAMissileStorm] = new EffectUseMM();
  }

  GetSpell(key: Spells) {
    return this.SpellList.filter((x) => x.NameKey == key)[0];
  }

  PostLoad() {
    // foreach (Spell permanentSpell in this.PermanentSpellList) {
    //   if (permanentSpell.Use.Value.Mantissa != 0.0)
    //     permanentSpell.Apply();
    // }
    let bigNumber = new BigNumber(0);
    for (const spell of this.SpellList) {
      if (spell.Type == SpellTypeGroup.Evocation) bigNumber = BigNumber.Add(bigNumber, spell.UseThisRun.Value);
    }
    GameManager.Instance.Scrolls.EvoCastCount.SetValue(bigNumber);
    // if (GameManager.Instance.Scrolls.AccumCastCount.Value <  1.0) {
    //   for (Spell spell in this.SpellList) {
    //     if (spell.IsAccumulated || spell.IsPersistent)
    //       bigNumber += spell.UseThisRun.Value;
    //   }
    //   GameManager.Instance.Scrolls.AccumCastCount.SetValue(bigNumber);
    // }
    // this.ChangeSpellSet();
  }
}
