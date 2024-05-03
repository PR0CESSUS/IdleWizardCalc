import { GameContext } from "./GameContext";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";

export class ResourceManager {
  Enchanting: VariableFloat;
  Cap: VariableBignumber;
  map;
  BaseProgress = 0.022;
  EnchantingBonus: VariableComplex;
  EDustIncome: VariableComplex;
  MaxProgress: VariableComplex;
  JarsEff: VariableComplex;
  banks;
  OnUseJars;
  timer;
  OfflineGain = 0.6369;

  // VariableFloat Red => this.map[CraftResource.Red];

  // VariableFloat Green => this.map[CraftResource.Green];

  // VariableFloat Blue => this.map[CraftResource.Blue];

  // VariableFloat Yellow => this.map[CraftResource.Yellow];

  constructor() {
    this.JarsEff = new VariableComplex(1.0);
    this.MaxProgress = new VariableComplex(2000.0);
    this.EnchantingBonus = new VariableComplex(1.0);
    this.EDustIncome = new VariableComplex(1.0);
    this.Cap = new VariableBignumber(100000.0);
    //   this.map = new Dictionary<CraftResource, VariableFloat>();
    //   this.map.push(CraftResource.Red, new VariableFloat(0.0));
    //   this.map.push(CraftResource.Green, new VariableFloat(0.0));
    //   this.map.push(CraftResource.Blue, new VariableFloat(0.0));
    //   this.map.push(CraftResource.Yellow, new VariableFloat(0.0));
    this.Enchanting = new VariableFloat(0.0);
    //   this.map.push(CraftResource.Enchanting, this.Enchanting);
    GameContext.ContextAddResource("Dust.EnchantingBonus", this.EnchantingBonus);
    GameContext.ContextAddResource("Dust.EDustIncome", this.EDustIncome);
    GameContext.ContextAddResource("Items.Jars", this.JarsEff);
    GameContext.ContextAddResource("Items.Bank", this.MaxProgress);
    GameContext.ContextAddResource("Items.Cap", this.Cap);
    //   this.Reset();
  }

  // Reset() {
  //   foreach (ResourceBank bank in this.banks)
  //     bank.ResetJar();
  // }

  // Off() {
  //   foreach (KeyValuePair<CraftResource, VariableFloat> keyValuePair in this.map)
  //     keyValuePair.Value.SetValue(0.0);
  //   foreach (ResourceBank bank in this.banks)
  //     bank.Off();
  // }

  // RealmReset() {
  //   this.Off();
  //   GameManager.Instance.Craft.map[CraftResource.Enchanting].SetValue(0.0);
  // }

  // Update() {
  //   if (!GameManager.Instance.Paragon.ItemsIsAvailable || (double) Time.timeScale == 0.0)
  //     return;
  //   if ((double) this.timer >= 1.0) {
  //     timer = (int) this.timer;
  //     this.update_timers(timer);
  //     this.timer -= (float) timer;
  //   }
  //   this.timer += Time.unscaledDeltaTime;
  // }

  // AddResources(CraftResource key) {
  //   if (!GameManager.Instance.Paragon.ItemsIsAvailable)
  //     return;
  //   num = this.map[key].Value.ToInt();
  //   this.map[key].SetValue(0.0);
  //   GameManager.Instance.Craft.Gathering.AddExp(((double) num / 1000.0));
  //   this.AddResource(key, num);
  //   Action<BigNumber> onUseJars = this.OnUseJars;
  //   if (onUseJars == null)
  //     return;
  //   onUseJars((double) num);
  // }

  // GetDiminish(CraftResource key, value = 0.0) {
  //   BigNumber bigNumber1 = GameManager.Instance.Craft.map[key].Value + this.map[key].Value + (double) value;
  //   if (bigNumber1 <= this.Cap.Value)
  //     1: return;
  //   BigNumber bigNumber2 = (this.Cap.Value / bigNumber1).Sqrt();
  //   return !(bigNumber2 < 0.0099999997764825821) ? bigNumber2.ToFloat() : 0.01;
  // }

  // AddResource(CraftResource key, value) {
  //   GameManager.Instance.Craft.map[key].Change((double) value);
  //   Statistic.ResourcesRealm[(int) (key - 1)].Change((double) value);
  //   Statistic.ResourcesTotal[(int) (key - 1)].Change((double) value);
  //   Statistic.ResourcesCollectedTotal.Change((double) value);
  //   Statistic.ResourcesCollectedRealm.Change((double) value);
  //   Statistic.ResourcesCollected.Change((double) value);
  // }

  // BigNumber GetCraftingDustIncomePure() {return GameManager.Instance.Craft.Gathering.GetBonus() * this.JarsEff.GetInternalValue}

  // BigNumber GetEnchantingDustIncomePure() {return GameManager.Instance.Craft.Crafting.GetBonus() * this.EnchantingBonus.GetInternalValue * this.EDustIncome.Value * 1.3999999761581421}

  // BigNumber GetCraftingDustIncome(value = false) => value ? ((double) this.GetProgress() * 0.636900007724762) : GameManager.Instance.Craft.Gathering.GetBonus() * this.JarsEff.Value;

  // BigNumber GetEnchantingDustIncome() {return GameManager.Instance.Craft.Crafting.GetBonus() * this.EnchantingBonus.Value * this.EDustIncome.Value * 1.3999999761581421}

  // update_timers(k = 1) {
  //   f = (float) (3.1415927410125732 * ((double) Statistic.TimeTotal.ValueInt % 9000.0) / 9000.0);
  //   if (this.Red.Value < (double) this.MaxProgress.ValueFloat)
  //     this.GenerateResource(CraftResource.Red, (float) k * this.GetProgress() * Mathf.Abs(Mathf.Sin(f)) * this.GetDiminish(CraftResource.Red));
  //   if (this.Green.Value < (double) this.MaxProgress.ValueFloat)
  //     this.GenerateResource(CraftResource.Green, (float) k * this.GetProgress() * Mathf.Abs(Mathf.Sin(f + 0.7853982)) * this.GetDiminish(CraftResource.Green));
  //   if (this.Blue.Value < (double) this.MaxProgress.ValueFloat)
  //     this.GenerateResource(CraftResource.Blue, (float) k * this.GetProgress() * Mathf.Abs(Mathf.Sin(f + 1.57079637)) * this.GetDiminish(CraftResource.Blue));
  //   if ((double) this.Yellow.ValueFloat < (double) this.MaxProgress.ValueFloat)
  //     this.GenerateResource(CraftResource.Yellow, (float) k * this.GetProgress() * Mathf.Abs(Mathf.Sin(f + 2.3561945)) * this.GetDiminish(CraftResource.Yellow));
  //   if (!GameManager.Instance.Paragon.EnchantingIsAvailable)
  //     return;
  //   this.Enchanting.Change((((double) k * (double) this.BaseProgress) * this.EnchantingBonus.Value * this.EDustIncome.Value * GameManager.Instance.Craft.Gathering.GetBonus() * 0.2800000011920929).ToFloat());
  //   valueFloat = this.Enchanting.ValueFloat;
  //   if ((double) valueFloat < 1.0)
  //     return;
  //   GameManager.Instance.Craft.GiveEnchantingDust((double) valueFloat);
  //   this.Enchanting.SetValue(0.0);
  // }

  // GenerateResource(CraftResource key, value) {return this.map[key].SetValue(Mathf.Clamp(this.map[key].ValueFloat + value, 0.0, this.MaxProgress.ValueFloat));}

  // GetProgress() {return (float) ((double) this.BaseProgress * (double) GameManager.Instance.Craft.Gathering.GetBonus().ToFloat() * (double) this.JarsEff.Value.ToFloat() * 2.3519999980926514);}

  // GetProgressOffline() {return (float) ((double) this.BaseProgress * (double) GameManager.Instance.Craft.Gathering.GetPureBonus().ToFloat() * (double) this.JarsEff.Value.ToFloat() * 2.3519999980926514 * 0.636900007724762);}

  // List<SaveData.IntIntPair> SaveJars() => new List<SaveData.IntIntPair>()
  // {
  //   new SaveData.IntIntPair(1, (int) this.Red.ValueFloat),
  //   new SaveData.IntIntPair(2, (int) this.Green.ValueFloat),
  //   new SaveData.IntIntPair(3, (int) this.Blue.ValueFloat),
  //   new SaveData.IntIntPair(4, (int) this.Yellow.ValueFloat)
  // };

  // LoadJars(List<SaveData.IntIntPair> jars) {
  //   if (jars == null) {
  //     this.Red.SetValue(0.0);
  //     this.Green.SetValue(0.0);
  //     this.Blue.SetValue(0.0);
  //     this.Yellow.SetValue(0.0);
  //   }
  //   else {
  //     this.Red.SetValue((float) jars.Find((Predicate<SaveData.IntIntPair>) (x => x.ID == 1)).Value);
  //     this.Green.SetValue((float) jars.Find((Predicate<SaveData.IntIntPair>) (x => x.ID == 2)).Value);
  //     this.Blue.SetValue((float) jars.Find((Predicate<SaveData.IntIntPair>) (x => x.ID == 3)).Value);
  //     this.Yellow.SetValue((float) jars.Find((Predicate<SaveData.IntIntPair>) (x => x.ID == 4)).Value);
  //   }
  // }

  // ResourceManager.OfflineData OfflineProgress(sec) {
  //   ResourceManager.OfflineData offlineData = new ResourceManager.OfflineData();
  //   offlineData.red = (int) this.AddOfflineProduction(CraftResource.Red, (float) sec);
  //   offlineData.green = (int) this.AddOfflineProduction(CraftResource.Green, (float) sec);
  //   offlineData.yellow = (int) this.AddOfflineProduction(CraftResource.Yellow, (float) sec);
  //   offlineData.blue = (int) this.AddOfflineProduction(CraftResource.Blue, (float) sec);
  //   BigNumber b = 0.0;
  //   if (GameManager.Instance.Paragon.EnchantingIsAvailable) {
  //     b = (double) (((double) sec * (double) this.BaseProgress) * this.EnchantingBonus.Value * this.EDustIncome.Value * GameManager.Instance.Craft.Gathering.GetPureBonus() * 0.20000000298023224).ToFloat();
  //     if (b > 1.0)
  //       GameManager.Instance.Craft.GiveEnchantingDust(b);
  //   }
  //   offlineData.edust = b;
  //   offlineData: return;
  // }

  // TestOffline(time) {
  //   foreach (KeyValuePair<CraftResource, VariableFloat> keyValuePair in this.map) {
  //     if (keyValuePair.Key != CraftResource.Enchanting) {
  //       valueFloat = keyValuePair.Value.ValueFloat;
  //       realtimeSinceStartup = Time.realtimeSinceStartup;
  //       BigNumber bigNumber = (double) this.AddOfflineProduction(keyValuePair.Key, time);
  //       num = Time.realtimeSinceStartup - realtimeSinceStartup;
  //       Debug.Log((object) ("1: " + num.ToString()));
  //       keyValuePair.Value.SetValue(valueFloat);
  //       BigNumber rawProduction = (double) this.GetRawProduction(keyValuePair.Key, time);
  //       num = Time.realtimeSinceStartup - realtimeSinceStartup;
  //       Debug.Log((object) ("2: " + num.ToString()));
  //       Debug.Log((object) (keyValuePair.Key.ToString() + " " + bigNumber.ToString() + " " + rawProduction.ToString()));
  //       keyValuePair.Value.SetValue(valueFloat);
  //     }
  //   }
  // }

  // GetRawProduction(CraftResource key, t) {
  //   num1 = this.GetProgress() * 0.6369;
  //   rawProduction = 0.0;
  //   while ((double) t > 0.0) {
  //     num2 = (double) t <= 10.0 ? t : 10;
  //     ad = num1 * this.GetDiminish(key) * num2;
  //     t -= num2;
  //     this.map[key].Change(ad);
  //     rawProduction += ad;
  //   }
  //   rawProduction: return;
  // }

  // AddOffline(VariableFloat res, count) {
  //   let num = 0;
  //   if ((double) res.ValueFloat < (double) this.MaxProgress.ValueFloat) {
  //     valueFloat = res.ValueFloat;
  //     if ((double) count + (double) res.ValueFloat < (double) this.MaxProgress.ValueFloat)
  //       res.Change(count);
  //     else
  //       res.SetValue(this.MaxProgress.ValueFloat);
  //     num = Mathf.FloorToInt(res.ValueFloat - valueFloat);
  //   }
  //   num: return;
  // }

  // BigNumber getResourceSumm(CraftResource key) => this.map[key].Value + GameManager.Instance.Craft.map[key].Value;

  // AddOfflineProduction(CraftResource key, time) {
  //   progressOffline = this.GetProgressOffline();
  //   diminish1 = this.GetDiminish(key);
  //   if ((double) diminish1 != 1.0)
  //     return this.addProgress(key, time, progressOffline, diminish1);
  //   num1 = Mathf.Clamp(progressOffline * time, 0.0, this.MaxProgress.ValueFloat - this.map[key].ValueFloat);
  //   if ((double) num1 < 0.0)
  //     num1 = 0.0;
  //   diminish2 = this.GetDiminish(key, num1);
  //   if ((double) diminish2 == 1.0) {
  //     this.GenerateResource(key, num1);
  //     num1: return;
  //   }
  //   num2 = (this.Cap.Value - this.getResourceSumm(key)).ToFloat();
  //   this.GenerateResource(key, num2);
  //   return num2 + this.addProgress(key, time, progressOffline, diminish2);
  // }

  // addProgress(CraftResource key, time, startSpeed, diminish) {
  //   max = Mathf.Abs(this.MaxProgress.ValueFloat - this.map[key].ValueFloat);
  //   if ((double) max < 0.0099999997764825821)
  //     return 0.0;
  //   if ((double) diminish <= 0.0099999997764825821)
  //     return Mathf.Clamp(startSpeed * 0.01 * time, 0.0, max);
  //   diminish1 = diminish - 0.01;
  //   num1 = Mathf.Clamp((this.Cap.Value / ((double) diminish1 * (double) diminish1) - this.getResourceSumm(key)).ToFloat(), 0.0, max);
  //   if ((double) num1 < 0.0)
  //     num1 = 0.0;
  //   num2 = startSpeed * diminish;
  //   num3 = num1 / num2;
  //   if ((double) num3 > (double) time) {
  //     num4 = num2 * time;
  //     this.GenerateResource(key, num4);
  //     num4: return;
  //   }
  //   this.GenerateResource(key, num1);
  //   return num1 + this.addProgress(key, time - num3, startSpeed, diminish1);
  // }
}
