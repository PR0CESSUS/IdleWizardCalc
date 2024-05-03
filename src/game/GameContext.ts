import { Building } from "./Building";
import { EffectFactory } from "./EffectFactory";
import { GameManager } from "./GameManager";
import { Statistic } from "./Statistic";
import { Variable } from "./Variable";

export class GameContext {
  public static effect;
  public static resource = {};
  public static OnChange;
  // public static GenerateEffects() {
  //   GameContext.effect = new Object();
  //   GameContext.effect
  //     ['Linear'],
  //     EffectFactory.Create(
  //       EffectFactory.Linear,
  //       EffectFactory.LinearDelete,
  //       EffectFactory.LinearPreview
  //     )
  //   );
  //   GameContext.effect
  //     ['Pow'],
  //     EffectFactory.Create(
  //       EffectFactory.Power,
  //       EffectFactory.PowerDelete,
  //       EffectFactory.PowerPreview
  //     )
  //   );
  //   GameContext.effect
  //     ['PowA'],
  //     EffectFactory.Create(
  //       EffectFactory.PowerA,
  //       EffectFactory.PowerADelete,
  //       EffectFactory.PowerAPreview
  //     )
  //   );
  //   GameContext.effect
  //     ['Log10'],
  //     EffectFactory.Create(
  //       EffectFactory.Log10,
  //       EffectFactory.Log10Delete,
  //       EffectFactory.Log10Preview
  //     )
  //   );
  //   GameContext.effect
  //     ['Ln'],
  //     EffectFactory.Create(
  //       EffectFactory.Ln,
  //       EffectFactory.LnDelete,
  //       EffectFactory.LnPreview
  //     )
  //   );
  //   GameContext.effect
  //     ['LogA'],
  //     EffectFactory.Create(
  //       EffectFactory.LogA,
  //       EffectFactory.LogADelete,
  //       EffectFactory.LogAPreview
  //     )
  //   );
  //   GameContext.effect
  //     ['PowIntW'],
  //     EffectFactory.Create(
  //       EffectFactory.PowerIntW,
  //       EffectFactory.PowerIntWDelete,
  //       EffectFactory.PowerIntWPreview
  //     )
  //   );
  //   GameContext.effect
  //     ['PowW'],
  //     EffectFactory.Create(
  //       EffectFactory.PowerW,
  //       EffectFactory.PowerWDelete,
  //       EffectFactory.PowerWPreview
  //     )
  //   );
  // }

  public static GetResource(id) {
    let resource = null;
    try {
      resource = GameContext.resource[id];
    } catch (error) {
      console.log(error);
    }

    return resource;
  }

  public static GetEffect(id) {
    let effect = null;
    try {
      effect = GameContext.effect[id];
    } catch (error) {
      console.log("error", id);
    }
    return effect;
  }

  public static ContextAddResource(key: string, variable: Variable) {
    GameContext.resource[key] = variable;
  }

  public static GenerateContext() {
    // GameContext.resource[`Base.Mana`] = GameManager.Instance.Mana;
    GameContext.resource[`Base.AllBuildingsProfit`] = GameManager.Instance.Profit;
    GameContext.resource[`Base.PPS`] = GameManager.Instance.PPS;
    GameContext.resource[`Base.Souls`] = GameManager.Instance.Reborn.Souls;
    GameContext.resource[`Base.SoulPower`] = GameManager.Instance.Reborn.SoulPower;
    GameContext.resource["Base.SoulPowerFactor"] = GameManager.Instance.Reborn.SoulPowerFactor;
    GameContext.resource["Base.SoulPowerTotal"] = GameManager.Instance.Reborn.SoulPowerTotal;
    GameContext.resource["Base.StartingSouls"] = GameManager.Instance.Reborn.StartingSouls;
    GameContext.resource[`Base.Ascends`] = Statistic.Ascends;
    GameContext.resource[`Base.IdleTime`] = GameManager.Instance.Idle.TimeToIdle;
    GameContext.resource[`Base.IdleBonus`] = GameManager.Instance.Idle.IdleBonus;
    GameContext.resource[`Base.IdleOfflineBonus`] = GameManager.Instance.Idle.IdleAndOfflineBonus;
    GameContext.resource[`Base.IdleSaveClicks`] = GameManager.Instance.Idle.SaveClicks;
    GameContext.resource[`Base.IdleSaveClicksCD`] = GameManager.Instance.Idle.SaveClickCD;
    GameContext.resource[`Base.ManaTotal`] = Statistic.ManaSession;
    GameContext.resource[`Base.ManaAllTime`] = Statistic.ManaAllTime;
    GameContext.resource[`Base.OfflineProduction`] = GameManager.Instance.OfflineProduction;
    GameContext.resource[`Base.TotalBuildings`] = Statistic.TotalBuildings;
    GameContext.resource[`Base.TotalUpgrades`] = Statistic.BoughtUpgrades;
    GameContext.resource[`Base.PlayedTimeTotal`] = Statistic.TimeTotal;
    GameContext.resource[`Base.PlayedTimeRealm`] = Statistic.TimeRealm;
    GameContext.resource[`Base.PlayedTime`] = Statistic.TimeSession;
    GameContext.resource[`Base.IdleTimeSession`] = Statistic.TimeIdleSession;
    GameContext.resource[`Base.IdleTimeTotal`] = Statistic.TimeIdleTotal;
    GameContext.resource[`Base.OfflineTimeTotal`] = Statistic.TimeOfflineTotal;
    GameContext.resource[`Base.Bats`] = Statistic.Collectables;
    GameContext.resource[`Base.BatsRealm`] = Statistic.CollectablesRealm;
    GameContext.resource[`Base.BatsExile`] = Statistic.CollectablessExile;
    GameContext.resource[`Base.BatsOnly`] = Statistic.BatsExile;
    GameContext.resource[`Base.LevelReq`] = GameManager.Instance.LevelReduction;
    GameContext.resource[`VoidMana.Value`] = GameManager.Instance.VoidMana;
    GameContext.resource[`VoidMana.Power`] = GameManager.Instance.VoidManaManager.Power;
    GameContext.resource[`VoidMana.Decrease`] = GameManager.Instance.VoidManaManager.Decrease;
    GameContext.resource[`VoidMana.LifeTime`] = GameManager.Instance.VoidManaManager.VoidCore.BonusLifeTime;
    GameContext.resource[`VoidMana.SpawnPeriod`] = GameManager.Instance.VoidManaManager.VoidCore.TimeInterval;
    GameContext.resource[`VoidMana.SpawnSpeed`] = GameManager.Instance.VoidManaManager.VoidCore.SpawnSpeed;
    GameContext.resource[`VoidMana.Bonus`] = GameManager.Instance.VoidManaManager.VoidCore.BonusProfit;
    GameContext.resource[`VoidMana.Total`] = Statistic.VoidManaSession;
    GameContext.resource[`VoidMana.TotalAllTime`] = Statistic.VoidManaAllTime;
    GameContext.resource[`VoidMana.Collect`] = Statistic.ClickableCollect;
    GameContext.resource[`VoidMana.CollectRealm`] = Statistic.ClickableCollectRealm;
    GameContext.resource[`VoidMana.CollectTotal`] = Statistic.ClickableCollectTotal;
    GameContext.resource[`VoidMana.BuffChance`] = GameManager.Instance.VoidManaManager.VoidCore.BuffOnCollect;
    GameContext.resource[`VoidMana.DecreaseSpawnOnCollect`] = GameManager.Instance.VoidManaManager.VoidCore.DecreaseSpawnOnCollect;
    GameContext.resource[`Click.Profit`] = GameManager.Instance.Orb.click_profit;
    GameContext.resource[`Click.AutoClickProfit`] = GameManager.Instance.Orb.autoclick_profit;
    GameContext.resource[`Click.CritChance`] = GameManager.Instance.Orb.crit_chance;
    GameContext.resource[`Click.CritProfit`] = GameManager.Instance.Orb.crit_profit;
    GameContext.resource[`Click.PercentPPS`] = GameManager.Instance.Orb.percent_pps;
    GameContext.resource[`Click.Total`] = Statistic.Clicks;
    GameContext.resource[`Click.TotalAllTime`] = Statistic.ClicksTotal;
    GameContext.resource[`Click.AutoTotal`] = Statistic.AutoClicks;
    GameContext.resource[`Click.AutoTotalRealm`] = Statistic.AutoClicksRealm;
    GameContext.resource[`Click.AutoTotalAllTime`] = Statistic.AutoClicksTotal;
    GameContext.resource[`Click.CritRating`] = GameManager.Instance.Orb.critRating.crit_rating;
    GameContext.resource[`Click.Auto`] = GameManager.Instance.Orb.autoclicks;
    GameContext.resource[`Click.AutoClicksFromSpell`] = GameManager.Instance.Orb.autoclicksFromSpell;
    GameContext.resource[`Pet.MaxLevel`] = Statistic.PetMaxLevel;
    GameContext.resource[`Pet.MaxLevelAllTime`] = Statistic.PetMaxLevelAllTime;
    // GameContext.conditionConditionNames.More.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.More)));
    // GameContext.conditionConditionNames.Less.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.Less)));
    // GameContext.conditionConditionNames.Max.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.Max)));
    // GameContext.conditionConditionNames.Min.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.Min)));
    // GameContext.conditionConditionNames.PetLevel.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.PetLevel)));
    // GameContext.conditionConditionNames.HeroLevel.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.HeroLevel)));
    // GameContext.conditionConditionNames.SpellUse.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.SpellUse)));
    // GameContext.conditionConditionNames.Achieve.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.Achieve)));
    // GameContext.conditionConditionNames.GodLevel.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.GodLevel)));
    // GameContext.conditionConditionNames.AscensionLevel.ToString(), ConditionFactory.Create(new ConditionFactory.condition_function(ConditionFactory.AscentionLevel)));
    // GameContext.GenerateEffects();
    // foreach (object obj in Enum.GetValues(typeof (HeroesNames)))
    //   Statistic.ClassTimenew VariableLong(0UL));
    // GameContext.ContextAddTime(Statistic.ClassTime);
    // if (GameContext.OnChange == null)
    //   return;
    // GameContext.OnChange();
  }

  public static ContextAddBuilding(building: Building) {
    GameContext.resource["Building." + building.Tier + ".Profit"] = building.pps_per_building;
    GameContext.resource["Building." + building.Tier + ".Cost"] = building.base_cost;
    GameContext.resource["Building." + building.Tier + ".Level"] = building.Level;
    GameContext.resource["Building." + building.Tier + ".CostGrowth"] = building.cost_growth;
  }

  public static GenerateEffects() {
    GameContext.effect = {};
    GameContext.effect["Linear"] = EffectFactory.Create(EffectFactory.Linear, EffectFactory.LinearDelete, EffectFactory.LinearPreview);
    GameContext.effect["Pow"] = EffectFactory.Create(EffectFactory.Power, EffectFactory.PowerDelete, EffectFactory.PowerPreview);
    GameContext.effect["PowA"] = EffectFactory.Create(EffectFactory.PowerA, EffectFactory.PowerADelete, EffectFactory.PowerAPreview);
    GameContext.effect["Log10"] = EffectFactory.Create(EffectFactory.Log10, EffectFactory.Log10Delete, EffectFactory.Log10Preview);
    // GameContext.effect['Ln']= EffectFactory.Create(EffectFactory.Ln, EffectFactory.LnDelete, EffectFactory.LnPreview);
    GameContext.effect["LogA"] = EffectFactory.Create(EffectFactory.LogA, EffectFactory.LogADelete, EffectFactory.LogAPreview);
    // GameContext.effect['PowIntW']= EffectFactory.Create(EffectFactory.PowerIntW, EffectFactory.PowerIntWDelete, EffectFactory.PowerIntWPreview);
    // GameContext.effect['PowW']= EffectFactory.Create(EffectFactory.PowerW, EffectFactory.PowerWDelete, EffectFactory.PowerWPreview);
  }

  public static AddSpellContext() {
    GameContext.resource["Spell.SpellCast"] = Statistic.CastSpell;
    GameContext.resource["Spell.SpellCastRealm"] = Statistic.CastSpellRealm;
    GameContext.resource["Spell.SpellCastTotal"] = Statistic.CastSpellTotal;
    GameContext.resource["Spell.Shards"] = Statistic.ShardsSession;
    GameContext.resource["Spell.ShardsRealm"] = Statistic.ShardsRealm;
    GameContext.resource["Spell.ShardsTotal"] = Statistic.ShardsTotal;
    GameContext.resource["Spell.ScrollCount"] = GameManager.Instance.Scrolls.ScrollCount;
    GameContext.resource["Spell.MaxCharge"] = GameManager.Instance.Scrolls.MaxCharge;
    GameContext.resource["Spell.BaseProgress"] = GameManager.Instance.Scrolls.ShardsPassive;
    GameContext.resource["Spell.ClickProgress"] = GameManager.Instance.Scrolls.ShardsPerClick;
    GameContext.resource["Spell.PoolProgress"] = GameManager.Instance.Scrolls.ShardsPool.Efficiency;
    GameContext.resource["Spell.PoolCapacity"] = GameManager.Instance.Scrolls.ShardsPool.Capacity;
    GameContext.resource["Spell.AutoCastCount"] = GameManager.Instance.Scrolls.AutoCastCount;
    GameContext.resource["Spell.EvocationEfficiency"] = GameManager.Instance.Scrolls.EvocationEfficiency;
    GameContext.resource["Spell.EvocationDuration"] = GameManager.Instance.Scrolls.EvocationDuration;
    GameContext.resource["Spell.IncantationEfficiency"] = GameManager.Instance.Scrolls.IncantationEfficiency;
    GameContext.resource["Spell.IncantationDuration"] = GameManager.Instance.Scrolls.IncantationDuration;
    GameContext.resource["Spell.SummoningEfficiency"] = GameManager.Instance.Scrolls.SummoningEfficiency;
    GameContext.resource["Spell.SummoningDuration"] = GameManager.Instance.Scrolls.SummoningDurationReduction;
    GameContext.resource["Spell.PersistentMult"] = GameManager.Instance.Scrolls.PersistentMult;
    GameContext.resource["Spell.PersistentActiveMult"] = GameManager.Instance.Scrolls.PersistentActiveMult;
    GameContext.resource["Spell.PersistentSave"] = GameManager.Instance.Scrolls.PersistentSave;
    GameContext.resource["Spell.AccumutaledCasts"] = GameManager.Instance.Scrolls.AccumulatedCasts;
    GameContext.resource["Spell.AccumMult"] = GameManager.Instance.Scrolls.AccumMult;
    GameContext.resource["Spell.AccumCastCount"] = GameManager.Instance.Scrolls.AccumCastCount;
    GameContext.resource["Spell.EvoCastCount"] = GameManager.Instance.Scrolls.EvoCastCount;
    GameContext.resource["Spell.AugmentMult"] = GameManager.Instance.Scrolls.AugmentMult;
    GameContext.resource["Spell.CastRate"] = GameManager.Instance.Scrolls.CastRate;
    GameContext.resource["Spell.CostReduction"] = GameManager.Instance.Scrolls.SpellShardsCostReduction;
    GameContext.resource["Spell.NonShardCostReduction"] = GameManager.Instance.Scrolls.SpellChargingCostReduction;
    GameContext.resource["Spell.SubcostReduction"] = GameManager.Instance.Scrolls.SpellSubcostReduction;
    GameContext.resource["Spell.NonShardChargeSpeed"] = GameManager.Instance.Scrolls.SpellChargingSpeed;
  }

  public static AddItems() {
    GameContext.resource["Items.UnlockedTotal"] = Statistic.UnlockedItems;
    GameContext.resource["Items.Gathered"] = Statistic.ResourcesCollected;
    GameContext.resource["Items.EDust"] = Statistic.EnchantingDustExile;
    GameContext.resource["Items.EDustRealm"] = Statistic.ResourcesRealm[4];
    GameContext.resource["Items.EDustTotal"] = Statistic.ResourcesTotal[4];
    GameContext.resource["Items.GatherTotal"] = Statistic.ResourcesCollectedTotal;
    GameContext.resource["Items.GatherRealm"] = Statistic.ResourcesCollectedRealm;
    GameContext.resource["Items.Common"] = Statistic.UnlockedByTiers[0];
    GameContext.resource["Items.Uncommon"] = Statistic.UnlockedByTiers[1];
    GameContext.resource["Items.Rare"] = Statistic.UnlockedByTiers[2];
    GameContext.resource["Items.Epic"] = Statistic.UnlockedByTiers[3];
    GameContext.resource["Items.Legendary"] = Statistic.UnlockedByTiers[4];
  }
}
