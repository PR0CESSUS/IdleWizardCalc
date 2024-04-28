import { Building } from "./Building";
import { EffectFactory } from "./EffectFactory";
import { GameManager } from "./GameManager";

export class GameContext {
  public static effect;
  public static resource = {};
  // public static GenerateEffects() {
  //   GameContext.effect = new Object();
  //   GameContext.effect
  //     ['Linear'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.Linear),
  //       new EffectFactory.effect_action(EffectFactory.LinearDelete),
  //       new EffectFactory.effect_preview(EffectFactory.LinearPreview)
  //     )
  //   );
  //   GameContext.effect
  //     ['Pow'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.Power),
  //       new EffectFactory.effect_action(EffectFactory.PowerDelete),
  //       new EffectFactory.effect_preview(EffectFactory.PowerPreview)
  //     )
  //   );
  //   GameContext.effect
  //     ['PowA'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.PowerA),
  //       new EffectFactory.effect_action(EffectFactory.PowerADelete),
  //       new EffectFactory.effect_preview(EffectFactory.PowerAPreview)
  //     )
  //   );
  //   GameContext.effect
  //     ['Log10'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.Log10),
  //       new EffectFactory.effect_action(EffectFactory.Log10Delete),
  //       new EffectFactory.effect_preview(EffectFactory.Log10Preview)
  //     )
  //   );
  //   GameContext.effect
  //     ['Ln'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.Ln),
  //       new EffectFactory.effect_action(EffectFactory.LnDelete),
  //       new EffectFactory.effect_preview(EffectFactory.LnPreview)
  //     )
  //   );
  //   GameContext.effect
  //     ['LogA'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.LogA),
  //       new EffectFactory.effect_action(EffectFactory.LogADelete),
  //       new EffectFactory.effect_preview(EffectFactory.LogAPreview)
  //     )
  //   );
  //   GameContext.effect
  //     ['PowIntW'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.PowerIntW),
  //       new EffectFactory.effect_action(EffectFactory.PowerIntWDelete),
  //       new EffectFactory.effect_preview(EffectFactory.PowerIntWPreview)
  //     )
  //   );
  //   GameContext.effect
  //     ['PowW'],
  //     EffectFactory.Create(
  //       new EffectFactory.effect_action(EffectFactory.PowerW),
  //       new EffectFactory.effect_action(EffectFactory.PowerWDelete),
  //       new EffectFactory.effect_preview(EffectFactory.PowerWPreview)
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
      console.log(error);
    }
    return effect;
  }

  public static GenerateContext() {
    // GameContext.resource[`Base.Mana`] = GameManager.Instance.Mana;
    // GameContext.resource[`Base.AllBuildingsProfit`] = GameManager.Instance.Profit;
    // GameContext.resource[`Base.PPS`] = GameManager.Instance.PPS;
    // GameContext.resource[`Base.Souls`] = Reborn.Souls;
    // GameContext.resource[`Base.SoulPower`] = Reborn.SoulPower;
    // GameContext.resource["Base.SoulPowerFactor"]=  Reborn.SoulPowerFactor;
    // GameContext.resource["Base.SoulPowerTotal"]=  Reborn.SoulPowerTotal;
    // GameContext.resource["Base.StartingSouls"]= Reborn.StartingSouls;
    // GameContext.resource[`Base.Ascends`] = Statistic.Ascends;
    // GameContext.resource[`Base.IdleTime`] = GameManager.Instance.Idle.TimeToIdle;
    // GameContext.resource[`Base.IdleBonus`] = GameManager.Instance.Idle.IdleBonus;
    // GameContext.resource[`Base.IdleOfflineBonus`] = GameManager.Instance.Idle.IdleAndOfflineBonus;
    // GameContext.resource[`Base.IdleSaveClicks`] = GameManager.Instance.Idle.SaveClicks;
    // GameContext.resource[`Base.IdleSaveClicksCD`] = GameManager.Instance.Idle.SaveClickCD;
    // GameContext.resource[`Base.ManaTotal`] = Statistic.ManaSession;
    // GameContext.resource[`Base.ManaAllTime`] = Statistic.ManaAllTime;
    // GameContext.resource[`Base.OfflineProduction`] = GameManager.Instance.OfflineProduction;
    // GameContext.resource[`Base.TotalBuildings`] = Statistic.TotalBuildings;
    // GameContext.resource[`Base.TotalUpgrades`] = Statistic.BoughtUpgrades;
    // GameContext.resource[`Base.PlayedTimeTotal`] = Statistic.TimeTotal;
    // GameContext.resource[`Base.PlayedTimeRealm`] = Statistic.TimeRealm;
    // GameContext.resource[`Base.PlayedTime`] = Statistic.TimeSession;
    // GameContext.resource[`Base.IdleTimeSession`] = Statistic.TimeIdleSession;
    // GameContext.resource[`Base.IdleTimeTotal`] = Statistic.TimeIdleTotal;
    // GameContext.resource[`Base.OfflineTimeTotal`] = Statistic.TimeOfflineTotal;
    // GameContext.resource[`Base.Bats`] = Statistic.Collectables);
    // GameContext.resource[`Base.BatsRealm`] = Statistic.CollectablesRealm);
    // GameContext.resource[`Base.BatsExile`] = Statistic.CollectablessExile);
    // GameContext.resource[`Base.BatsOnly`] = Statistic.BatsExile);
    // GameContext.resource[`Base.LevelReq`] = GameManager.Instance.LevelReduction);
    // GameContext.resource[`VoidMana.Value`] = GameManager.Instance.VoidMana;
    GameContext.resource[`VoidMana.Power`] = GameManager.Instance.VoidManaManager.Power;
    // GameContext.resource[`VoidMana.Decrease`] = GameManager.Instance.VoidManaManager.Decrease;
    // GameContext.resource[`VoidMana.LifeTime`] = GameManager.Instance.VoidManaManager.VoidCore.BonusLifeTime;
    // GameContext.resource[`VoidMana.SpawnPeriod`] = GameManager.Instance.VoidManaManager.VoidCore.TimeInterval;
    // GameContext.resource[`VoidMana.SpawnSpeed`] = GameManager.Instance.VoidManaManager.VoidCore.SpawnSpeed;
    GameContext.resource[`VoidMana.Bonus`] = GameManager.Instance.VoidManaManager.VoidCore.BonusProfit;
    // GameContext.resource[`VoidMana.Total`] = Statistic.VoidManaSession;
    // GameContext.resource[`VoidMana.TotalAllTime`] = Statistic.VoidManaAllTime;
    // GameContext.resource[`VoidMana.Collect`] = Statistic.ClickableCollect;
    // GameContext.resource[`VoidMana.CollectRealm`] = Statistic.ClickableCollectRealm;
    // GameContext.resource[`VoidMana.CollectTotal`] = Statistic.ClickableCollectTotal;
    // GameContext.resource[`VoidMana.BuffChance`] = GameManager.Instance.VoidManaManager.VoidCore.BuffOnCollect;
    // GameContext.resource[`VoidMana.DecreaseSpawnOnCollect`] = GameManager.Instance.VoidManaManager.VoidCore.DecreaseSpawnOnCollect;
    // GameContext.resource[`Click.Profit`] = GameManager.Instance.Orb.click_profit;
    // GameContext.resource[`Click.AutoClickProfit`] = GameManager.Instance.Orb.autoclick_profit;
    // GameContext.resource[`Click.CritChance`] = GameManager.Instance.Orb.crit_chance;
    // GameContext.resource[`Click.CritProfit`] = GameManager.Instance.Orb.crit_profit;
    // GameContext.resource[`Click.PercentPPS`] = GameManager.Instance.Orb.percent_pps;
    // GameContext.resource[`Click.Total`] = Statistic.Clicks;
    // GameContext.resource[`Click.TotalAllTime`] = Statistic.ClicksTotal;
    // GameContext.resource[`Click.AutoTotal`] = Statistic.AutoClicks;
    // GameContext.resource[`Click.AutoTotalRealm`] = Statistic.AutoClicksRealm;
    // GameContext.resource[`Click.AutoTotalAllTime`] = Statistic.AutoClicksTotal;
    // GameContext.resource[`Click.CritRating`] = GameManager.Instance.Orb.critRating.crit_rating;
    // GameContext.resource[`Click.Auto`] = GameManager.Instance.Orb.autoclicks;
    // GameContext.resource[`Click.AutoClicksFromSpell`] = GameManager.Instance.Orb.autoclicksFromSpell;
    // GameContext.resource[`Pet.MaxLevel`] = Statistic.PetMaxLevel;
    // GameContext.resource[`Pet.MaxLevelAllTime`] = Statistic.PetMaxLevelAllTime;
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
    // GameContext.effect['Pow']= EffectFactory.Create(new EffectFactory.effect_action(EffectFactory.Power), new EffectFactory.effect_action(EffectFactory.PowerDelete), new EffectFactory.effect_preview(EffectFactory.PowerPreview)));
    // GameContext.effect['PowA']= EffectFactory.Create(new EffectFactory.effect_action(EffectFactory.PowerA), new EffectFactory.effect_action(EffectFactory.PowerADelete), new EffectFactory.effect_preview(EffectFactory.PowerAPreview)));
    // GameContext.effect['Log10']= EffectFactory.Create(new EffectFactory.effect_action(EffectFactory.Log10), new EffectFactory.effect_action(EffectFactory.Log10Delete), new EffectFactory.effect_preview(EffectFactory.Log10Preview)));
    // GameContext.effect['Ln']= EffectFactory.Create(new EffectFactory.effect_action(EffectFactory.Ln), new EffectFactory.effect_action(EffectFactory.LnDelete), new EffectFactory.effect_preview(EffectFactory.LnPreview)));
    // GameContext.effect['LogA']= EffectFactory.Create(new EffectFactory.effect_action(EffectFactory.LogA), new EffectFactory.effect_action(EffectFactory.LogADelete), new EffectFactory.effect_preview(EffectFactory.LogAPreview)));
    // GameContext.effect['PowIntW']= EffectFactory.Create(new EffectFactory.effect_action(EffectFactory.PowerIntW), new EffectFactory.effect_action(EffectFactory.PowerIntWDelete), new EffectFactory.effect_preview(EffectFactory.PowerIntWPreview)));
    // GameContext.effect['PowW']= EffectFactory.Create(new EffectFactory.effect_action(EffectFactory.PowerW), new EffectFactory.effect_action(EffectFactory.PowerWDelete), new EffectFactory.effect_preview(EffectFactory.PowerWPreview)));
  }
}
