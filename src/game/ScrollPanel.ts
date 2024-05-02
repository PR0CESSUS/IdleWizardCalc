import { BigNumber } from "./BigNumber";
import { GameContext } from "./GameContext";
import { GameManager } from "./GameManager";
import { SpellShards } from "./SpellShards";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";
import { VariableInt } from "./VariableInt";

export class ScrollPanel {
  // CarelessAutocastColor: Color;
  // CarefulAutocastColor: Color;
  Scrolls;
  // Seventh: Scroll;
  // ChoosePanel: SpellChoosePanel;
  ShardsPool: SpellShards;
  Period;
  timer;
  drop_chance = 0.2;
  ScrollCount: VariableInt;
  MaxCharge: VariableInt;
  ShardsPassive: VariableComplex;
  ShardsPerClick: VariableComplex;
  EvocationEfficiency: VariableComplex;
  EvocationDuration: VariableComplex;
  IncantationEfficiency: VariableComplex;
  SummoningEfficiency: VariableComplex;
  SummoningDurationReduction: VariableComplex;
  IncantationDuration: VariableComplex;
  SpellShardsCostReduction: VariableComplex;
  SpellChargingCostReduction: VariableComplex;
  SpellSubcostReduction: VariableComplex;
  SpellChargingSpeed: VariableComplex;
  AccumCastCount: VariableBignumber;
  EvoCastCount: VariableBignumber;
  PersistentMult: VariableComplex;
  PersistentActiveMult: VariableComplex;
  AccumMult: VariableComplex;
  AugmentMult: VariableComplex;
  CastRate: VariableComplex;
  CastRateMult: VariableFloat;
  AccumulatedCasts: VariableComplex;
  PersistentSave: VariableFloat;
  unfilled_scrolls;
  AutoCastCount: VariableInt;
  auto_cast_scrolls;
  // PoolVisual: ShardsPoolVisual;
  // AutocastModes: AutocastModes;
  shards_pool_timer;
  shards_pool_tick = 0.1;
  prevAccumValue = new BigNumber(0);
  // castsInSec: Counter;
  // OnOpen: Action;
  // Action<Spell> OnPreCast;
  // Action<Spell> OnCast;
  // Action<Spell, int> OnCastAmount;
  // Action<Spell> OnCastEnd;
  // Action<Spell> OnPostCast;
  // ChangeSpells: Action;
  shardsInSec = new BigNumber(0);
  evoInSec;

  constructor() {
    this.ShardsPool = new SpellShards();
    this.ScrollCount = new VariableInt(0);
    //   VariableInt scrollCount1 = this.ScrollCount;
    //   scrollCount1.OnChange = scrollCount1.OnChange + new Action(this.change_scroll_count);
    this.ShardsPassive = new VariableComplex(3);
    this.ShardsPerClick = new VariableComplex(BigNumber.Division(0.5, new BigNumber(this.drop_chance)));
    this.PersistentMult = new VariableComplex(1);
    this.PersistentActiveMult = new VariableComplex(1);
    this.AccumMult = new VariableComplex(1);
    this.PersistentSave = new VariableFloat(1);
    this.AugmentMult = new VariableComplex(1);
    this.CastRate = new VariableComplex(60);
    this.CastRateMult = new VariableFloat(1);
    this.MaxCharge = new VariableInt(1);
    //   let maxCharge = this.MaxCharge;
    //   maxCharge.OnChange = maxCharge.OnChange + new Action(this.on_change_max_charge);
    this.EvocationEfficiency = new VariableComplex(1);

    this.EvocationDuration = new VariableComplex(1);
    this.IncantationEfficiency = new VariableComplex(1);
    this.IncantationDuration = new VariableComplex(1);
    this.SummoningEfficiency = new VariableComplex(1);
    this.SummoningDurationReduction = new VariableComplex(1);
    this.AccumCastCount = new VariableBignumber(GameManager.Instance.SaveFile.AccumCasts);
    this.EvoCastCount = new VariableBignumber(0);
    this.SpellShardsCostReduction = new VariableComplex(1);
    //   VariableComplex shardsCostReduction = this.SpellShardsCostReduction;
    //   shardsCostReduction.OnChange = shardsCostReduction.OnChange + new Action(this.CheckFilledList);
    this.SpellChargingCostReduction = new VariableComplex(1);
    this.SpellSubcostReduction = new VariableComplex(1);
    this.SpellChargingSpeed = new VariableComplex(1);
    this.AccumulatedCasts = new VariableComplex(0);
    // console.log(this.AccumulatedCasts);

    //   VariableComplex accumulatedCasts = this.AccumulatedCasts;
    //   accumulatedCasts.OnChange = accumulatedCasts.OnChange + new Action(this.OnChangeAccum);
    this.AutoCastCount = new VariableInt(0);
    //   this.castsInSec = new Counter();

    //   this.auto_cast_scrolls = new List<Scroll>();
    //   this.unfilled_scrolls = new List<Scroll>();
    //   for (let index = 0; index < this.Scrolls.length; index++) {
    //     if (this.Scrolls[index].spell != null) {
    //       Debug.Log((object) this.Scrolls[index].spell.NameKey);
    //       if (this.Scrolls[index].spell.ShardsBuilding)
    //         this.unfilled_scrolls.push(this.Scrolls[index]);
    //     }
    //   }
    //   VariableInt scrollCount2 = this.ScrollCount;
    //   scrollCount2.OnChange = scrollCount2.OnChange + new Action(this.pool_bar);
    //   VariableLong timeSession = Statistic.TimeSession;
    //   timeSession.OnChange = timeSession.OnChange + new Action(this.ApplyChangeInSecond);
  }

  Init() {
    GameContext.AddSpellContext();
  }

  RecheckSpells() {
    for (let index = 0; index < this.Scrolls.length; index++) {
      if (this.Scrolls[index].spell != null && !this.Scrolls[index].spell.AvailableToUse) this.Scrolls[index].Clear();
    }
  }

  ApplyChangeInSecond() {
    //   if (!(this.shardsInSec > new BigNumber(0)))
    //     return;
    //   Statistic.ShardsSession.Change(this.shardsInSec);
    //   Statistic.Change(Statistic.ShardsTotal, this.shardsInSec);
    //   Statistic.Change(Statistic.ShardsRealm, this.shardsInSec);
    //   this.shardsInSec = new BigNumber(0);
  }

  OnChangeAccum() {
    //   BigNumber addendum = this.AccumulatedCasts.Value - this.prevAccumValue;
    //   foreach (Spell accumalatedSpell in GameManager.Instance.SpellBook.AccumalatedSpellList)
    //     accumalatedSpell.Use.Change(addendum, 1);
    //   this.prevAccumValue += addendum;
  }

  SpellsReset(full = false) {
    //   foreach (Spell spell in GameManager.Instance.SpellBook.SpellList)
    //     spell.Restart(full);
    //   foreach (Scroll scroll in this.Scrolls)
    //     scroll.Restart();
  }

  ChangeRealm() {
    //   foreach (Scroll scroll in this.Scrolls)
    //     scroll.Restart();
    //   foreach (Spell spell in GameManager.Instance.SpellBook.SpellList)
    //     spell.ChangeRealm();
  }

  SaveRetain() {
    //   if (this.PersistentSave.ValueFloat <= 1.0)
    //     return (Dictionary<int, BigNumber>) null;
    //   Dictionary<int, BigNumber> dictionary = new Dictionary<int, BigNumber>();
    //   List<Spell> all = GameManager.Instance.SpellBook.SpellList.FindAll((Predicate<Spell>) (x => !x.ResetUses));
    //   BigNumber bigNumber1 = new BigNumber(0);
    //   foreach (Spell spell in all) {
    //     BigNumber bigNumber2 = spell.Use.Value * (BigNumber) (GameManager.Instance.Scrolls.PersistentSave.ValueFloat - 1.0);
    //     if (bigNumber2 >= 1)
    //       dictionary.push(spell.NameKey, bigNumber2);
    //   }
    //   return dictionary.length == 0 ? (Dictionary<int, BigNumber>) null : dictionary;
  }

  LoadRetain(casts) {
    //   if (casts == null)
    //     return;
    //   foreach (KeyValuePair<int, BigNumber> cast in casts)
    //     GameManager.Instance.SpellBook.GetSpell((Spells) cast.Key).Use.SetValue(cast.Value);
  }

  Restart() {
    //   this.ScrollCount.SetValue(0);
    //   this.AutoCastCount.SetValue(0);
    //   this.shards_pool_timer = 0.0;
    //   this.EvocationEfficiency.Reset(1);
    //   this.EvocationDuration.Reset(1);
    //   this.IncantationEfficiency.Reset(1);
    //   this.IncantationDuration.Reset(1);
    //   this.SummoningEfficiency.Reset(1);
    //   this.SummoningDurationReduction.Reset(1);
    //   this.AccumCastCount.Reset(new BigNumber(0));
    //   this.EvoCastCount.SetValue(new BigNumber(0));
    //   this.Seventh.Clear();
  }

  Update() {
    //   this.periodic_add_progress();
    //   if (this.AutoCastCount.ValueInt > 0) {
    //     if (this.AutocastModes.gameObject.activeInHierarchy)
    //       return;
    //     this.AutocastModes.gameObject.SetActive(true);
    //   }
    //   else {
    //     if (!this.AutocastModes.gameObject.activeInHierarchy)
    //       return;
    //     this.AutocastModes.gameObject.SetActive(false);
    //   }
  }

  LateUpdate() {
    //   this.CheckSetsHotkey();
    //   for (let index = 0; index < this.ScrollCount.ValueInt; index++)
    //     this.Scrolls[index].UpdateScroll();
    //   this.castsInSec.Update();
  }

  pool_bar() {
    //   if (this.ScrollCount.ValueInt > 0) {
    //     if (this.PoolVisual.gameObject.activeInHierarchy)
    //       return;
    //     this.PoolVisual.gameObject.SetActive(true);
    //   }
    //   else {
    //     if (!this.PoolVisual.gameObject.activeInHierarchy)
    //       return;
    //     this.PoolVisual.gameObject.SetActive(false);
    //     this.PoolVisual.HideTip();
    //   }
  }

  StopAll(countCast = false) {
    //   foreach (Scroll scroll in this.Scrolls) {
    //     if (countCast && scroll.spell != null && scroll.active)
    //       scroll.IncreaseCasts();
    //     scroll.StopAction();
    //   }
  }

  StopOnWarp() {
    //   foreach (Scroll scroll in this.Scrolls) {
    //     if (scroll.spell != null && scroll.spell.NameKey != Spells.GenerateParadox) {
    //       if (scroll.active)
    //         scroll.IncreaseCasts();
    //       scroll.StopAction();
    //     }
    //   }
  }

  // AddToAutoCast(Scroll s) {
  //   if (this.AutoCastCount.ValueInt <= 0)
  //     return;
  //   if (this.AutoCastCount.ValueInt == this.auto_cast_scrolls.length)
  //     this.RemoveAutoCast(this.auto_cast_scrolls[0]);
  //   this.auto_cast_scrolls.push(s);
  //   s.AutoCast = true;
  // }

  RemoveAutoCast(s) {
    // Scroll
    if (this.auto_cast_scrolls.length <= 0) return;
    this.auto_cast_scrolls.Remove(s);
    s.AutoCast = false;
  }

  ClearAutocast() {
    //   foreach (Scroll scroll in this.Scrolls)
    //     this.RemoveAutoCast(scroll);
    //   this.auto_cast_scrolls = new List<Scroll>();
  }

  change_scroll_count() {
    //   if (this.ScrollCount.ValueInt < 0)
    //     Debug.Log((object) "< 0 scrolls");
    //   else if (this.ScrollCount.ValueInt > this.Scrolls.length) {
    //     Debug.Log((object) "error max scrolls");
    //   }
    //   else {
    //     for (let index = 0; index < this.ScrollCount.ValueInt; index++)
    //       this.Scrolls[index].gameObject.SetActive(true);
    //     for (valueInt = this.ScrollCount.ValueInt; valueInt < this.Scrolls.length; valueInt++) {
    //       if (this.Scrolls[valueInt].gameObject.activeInHierarchy) {
    //         this.Scrolls[valueInt].StopAction();
    //         this.Scrolls[valueInt].gameObject.SetActive(false);
    //       }
    //     }
    //   }
  }

  periodic_add_progress() {
    //   if (this.shards_pool_timer >= this.shards_pool_tick) {
    //     this.shards_pool_timer %= this.shards_pool_tick;
    //     this.FillScrolls(this.ShardsPool.GetShards());
    //   }
    //   this.shards_pool_timer += Time.unscaledDeltaTime;
    //   if (this.Period == 0.0)
    //     return;
    //   this.timer += Time.deltaTime;
    //   if (this.timer <= this.Period)
    //     return;
    //   num = (this.timer / this.Period);
    //   this.timer %= this.Period;
    //   this.ShardsPool.push(this.ShardsPassive.Value * (BigNumber) num);
  }

  GetProgressFromClick(parameter = 1) {
    //   num = UnityEngine.Random.Range(0.0, 1);
    //   BigNumber bigNumber = new BigNumber(0);
    //   dropChance = this.drop_chance;
    //   if (num < dropChance)
    //     bigNumber = this.calculate_click_progress() * (BigNumber) parameter;
    //   return (bigNumber * (BigNumber) parameter).Clamp(new BigNumber(0), (BigNumber) "1e30").ToFloat();
  }

  // FillScroll(Spells key, dp, shards = false) {return this.Scrolls.Find((Predicate<Scroll>) (x => x.spell != null && x.spell.NameKey == key)).AddProgressBuild(dp, shards: false);}

  // FillScrolls(BigNumber dp) {
  //   if (BigNumber.Sign(dp) < 0)
  //     return;
  //   if (this.unfilled_scrolls.length == 0) {
  //     this.ShardsPool.Insert(dp);
  //   }
  //   else {
  //     List<Scroll> all = this.unfilled_scrolls.FindAll((Predicate<Scroll>) (x => x.spell.Priority == 1));
  //     if (all.length == 0)
  //       all = this.unfilled_scrolls.FindAll((Predicate<Scroll>) (x => x.spell.Priority == 0));
  //     if (all.length == 0)
  //       all = this.unfilled_scrolls.FindAll((Predicate<Scroll>) (x => x.spell.Priority == -1));
  //     if (all.length == 0) {
  //       this.ShardsPool.Insert(dp);
  //     }
  //     else {
  //       index = UnityEngine.Random.Range(0, all.length);
  //       if (!(dp > new BigNumber(0)))
  //         return;
  //       spellShardCapacity = all[index].GetSpellShardCapacity();
  //       if (spellShardCapacity < 0.0 && !all[index].spell.LimitedCharges || (BigNumber) spellShardCapacity > dp)
  //         spellShardCapacity = dp.ToDouble();
  //       all[index].AddProgressBuild(spellShardCapacity);
  //       this.FillScrolls(dp - (BigNumber) spellShardCapacity);
  //     }
  //   }
  // }

  // AddShardsRandom(shard, List<Spells> except = null) {
  //   List<Scroll> unfilledScrolls = GameManager.Instance.Scrolls.unfilled_scrolls;
  //   if (unfilledScrolls.length == 0)
  //     return;
  //   let num1 = 0.0;
  //   double[] prep = new double[unfilledScrolls.length];
  //   let num2 = 1;
  //   List<Scroll> scrollList1;
  //   do {
  //     List<Scroll> scrollList2 = this.check_unfilled(unfilledScrolls, prep);
  //     List<Scroll> all = scrollList2.FindAll((Predicate<Scroll>) (x => x.spell.Priority == 1));
  //     if (all.length == 0) {
  //       num2 = 0;
  //       all = scrollList2.FindAll((Predicate<Scroll>) (x => x.spell.Priority > -1));
  //     }
  //     if (all.length == 0) {
  //       num2 = -1;
  //       all = scrollList2.FindAll((Predicate<Scroll>) (x => x.spell.Priority == -1));
  //     }
  //     scrollList1 = new List<Scroll>();
  //     for (let index = 0; index < all.length; index++) {
  //       if (all[index].GetSpellShardCapacity() > prep[index] && (except == null || !except.Contains(all[index].spell.NameKey)))
  //         scrollList1.push(all[index]);
  //     }
  //     if (scrollList1.length != 0)
  //       num1 = shard / scrollList1.length;
  //     foreach (Scroll scroll in scrollList1) {
  //       spellShardCapacity = scroll.GetSpellShardCapacity();
  //       if (spellShardCapacity < num1 && spellShardCapacity > 0.0) {
  //         shard -= spellShardCapacity;
  //         prep[unfilledScrolls.IndexOf(scroll)] += spellShardCapacity;
  //       }
  //       else {
  //         shard -= num1;
  //         prep[unfilledScrolls.IndexOf(scroll)] += num1;
  //       }
  //     }
  //   }
  //   while (shard > 0.0 && scrollList1.length > 0 && num2 != -1 && num1 > 1.0);
  //   Scroll[] array = unfilledScrolls.ToArray();
  //   for (let index = 0; index < prep.length; index++) {
  //     if (prep[index] > 0.0)
  //       array[index].AddProgressBuild(prep[index], except != null);
  //   }
  // }

  // BigNumber calculate_click_progress() {
  //   if (this.ShardsPerClick != null)
  //     return this.ShardsPerClick.Value;
  //   Debug.Log((object) "Null Here!");
  //   return new BigNumber(0);
  // }

  // ClearSlot(Spell spell) {
  //   if (spell == null) {
  //     Debug.Log((object) "nothing to clear");
  //   }
  //   else {
  //     if (!spell.choice)
  //       return;
  //     Scroll scroll = this.Scrolls.Find((Predicate<Scroll>) (x => x.spell == spell));
  //     if ((UnityEngine.Object) scroll != (UnityEngine.Object) null) {
  //       if (this.unfilled_scrolls.Contains(scroll))
  //         this.unfilled_scrolls.Remove(scroll);
  //       scroll.Clear();
  //       if (this.ChangeSpells == null)
  //         return;
  //       this.ChangeSpells();
  //     }
  //     else
  //       Debug.LogError((object) "error spell.choise value");
  //   }
  // }

  // on_change_max_charge() {
  //   foreach (Scroll scroll in this.Scrolls) {
  //     if (scroll.spell != null && scroll.spell.ShardsBuilding && !scroll.spell.IsMax && !this.unfilled_scrolls.Contains(scroll))
  //       this.unfilled_scrolls.push(scroll);
  //   }
  // }

  // CheckSetsHotkey() {
  //   if (!Input.GetKey(KeyCode.Z) && !Input.GetKey(KeyCode.Y) && !Input.GetKey(KeyCode.Q))
  //     return;
  //   let id = 0;
  //   if (Input.GetKeyDown(KeyCode.Alpha1) || Input.GetKeyDown(KeyCode.Keypad1))
  //     id = 1;
  //   else if (Input.GetKeyDown(KeyCode.Alpha2) || Input.GetKeyDown(KeyCode.Keypad2))
  //     id = 2;
  //   else if (Input.GetKeyDown(KeyCode.Alpha3) || Input.GetKeyDown(KeyCode.Keypad3))
  //     id = 3;
  //   else if (Input.GetKeyDown(KeyCode.Alpha4) || Input.GetKeyDown(KeyCode.Keypad4))
  //     id = 4;
  //   else if (Input.GetKeyDown(KeyCode.Alpha5) || Input.GetKeyDown(KeyCode.Keypad5))
  //     id = 5;
  //   else if (Input.GetKeyDown(KeyCode.Alpha6) || Input.GetKeyDown(KeyCode.Keypad6))
  //     id = 6;
  //   else if (Input.GetKeyDown(KeyCode.Alpha7) || Input.GetKeyDown(KeyCode.Keypad7))
  //     id = 7;
  //   else if (Input.GetKeyDown(KeyCode.Alpha8) || Input.GetKeyDown(KeyCode.Keypad8))
  //     id = 8;
  //   else if (Input.GetKeyDown(KeyCode.Alpha9) || Input.GetKeyDown(KeyCode.Keypad9))
  //     id = 9;
  //   else if (Input.GetKeyDown(KeyCode.Alpha0) || Input.GetKeyDown(KeyCode.Keypad0))
  //     id = 10;
  //   if (id == 0)
  //     return;
  //   if ((Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift)) && !Input.GetKey(KeyCode.Q)) {
  //     GameManager.Instance.SpellBook.SetsPanel.SaveSet(id);
  //   }
  //   else {
  //     GameManager.Instance.SpellBook.SetsPanel.ActivateSet(id);
  //     Preset<SpellPresetSlot> preset = GameManager.Instance.SpellBook.SetsPanel.GetPreset().Get(id - 1);
  //     if (preset == null)
  //       return;
  //     text = preset.name;
  //     if (string.IsNullOrEmpty(text))
  //       text = "Set " + id.ToString();
  //     if (this.OnShowName != null)
  //       text = this.OnShowName(text);
  //     GameManager.Instance.AnimatedText.TextUp(text, this.setTextPosition.position, Color.white, ignoreLimits: true, ignoreTimeScale: true);
  //   }
  // }

  // CheckFilledList() {
  //   for (let index = 0; index < this.Scrolls.length; index++)
  //     this.Scrolls[index].CheckInFilled();
  // }

  // List<Scroll> check_unfilled(List<Scroll> all, double[] prep) {
  //   scrollList: Scroll[] = [];
  //   for (let index = 0; index < all.length; index++) {
  //     if (all[index].GetSpellShardCapacity() > prep[index])
  //       scrollList.push(all[index]);
  //   }
  //   return scrollList;
  // }

  // Activate7th() {
  //   this.Scrolls.push(this.Seventh);
  //   this.ScrollCount.Change(1);
  //   this.AutoCastCount.Change(1);
  //   if (this.Seventh.spell != null) {
  //     if (this.Seventh.spell.choice)
  //       this.Seventh.Clear();
  //     else
  //       this.Seventh.spell.choice = true;
  //   }
  //   this.layout.spacing = -4;
  // }

  // Deactivate7th() {
  //   if (!this.Scrolls.Contains(this.Seventh)) {
  //     Debug.Log((object) "don't contains");
  //   }
  //   else {
  //     this.Seventh.StopAction();
  //     if (this.Seventh.spell != null)
  //       this.Seventh.spell.choice = false;
  //     this.ScrollCount.Change(-1);
  //     this.AutoCastCount.Change(-1);
  //     this.Scrolls.Remove(this.Seventh);
  //     this.Seventh.Clear();
  //     this.layout.spacing = 0.0;
  //   }
  // }
}
