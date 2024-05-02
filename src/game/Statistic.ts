import { GameManager } from "./GameManager";
import { VariableBignumber } from "./VariableBignumber";
import { VariableInt } from "./VariableInt";
import { VariableLong } from "./VariableLong";

export class Statistic {
  // const YEAR = 3.1536E+07;
  // const TEN_YEARS = 3.1536E+08;
  public static ManaAllTime = new VariableBignumber(0.0);
  public static ManaRealm = new VariableBignumber(0.0);
  public static ManaSession = new VariableBignumber(0.0);
  public static VoidManaAllTime = new VariableBignumber(0.0);
  public static VoidManaRealm = new VariableBignumber(0.0);
  public static VoidManaSession = new VariableBignumber(0.0);
  public static MaxVoidManaSession = new VariableBignumber(0.0);
  public static ClicksTotal = new VariableBignumber(0.0);
  public static ClicksRealm = new VariableBignumber(0.0);
  public static Clicks = new VariableBignumber(0.0);
  public static AutoClicksTotal = new VariableBignumber(0.0);
  public static AutoClicksRealm = new VariableBignumber(0.0);
  public static AutoClicks = new VariableBignumber(0.0);
  public static CastSpellTotal = new VariableBignumber(0.0);
  public static CastSpellRealm = new VariableBignumber(0.0);
  public static CastSpell = new VariableBignumber(0.0);
  public static ShardsTotal = new VariableBignumber(0.0);
  public static ShardsRealm = new VariableBignumber(0.0);
  public static ShardsSession = new VariableBignumber(0.0);
  public static ClickableCollectTotal = new VariableLong(0);
  public static ClickableCollectRealm = new VariableLong(0);
  public static ClickableCollect = new VariableLong(0);
  public static TimeTotal = new VariableLong(0);
  public static TimeRealm = new VariableLong(0);
  public static TimeSession = new VariableLong(0);
  public static SkipedTimeTotal = new VariableBignumber(0.0);
  public static SkipedTimeRealm = new VariableBignumber(0.0);
  public static SkipedTimeSession = new VariableBignumber(0.0);
  public static TimeIdleTotal = new VariableLong(0);
  public static TimeIdleRealm = new VariableLong(0);
  public static TimeIdleSession = new VariableLong(0);
  public static TimeOfflineTotal = new VariableLong(0);
  public static TimeOfflineRealm = new VariableLong(0);
  public static TimeOfflineSession = new VariableLong(0);
  public static PetMaxLevel = new VariableInt(0);
  public static PetMaxLevelAllTime = new VariableInt(0);
  public static HeroMaxLevelAllTime = new VariableInt(0);
  public static ApprenticeMaxLevelRealm = new VariableInt(0);
  public static BoughtUpgrades = new VariableInt(0);
  public static TotalBuildings = new VariableInt(0);
  public static Ascends = new VariableInt(0);
  public static AscendsInRealm = new VariableInt(0);
  public static CTTotal = new VariableBignumber(0.0);
  public static HCTotal = new VariableBignumber(0.0);
  public static LSTotal = new VariableBignumber(0.0);
  public static ClassTime = [];
  public static ResourcesCollected = new VariableBignumber(0.0);
  public static ResourcesCollectedRealm = new VariableBignumber(0.0);
  public static ResourcesCollectedTotal = new VariableBignumber(0.0);
  public static EnchantingDustExile = new VariableBignumber(0.0);
  public static ResourcesRealm = [];
  public static ResourcesTotal = [];
  public static UnlockedItems = new VariableInt(0);
  public static UnlockedByTiers = [];
  public static BatsExile = new VariableInt(0);
  public static CollectablessExile = new VariableInt(0);
  public static CollectablesRealm = new VariableInt(0);
  public static Collectables = new VariableInt(0);

  public static Init() {
    Statistic.CastSpell.SetValue(GameManager.Instance.SaveFile.CastSpell);
    Statistic.ShardsRealm.SetValue(GameManager.Instance.SaveFile.ShardsRealm);
    Statistic.ShardsSession.SetValue(GameManager.Instance.SaveFile.ShardsSession);
    Statistic.ShardsTotal.SetValue(GameManager.Instance.SaveFile.ShardsTotal);
    Statistic.ClickableCollect.SetValue(GameManager.Instance.SaveFile.ClickableCollect);
    Statistic.TotalBuildings.SetValue(GameManager.Instance.SaveFile.TotalBuildings);
    Statistic.UnlockedItems.SetValue(GameManager.Instance.SaveFile.Craft.Items.length);
    Statistic.CastSpellRealm.SetValue(GameManager.Instance.SaveFile.AccumCasts);
    // Statistic.A.SetValue(GameManager.Instance.SaveFile.AccumCasts)
  }
}
