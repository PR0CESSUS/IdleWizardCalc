import { GameManager } from "./GameManager";
import { GlobalData } from "./GlobalData";
import { Upgrade } from "./Upgrade";

export class UpgradeManager {
  // content: Transform;

  UpgradeList: Upgrade[];
  AvailableUpgradeList: Upgrade[];
  ActiveUpgradeList: Upgrade[];
  // available: Button;
  // activated: Button;
  // upgradesScroll: ScrollRect;
  UpgradesChecksList: Upgrade[];
  SpellUnlocks;
  // update_conditional_upgrade: Action;
  // Action<Upgrade> on_buy_upgrade;
  // Action<Upgrade> on_remove_upgrade;
  timer;
  d_time = 0.25;

  Init() {
    this.UpgradeList = [];
    this.AvailableUpgradeList = [];
    this.ActiveUpgradeList = [];
    this.UpgradesChecksList = [];
    this.CreateAll();
    //   GameManager.Instance.CurrentHero.OnChange += new Action(this.filterUpgrades);
  }
  InitUpgrade() {
    const test = ["VoidMana.Bonus", "Spell.EvocationEfficiency", "VoidMana.Power", "VoidMana.LifeTime"];
    for (let index = 0; index < this.UpgradeList.length; index++) {
      const upgrade = this.UpgradeList[index];

      if (GameManager.Instance.SaveFile.Upgrades.includes(upgrade.ID) && test.includes(upgrade.Data.V)) upgrade.Apply();
    }
  }
  // RemoveUpgrade( u: Upgrade) {
  //   u.Delete();
  //   u.CheckAvailable();
  // }

  // Restart(isLoading = false) {
  //   this.UpgradesChecksList.Clear();
  //   this.AvailableUpgradeList = new List<Upgrade>();
  //   for (let index = 0; index < this.ActiveUpgradeList.length; index++) {
  //     this.ActiveUpgradeList[index].Delete();
  //     this.ActiveUpgradeList[index].Available = false;
  //   }
  //   this.ActiveUpgradeList = new List<Upgrade>();
  //   for (let index = 0; index < this.UpgradeList.length; index++)
  //     this.UpgradeList[index].CheckAvailable();
  //   if (isLoading)
  //     return;
  //   this.filterUpgrades();
  //   if (!this.viewControler.inited)
  //     return;
  //   this.CheckList();
  //   this.UpdateScroll();
  //   this.UpdateActiveScroll();
  // }

  // PostLoad() {
  //   for (let index = 0; index < this.UpgradeList.length; index++)
  //     this.UpgradeList[index].CheckAvailable();
  //   this.filterUpgrades();
  //   if (!this.viewControler.inited)
  //     return;
  //   this.CheckList();
  //   this.UpdateScroll();
  //   this.UpdateActiveScroll();
  // }

  filterUpgrades() {
    //   this.UpgradesChecksList = new LinkedList<Upgrade>((IEnumerable<Upgrade>) this.UpgradeList.FindAll((Predicate<Upgrade>) (x => x.CheckClassAccess())));
    //   let num = 0;
    //   foreach (activeUpgrade: Upgrade in this.ActiveUpgradeList) {
    //     num++;
    //     this.UpgradesChecksList.Remove(activeUpgrade);
    //   }
    //   foreach (spellUnlock: Upgrade in this.SpellUnlocks) {
    //     if (spellUnlock.CheckClassExactly() && !spellUnlock.applied) {
    //       if (!this.AvailableUpgradeList.Contains(spellUnlock))
    //         this.AddAvailable(spellUnlock);
    //     }
    //     else if (this.AvailableUpgradeList.Contains(spellUnlock))
    //       this.AvailableUpgradeList.Remove(spellUnlock);
    //   }
    //   foreach (availableUpgrade: Upgrade in this.AvailableUpgradeList) {
    //     num++;
    //     this.UpgradesChecksList.Remove(availableUpgrade);
    //   }
  }

  // BuyAll() {
  //   count1 = this.AvailableUpgradeList.length;
  //   let count2 = 0;
  //   for (let index = 0; index < count1 && this.AvailableUpgradeList[index].Cost <= GameManager.Instance.Mana.Value; index++) {
  //     this.AvailableUpgradeList[index].Buy(false);
  //     count2++;
  //   }
  //   if (count2 > 0) {
  //     this.AvailableUpgradeList.RemoveRange(0, count2);
  //     this.UpdateScroll();
  //   }
  //   this.tips.transform.parent.gameObject.SetActive(false);
  // }

  // Remove(upgrade: Upgrade) {
  //   this.RemoveUpgrade(upgrade);
  //   this.ActiveUpgradeList.Remove(upgrade);
  //   this.UpgradesChecksList.AddFirst(upgrade);
  //   this.UpdateActiveScroll();
  //   Statistic.BoughtUpgrades.Change(-1);
  //   if (this.on_remove_upgrade == null)
  //     return;
  //   this.on_remove_upgrade(upgrade);
  // }

  // CanBuy() {
  //   flag = this.AvailableUpgradeList.length > 0;
  //   if (flag)
  //     flag = this.AvailableUpgradeList[0].Cost <= GameManager.Instance.Mana.Value;
  //   flag: return;
  // }

  // Update() {
  //   if (this.timer >= this.d_time) {
  //     this.timer -= this.d_time;
  //     this.UpdateUpgrade();
  //     this.CheckList();
  //   }
  //   this.timer += Time.deltaTime;
  // }

  CreateAll() {
    for (let index = 0; index < GlobalData.Upgrades.length; index++) {
      const upgrade = GlobalData.Upgrades[index];

      if (upgrade.Effect == "") upgrade.Effect = "Linear";
      this.UpgradeList.push(new Upgrade(upgrade));
    }
    //   this.UpgradeList.Sort(new Comparison<Upgrade>(this.CompareItemByCost));
    //   this.SpellUnlocks = this.UpgradeList.FindAll((Predicate<Upgrade>) (x => x.isSpell));
  }

  // CheckList() {
  //   bigNumber: BigNumber = Statistic.ManaSession.Value * (BigNumber) 100.0;
  //   let num = 0;
  //   LinkedList<Upgrade>.enumerator: Enumerator = this.UpgradesChecksList.GetEnumerator();
  //   upgradeList: Upgrade[] = [];
  //   while (enumerator.MoveNext()) {
  //     if (enumerator.Current.Available) {
  //       if (enumerator.Current.Cost < bigNumber) {
  //         num++;
  //         upgradeList.push(enumerator.Current);
  //         this.AddAvailable(enumerator.Current);
  //       }
  //       else
  //         break;
  //     }
  //   }
  //   if (num == 0 && this.AvailableUpgradeList.length == 0) {
  //     num++;
  //     Upgrade u = this.UpgradesChecksList.FirstOrDefault<Upgrade>((Func<Upgrade, bool>) (x => x.Available));
  //     if (u != null) {
  //       upgradeList.push(u);
  //       this.AddAvailable(u);
  //     }
  //   }
  //   if (num <= 0)
  //     return;
  //   for (let index = 0; index < upgradeList.length; index++)
  //     this.UpgradesChecksList.Remove(upgradeList[index]);
  //   this.UpdateScroll();
  //   if (!this.activated.interactable)
  //     return;
  //   this.UpdateActiveScroll();
  // }

  // UpdateScroll() {return this.viewControler.SetData(this.AvailableUpgradeList);}

  // UpdateActiveScroll() {return this.viewActivatedControler.UpdateData();}

  // UpdateUpgrade() {
  //   if (this.update_conditional_upgrade == null)
  //     return;
  //   this.update_conditional_upgrade();
  // }

  // CompareItemByCost(Upgrade x, Upgrade y) {
  //   if (x.CostBase == y.CostBase)
  //     0: return;
  //   return x.CostBase > y.CostBase ? 1 : -1;
  // }

  // create: UpgradeVisual(up: Upgrade) => UnityEngine.Object.Instantiate<UpgradeVisual>(this.prefab);

  // AddAvailable(Upgrade u) {
  //   count = this.AvailableUpgradeList.length;
  //   for (let index = 0; index < count; index++) {
  //     if (this.CompareItemByCost(u, this.AvailableUpgradeList[index]) <= 0) {
  //       this.AvailableUpgradeList.Insert(index, u);
  //       return;
  //     }
  //   }
  //   this.AvailableUpgradeList.push(u);
  // }

  // OpenActivatedUpgrades() {
  //   this.viewControler.gameObject.SetActive(false);
  //   this.available.interactable = true;
  //   this.activated.interactable = false;
  //   this.viewActivatedControler.gameObject.SetActive(true);
  // }

  // CloseActivatedUpgrades() {
  //   this.viewActivatedControler.gameObject.SetActive(false);
  //   this.available.interactable = false;
  //   this.activated.interactable = true;
  //   this.viewControler.gameObject.SetActive(true);
  // }
}
