import { BigNumber } from "./BigNumber";
import { Building } from "./Building";

export class BuildingVisual {
  Tier: number;
  building: Building;
  // NameLabel: TextMeshProUGUI;
  // Icon: Image;
  // sprite: Image;
  // button: Button;
  // level_label: TextMeshProUGUI;
  // cost_label: TextMeshProUGUI;
  // profit_label: TextMeshProUGUI;
  // profit_part_label: TextMeshProUGUI;
  // tip_label: TextMeshProUGUI;
  PartOfProfit;
  count_to_buy;
  prev_pack = -1;
  cost = new BigNumber(0);
  tipIsActive;
  timer;
  subscribe;

  constructor(tier: number) {
    this.Tier = tier;
    this.building = new Building();
  }

  Init() {
    //   let profit = GameManager.Instance.Profit;
    //   profit.OnChange = profit.OnChange + new Action(this.RecalculatePPS);
    // let baseCost = this.building.base_cost;
    //   baseCost.OnChange = baseCost.OnChange + new Action(this.Recalculate);
    //   VariableComplex ppsPerBuilding = this.building.pps_per_building;
    //   ppsPerBuilding.OnChange = ppsPerBuilding.OnChange + new Action(this.Recalculate);
    //   VariableInt temporalyLevel = this.building.TemporalyLevel;
    //   temporalyLevel.OnChange = temporalyLevel.OnChange + new Action(this.Recalculate);
  }

  Restart() {
    //   this.update_text();
    //   this.NameLabel.text = this.building.Name;
    //   this.building.Restart();
    //   this.ChangeAvalible(true);
  }

  LateUpdate() {
    //   if (Time.timeScale == 0.0)
    //     return;
    //   this.timer += Time.deltaTime / Time.timeScale;
    //   if (this.timer <= 0.25)
    //     return;
    //   this.update_building();
    //   if (this.tipIsActive)
    //     this.update_tips();
    //   this.timer = 0.0;
  }

  enable() {
    //   this.button.gameObject.SetActive(true);
    //   if (!this.subscribe)
    //     return;
    //   this.subscribe = false;
    //   VariableBignumber mana = GameManager.Instance.Mana;
    //   mana.OnChange = mana.OnChange - new Action(this.CheckEnable);
  }

  ChangeAvalible(v) {
    //   this.building.Available = v;
    //   if (v) {
    //     if (this.subscribe)
    //       return;
    //     this.subscribe = true;
    //     VariableBignumber mana = GameManager.Instance.Mana;
    //     mana.OnChange = mana.OnChange + new Action(this.CheckEnable);
    //     this.button.interactable = false;
    //     this.gameObject.SetActive(false);
    //   }
    //   else {
    //     if (this.subscribe) {
    //       this.subscribe = false;
    //       VariableBignumber mana = GameManager.Instance.Mana;
    //       mana.OnChange = mana.OnChange - new Action(this.CheckEnable);
    //     }
    //     this.gameObject.SetActive(false);
    //   }
  }

  CheckEnable() {
    //   if (!this.building.Available)
    //     return;
    //   if (this.building.Tier > 1) {
    //     if (Statistic.ManaSession.Value >= this.building.CostBase || this.building.Level.ValueInt + this.building.TemporalyLevel.ValueInt > 0)
    //       this.enable();
    //     else
    //       this.button.gameObject.SetActive(false);
    //   }
    //   else
    //     this.enable();
  }

  IsAvailable() {
    // return this.building.Available;
  }

  Buy() {
    // this.Recalculate();
    // if (!(this.cost <= GameManager.Instance.Mana.Value)) return;
    // this.building.Buy(new Action<BigNumber>(GameManager.Instance.ManaChange));
    // this.Recalculate();
  }

  RecalculatePPS() {
    // return this.building.CalculatePps();
  }

  Recalculate() {
    //   this.RecalculatePPS();
    //   this.building.CalculateCost(GameManager.Instance.BuyPack);
    //   this.count_to_buy = this.building.levelsToBuy;
    //   this.cost = this.building.Cost;
  }

  updatePartOfProfit() {
    //   num;
    //   if (BigNumber.Sign(GameManager.Instance.PPS.Value) > 0.0) {
    //     this.building.CalculateCost();
    //     num = (this.building.Pps.Value / GameManager.Instance.PPS.Value).ToDouble();
    //   }
    //   else
    //     num = 0.0;
    //   if (num <= 1.0)
    //     this.PartOfProfit = num;
    //   if (this.PartOfProfit != 0.0)
    //     this.profit_part_label.text = (this.PartOfProfit * 100.0).ToString("0.00", (IFormatProvider) CultureInfo.InvariantCulture) + "%";
    //   else
    //     this.profit_part_label.text = string.Empty;
  }

  update_building() {
    //   this.building.CalculateCost(GameManager.Instance.BuyPack);
    //   this.count_to_buy = this.building.levelsToBuy;
    //   this.cost = this.building.Cost;
    //   this.button.interactable = this.cost <= GameManager.Instance.Mana.Value && this.count_to_buy > 0;
    //   this.update_text();
  }

  CheckCost() {
    //   flag = false;
    //   if (this.prev_pack != GameManager.Instance.BuyPack) {
    //     this.building.CalculateCost(GameManager.Instance.BuyPack);
    //     this.count_to_buy = this.building.levelsToBuy;
    //     this.cost = this.building.Cost;
    //     this.prev_pack = GameManager.Instance.BuyPack;
    //     flag = true;
    //   }
    //   this.button.interactable = this.cost <= GameManager.Instance.Mana.Value && this.count_to_buy > 0;
    //   if (!flag)
    //     return;
    //   this.update_text();
  }

  // isAvailableToBuy() {return this.cost <= GameManager.Instance.Mana.Value;}
}
