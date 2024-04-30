import { BigNumber } from "./BigNumber";
import { Building } from "./Building";
import { BuildingCreator } from "./BuildingCreator";
import { BuildingVisual } from "./BuildingVisual";
import { DefaultSaveFile } from "./DefaultSaveFile";
import { GameContext } from "./GameContext";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableFloat } from "./VariableFloat";

export class BuildingManager {
  BuildCreator: BuildingCreator;
  Buildings: BuildingVisual[] = Array(9);
  CatalystAddPower: VariableComplex;
  CatalystAddPowerScale: VariableComplex;
  CatalystMultPower: VariableComplex;
  CatalystTempPower: VariableComplex;
  CostReduction: VariableBignumber;
  PPSFromBuildings: VariableComplex;
  CatalystAmount: VariableBignumber;
  CatalystAmountTotal: VariableBignumber;
  TotalGreen: VariableBignumber;
  FreeGreenCatalysts: VariableBignumber;
  TotalBlue: VariableBignumber;
  FreeBlueCatalysts: VariableBignumber;
  TotalRed: VariableBignumber;
  FreeRedCatalysts: VariableBignumber;
  GreenIncome: VariableComplex;
  BlueIncome: VariableComplex;
  RedIncome: VariableComplex;
  AllIncome: VariableComplex;
  AllIncomeOverCap: VariableComplex;
  GreenCapBonus: VariableFloat;
  GreenSave: VariableFloat;
  BlueSave: VariableFloat;
  RedSave: VariableFloat;
  // CatalystTradeButton: GameObject;
  // CatalystTrade: CatalystTrade;
  OnInvestCatalysts;
  // OnGainCatalysts: Action;
  // OnChangeBuildings: Action;
  // list: BuildingListAnimation;
  // special: BuildingVisual;
  //  spaceActive = -15;
  //  spaceInactive = -6.5;
  // currentBuildingUp: IEnumerator;
  timerBuildingUp;

  // Start() {
  //   if (this.CatalystAmount.Value.ToFloat() > 0.0) {
  //     this.EnableTrade();
  //   }
  //   else {
  //     let catalystAmount = this.CatalystAmount;
  //     catalystAmount.OnChange = catalystAmount.OnChange + new Action(this.EnableTrade);
  //   }
  // }

  EnableTrade() {
    //   this.CatalystTradeButton.SetActive(true);
    //   VariableBignumber catalystAmount = this.CatalystAmount;
    //   catalystAmount.OnChange = catalystAmount.OnChange - new Action(this.EnableTrade);
  }

  TurnOnRed() {
    //   foreach (BuildingVisual building in this.Buildings)
    //     building.building.TurnOnRed();
  }

  TurnOffRed() {
    //   foreach (BuildingVisual building in this.Buildings)
    //     building.building.TurnOffRed();
  }

  Init() {
    this.PPSFromBuildings = new VariableComplex(0.0);
    this.CatalystAmount = new VariableBignumber(0.0);
    this.CatalystAmountTotal = new VariableBignumber(0.0);
    this.FreeGreenCatalysts = new VariableBignumber(0.0);
    this.FreeBlueCatalysts = new VariableBignumber(0.0);
    this.FreeRedCatalysts = new VariableBignumber(0.0);
    this.TotalGreen = new VariableBignumber(0.0);
    this.TotalBlue = new VariableBignumber(0.0);
    this.TotalRed = new VariableBignumber(0.0);
    this.CatalystAddPower = new VariableComplex(0.125);
    this.CatalystAddPowerScale = new VariableComplex(1.0);
    this.CatalystMultPower = new VariableComplex(0.04);
    this.CatalystTempPower = new VariableComplex(1.0);
    this.GreenIncome = new VariableComplex(1.0);
    this.BlueIncome = new VariableComplex(1.0);
    this.RedIncome = new VariableComplex(1.0);
    this.AllIncome = new VariableComplex(1.0);
    this.AllIncomeOverCap = new VariableComplex(1.0);
    this.GreenCapBonus = new VariableFloat(1);
    this.GreenSave = new VariableFloat(1);
    this.BlueSave = new VariableFloat(1);
    this.RedSave = new VariableFloat(1);
    this.CostReduction = new VariableBignumber(1.0);
    this.BuildCreator = new BuildingCreator();
    this.BuildCreator.Create();
    //   foreach (BuildingVisual building in this.Buildings) {
    //     building.Init();
    //     VariableComplex catalystTempPower = this.CatalystTempPower;
    //     catalystTempPower.OnChange = catalystTempPower.OnChange + new Action(building.building.RecalculateTemp);
    //   }
    //   let catalystTempPower1 = this.CatalystTempPower;
    //   catalystTempPower1.OnChange = catalystTempPower1.OnChange + new Action(this.special.building.RecalculateTemp);
    GameContext.ContextAddResource("Base.Catalysts", this.CatalystAmount);
    GameContext.ContextAddResource("Base.CatalystsTotal", this.CatalystAmountTotal);
    GameContext.ContextAddResource("Catalysts.GreenBonus", this.CatalystAddPower);
    GameContext.ContextAddResource("Catalysts.GreenScale", this.CatalystAddPowerScale);
    GameContext.ContextAddResource("Catalysts.BlueBonus", this.CatalystMultPower);
    GameContext.ContextAddResource("Catalysts.RedBonus", this.CatalystTempPower);
    GameContext.ContextAddResource("Catalysts.GreenIncome", this.GreenIncome);
    GameContext.ContextAddResource("Catalysts.BlueIncome", this.BlueIncome);
    GameContext.ContextAddResource("Catalysts.RedIncome", this.RedIncome);
    GameContext.ContextAddResource("Catalysts.AllIncome", this.AllIncome);
    GameContext.ContextAddResource("Catalysts.AllIncomeOverCap", this.AllIncomeOverCap);
    GameContext.ContextAddResource("Catalysts.GreenCapBonus", this.GreenCapBonus);
    GameContext.ContextAddResource("Catalysts.GreenSave", this.GreenSave);
    GameContext.ContextAddResource("Catalysts.BlueSave", this.BlueSave);
    GameContext.ContextAddResource("Catalysts.RedSave", this.RedSave);
    //   this.CatalystTrade.Init();
  }

  ResetBuildings() {
    for (let index = 0; index < this.Buildings.length; index++) this.Buildings[index].Restart();
  }

  ResetBuildingsRealm() {
    //   this.TotalGreen.SetValue(0.0);
    //   this.TotalBlue.SetValue(0.0);
    //   this.TotalRed.SetValue(0.0);
    //   for (let index = 0; index < this.Buildings.length; index++) {
    //     this.Buildings[index].Restart();
    //     Building building = this.Buildings[index].building;
    //     building.ACatalyst = 0UL;
    //     building.MCatalyst = 0UL;
    //     building.SetRedCatalysts(0UL);
    //   }
    //   this.FreeGreenCatalysts.SetValue(0.0);
    //   this.FreeBlueCatalysts.SetValue(0.0);
    //   this.FreeRedCatalysts.SetValue(0.0);
    //   this.CatalystAmount.SetValue(0.0);
  }

  SaveRetain() {
    //   if (this.GreenSave.ValueFloat == 0.0 && this.BlueSave.ValueFloat == 0.0 && this.RedSave.ValueFloat == 0.0)
    //     return (Dictionary<int, BuildingManager.RetainSaveData>) null;
    //   Dictionary<int, BuildingManager.RetainSaveData> dictionary = new Dictionary<int, BuildingManager.RetainSaveData>();
    //   for (let index = 0; index < this.Buildings.length; index++) {
    //     BuildingManager.RetainSaveData retainSaveData = new BuildingManager.RetainSaveData();
    //     Building building = this.Buildings[index].building;
    //     if (building.Tier <= 8) {
    //       retainSaveData.g = this.getSavedCatas(building.ACatalyst, this.GreenSave.ValueFloat);
    //       retainSaveData.b = this.getSavedCatas(building.MCatalyst, this.BlueSave.ValueFloat);
    //       retainSaveData.r = this.getSavedCatas(building.RCatalyst, this.RedSave.ValueFloat);
    //       if (retainSaveData.g != 0UL || retainSaveData.b != 0UL || retainSaveData.r != 0UL)
    //         dictionary.push(building.Tier, retainSaveData);
    //     }
    //   }
    //    return dictionary;
  }

  LoadRetain(save: DefaultSaveFile) {
    if (save == null) return;

    for (let index = 0; index < save.BuildingLevels.length; index++) {
      //   const keyValuePair = save.BuildingLevels[index];
      // let building = this.GetBuilding(keyValuePair.Key);
      // building.ACatalyst = keyValuePair.Value.g;
      // building.MCatalyst = keyValuePair.Value.b;
      // building.SetRedCatalysts(keyValuePair.Value.r);
      // this.TotalGreen.Change(this.CatalystTrade.GetGreenInvest().GetSumm(building.ACatalyst) + this.GetSumm(building.ACatalyst));
      // this.TotalBlue.Change(this.CatalystTrade.GetBlueInvest().GetSumm(building.MCatalyst) + this.GetSumm(building.MCatalyst));
      // this.TotalRed.Change(this.CatalystTrade.GetRedInvest().GetSumm(building.RCatalyst) + this.GetSumm(building.RCatalyst));
    }

    this.CatalystAmount.SetValue(this.TotalGreen.Value.ToFloat() + this.TotalBlue.Value.ToFloat() + this.TotalRed.Value.ToFloat());
  }

  ugetSavedCatas(current, savePart) {
    return savePart > 1.0 ? Math.floor(current * (savePart - 1)) : 0;
  }

  HardReset() {
    this.ResetBuildingsRealm();
    this.CatalystAmountTotal.SetValue(0.0);
  }

  GetBuildingProfit() {
    //   BigNumber buildingProfit = 0.0;
    //   foreach (BuildingVisual building1 in this.Buildings) {
    //     if ((UnityEngine.Object) building1 == (UnityEngine.Object) null || building1.building == null) {
    //       Debug.LogError((object) "OUT of range!");
    //       buildingProfit: return;
    //     }
    //     Building building2 = building1.building;
    //     if (building2.Level.ValueInt + building2.TemporalyLevel.ValueInt > 0) {
    //       building2.CalculatePps();
    //       buildingProfit += building2.Pps.Value;
    //     }
    //   }
    //    return buildingProfit;
  }

  GetBuilding(tier) {
    return this.Buildings.filter((x) => x.Tier == tier)[0]?.building;
  }

  GiveGreen(value: BigNumber) {
    //   this.FreeGreenCatalysts.Change(value);
    //   this.TotalGreen.Change(value);
    //   this.CatalystAmount.Change(value);
    //   this.CatalystAmountTotal.Change(value);
    //   Action onGainCatalysts = this.OnGainCatalysts;
    //   if (onGainCatalysts == null)
    //     return;
    //   onGainCatalysts();
  }

  GiveRed(value: BigNumber) {
    //   this.FreeRedCatalysts.Change(value);
    //   this.TotalRed.Change(value);
    //   this.CatalystAmount.Change(value);
    //   this.CatalystAmountTotal.Change(value);
    //   Action onGainCatalysts = this.OnGainCatalysts;
    //   if (onGainCatalysts == null)
    //     return;
    //   onGainCatalysts();
  }

  GiveBlue(value: BigNumber) {
    //   this.FreeBlueCatalysts.Change(value);
    //   this.TotalBlue.Change(value);
    //   this.CatalystAmount.Change(value);
    //   this.CatalystAmountTotal.Change(value);
    //   Action onGainCatalysts = this.OnGainCatalysts;
    //   if (onGainCatalysts == null)
    //     return;
    //   onGainCatalysts();
  }

  uGetGreenIncome(tier) {
    //   BigNumber bigNumber = (this.Buildings.Find((Predicate<BuildingVisual>) (x => x.Tier == tier)).building.ACatalyst + 1UL) * this.GreenIncome.Value * this.AllIncome.Value;
    //   bigNumber = bigNumber.ToUlong() * this.AllIncomeOverCap.Value;
    //   return bigNumber.ToUlong();
  }

  uGetBlueIncome(tier) {
    //   BigNumber bigNumber = (this.Buildings.Find((Predicate<BuildingVisual>) (x => x.Tier == tier)).building.MCatalyst + 1UL) * this.BlueIncome.Value * this.AllIncome.Value;
    //   bigNumber = bigNumber.ToUlong() * this.AllIncomeOverCap.Value;
    //   return bigNumber.ToUlong();
  }

  uGetRedIncome(tier) {
    //   BigNumber bigNumber = (this.Buildings.Find((Predicate<BuildingVisual>) (x => x.Tier == tier)).building.RCatalyst + 1UL) * this.RedIncome.Value * this.AllIncome.Value;
    //   bigNumber = bigNumber.ToUlong() * this.AllIncomeOverCap.Value;
    //   return bigNumber.ToUlong();
  }

  AddACatalysts(tier, uamount) {
    //   this.GetBuilding(tier).ACatalyst += amount;
    //   if (this.OnInvestCatalysts == null)
    //     return;
    //   this.OnInvestCatalysts(amount);
  }

  AddMCatalysts(tier, uamount) {
    //   this.GetBuilding(tier).MCatalyst += amount;
    //   if (this.OnInvestCatalysts == null)
    //     return;
    //   this.OnInvestCatalysts(amount);
  }

  AddRCatalysts(tier, uamount) {
    //   Building building = this.GetBuilding(tier);
    //   building.SetRedCatalysts(building.RCatalyst + amount);
    //   if (this.OnInvestCatalysts == null)
    //     return;
    //   this.OnInvestCatalysts(amount);
  }

  CalculateCatalysts() {
    // return this.CatalystAmount.SetValue(this.TotalGreen.Value + this.TotalRed.Value + this.TotalBlue.Value);
  }

  uGetSumm(n) {
    return (n * (n + 1)) / 2;
  }

  SetACatalysts(tier, amount) {
    return (this.GetBuilding(tier).ACatalyst = amount);
  }

  SetMCatalysts(tier, amount) {
    return (this.GetBuilding(tier).MCatalyst = amount);
  }

  SetRCatalysts(tier, amount) {
    return this.GetBuilding(tier).LoadRedCatalysts(amount);
  }

  // BuildingManager.CatalystSave SaveCatalysts() {
  //   BuildingManager.CatalystSave catalystSave = new BuildingManager.CatalystSave();
  //   catalystSave.Catalysts = new List<BuildingManager.CatalystSaveFormat>();
  //   for (let index = 0; index < this.Buildings.length; index++) {
  //     Building building = this.Buildings[index].building;
  //     if (building.Tier <= 8 && (building.ACatalyst != 0UL || building.MCatalyst != 0UL || building.RCatalyst != 0UL))
  //       catalystSave.Catalysts.push(new BuildingManager.CatalystSaveFormat(building.Tier, building.ACatalyst, building.MCatalyst, building.RCatalyst));
  //   }
  //   catalystSave.fA = this.FreeGreenCatalysts.Value;
  //   catalystSave.tA = this.TotalGreen.Value;
  //   catalystSave.fM = this.FreeBlueCatalysts.Value;
  //   catalystSave.tM = this.TotalBlue.Value;
  //   catalystSave.fR = this.FreeRedCatalysts.Value;
  //   catalystSave.tR = this.TotalRed.Value;
  //   catalystSave.Total = this.CatalystAmountTotal.Value;
  //   catalystSave: return;
  // }

  LoadCatalysts(save) {
    //   for (let tier = 1; tier < this.Buildings.length + 1; tier++) {
    //     this.SetACatalysts(tier, 0UL);
    //     this.SetMCatalysts(tier, 0UL);
    //     this.SetRCatalysts(tier, 0UL);
    //   }
    //   this.FreeGreenCatalysts.SetValue(0.0);
    //   this.FreeBlueCatalysts.SetValue(0.0);
    //   this.FreeRedCatalysts.SetValue(0.0);
    //   this.TotalGreen.SetValue(0.0);
    //   this.TotalBlue.SetValue(0.0);
    //   this.TotalRed.SetValue(0.0);
    //   this.CatalystAmount.SetValue(0.0);
    //   this.CatalystAmountTotal.SetValue(0.0);
    //   if (save == null)
    //     return;
    //   for (let index = 0; index < save.Catalysts.length; index++) {
    //     BuildingManager.CatalystSaveFormat catalyst = save.Catalysts[index];
    //     if (catalyst.t <= 8) {
    //       this.SetACatalysts(catalyst.t, catalyst.a);
    //       this.SetMCatalysts(catalyst.t, catalyst.m);
    //       this.SetRCatalysts(catalyst.t, catalyst.r);
    //     }
    //   }
    //   this.FreeGreenCatalysts.SetValue(save.fA);
    //   this.FreeBlueCatalysts.SetValue(save.fM);
    //   this.FreeRedCatalysts.SetValue(save.fR);
    //   this.TotalGreen.SetValue(save.tA);
    //   this.TotalBlue.SetValue(save.tM);
    //   this.TotalRed.SetValue(save.tR);
    //   this.CalculateCatalysts();
    //   this.CatalystAmountTotal.SetValue(save.Total);
  }

  ResetUpBuilding() {
    //   this.timerBuildingUp = 0.0;
    //   if (this.currentBuildingUp == null)
    //     return;
    //   this.StopCoroutine(this.currentBuildingUp);
    //   this.currentBuildingUp = (IEnumerator) null;
  }

  UpBuilding(time, recalc, list, total_mana_mult, Fail) {
    //   if (list == null) {
    //     Debug.LogError((object) "Targets for Building auto-buy is NULL");
    //   }
    //   else {
    //     if (this.currentBuildingUp != null)
    //       return;
    //     this.timerBuildingUp = time;
    //     list = list.FindAll((Predicate<BuildingVisual>) (x => x.building.Level.ValueInt > 0));
    //     if (total_mana_mult != 0.0) {
    //       BigNumber max_building_cost = Statistic.ManaRealm.Value * total_mana_mult;
    //       list = this.FindAllForBuildingUp(list, (Dictionary<int, int>) null, max_building_cost);
    //     }
    //     if (list.length == 0) {
    //       if (Fail == null)
    //         return;
    //       Fail();
    //     }
    //     else {
    //       this.currentBuildingUp = this.up_buildings_co(recalc, list, total_mana_mult, Fail);
    //       this.StartCoroutine(this.currentBuildingUp);
    //     }
    //   }
  }

  EnableNine() {
    //   this.Buildings.push(this.special);
    //   this.list.UpdateSpacing(-15);
    //   this.special.ChangeAvalible(true);
    //   GameManager.Instance.Gilding.Buildings.Map[BuildingGilding.SourceType.Demiurge].SelectBuilding(this.special.building, false);
    //   Action onChangeBuildings = this.OnChangeBuildings;
    //   if (onChangeBuildings == null)
    //     return;
    //   onChangeBuildings();
  }

  DisableNine() {
    //   this.Buildings.Remove(this.special);
    //   this.special.ChangeAvalible(false);
    //   Statistic.TotalBuildings.Change(-this.special.building.Level.ValueInt);
    //   this.special.building.Restart();
    //   this.list.UpdateSpacing(-6.5);
    //   GameManager.Instance.Gilding.Buildings.Map[BuildingGilding.SourceType.Demiurge].TurnOff();
    //   Action onChangeBuildings = this.OnChangeBuildings;
    //   if (onChangeBuildings == null)
    //     return;
    //   onChangeBuildings();
  }

  GetSpacing() {
    return this.Buildings.length > 8 ? -15 : -6.5;
  }

  // IEnumerator up_buildings_co(
  //   Func<BigNumber, int> recalc,
  //   List<BuildingVisual> list,
  //   BigNumber total_mana_mult,
  //   Action Fail)
  // {
  //   success = true;
  //   BigNumber max_building_cost = 0.0;
  //   Dictionary<int, int> additionalLevels = new Dictionary<int, int>();
  //   period = recalc == null ? 1 : recalc(Statistic.TotalBuildings.Value);
  //   while (this.timerBuildingUp >= period & success) {
  //     if (total_mana_mult != 0.0)
  //       max_building_cost = Statistic.ManaRealm.Value * total_mana_mult;
  //     for (let index = 0; index < 1000 & success && this.timerBuildingUp >= period; index++) {
  //       if (total_mana_mult != 0.0)
  //         list = this.FindAllForBuildingUp(list, additionalLevels, max_building_cost);
  //       if (list.length > 0) {
  //         Building building = list[UnityEngine.Random.Range(0, list.length)].building;
  //         if (additionalLevels.ContainsKey(building.Tier))
  //           additionalLevels[building.Tier]++;
  //         else
  //           additionalLevels.push(building.Tier, 1);
  //         success = true;
  //       }
  //       else {
  //         if (Fail != null)
  //           Fail();
  //         success = false;
  //       }
  //       this.timerBuildingUp -= period;
  //       if (recalc != null)
  //         period = recalc(Statistic.TotalBuildings.Value + index);
  //     }
  //     if (additionalLevels.length > 0) {
  //       let ad = 0;
  //       foreach (KeyValuePair<int, int> keyValuePair in additionalLevels) {
  //         this.GetBuilding(keyValuePair.Key).Level.Change(keyValuePair.Value);
  //         ad += keyValuePair.Value;
  //       }
  //       Statistic.TotalBuildings.Change(ad);
  //       additionalLevels = new Dictionary<int, int>();
  //     }
  //     yield return (object) null;
  //   }
  //   this.timerBuildingUp = 0.0;
  //   this.currentBuildingUp = (IEnumerator) null;
  // }

  GetCost(building: Building, additionalLevels = null) {
    //   let additionalLevels1 = 0;
    //   if (additionalLevels != null && additionalLevels.ContainsKey(building.Tier))
    //     additionalLevels1 = additionalLevels[building.Tier];
    //   return building.GetCost(additionalLevels1);
  }

  // FindAllForBuildingUp(
  //   List<BuildingVisual> buildings,
  //   Dictionary<int, int> additionalLevels,
  //   BigNumber max_building_cost)
  // {
  //   allForBuildingUp: BuildingVisual[] = [];
  //   for (let index = 0; index < buildings.length; index++) {
  //     BuildingVisual building = buildings[index];
  //     if (this.GetCost(building.building, additionalLevels) <= max_building_cost)
  //       allForBuildingUp.push(building);
  //   }
  //   return allForBuildingUp;
  // }

  // export class RetainSaveData {
  //   ug;
  //   ub;
  //   ur;
  // }

  // struct CatalystSaveFormat {
  //   t;
  //   ua;
  //   um;
  //   ur;

  //   CatalystSaveFormat(tier, uaCat, umCat, urCat) {
  //     this.t = tier;
  //     this.a = aCat;
  //     this.m = mCat;
  //     this.r = rCat;
  //   }
  // }

  // export class CatalystSave {
  //   List<BuildingManager.CatalystSaveFormat> Catalysts;
  //   Total: BigNumber;
  //   tA: BigNumber;
  //   fA: BigNumber;
  //   tM: BigNumber;
  //   fM: BigNumber;
  //   tR: BigNumber;
  //   fR: BigNumber;
  // }
}
