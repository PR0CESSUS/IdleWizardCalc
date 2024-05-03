import { GameContext } from "./GameContext";
import { VariableBignumber } from "./VariableBignumber";

export class GildingManager {
  Resource: VariableBignumber;
  ResourceTotal: VariableBignumber;
  SplinterIncome: VariableBignumber;
  Trial: VariableBignumber;
  // Void: VoidGilding;
  // Catas: CatalystGilding;
  // Buildings: BuildingGilding;
  // Spells: SpellGilding;
  // BuildingWindow: BuildingGildingWindow;
  // SpellWindow: SpellGildingWindow;
  // EchoSpawner: EchoSpawner;
  // window: GildingWindow;
  // mentalizing: Skill;

  constructor() {
    //   this.Void = new VoidGilding();
    //   this.Buildings = new BuildingGilding(GlobalData.BuildingGilding);
    //   this.BuildingWindow.Init();
    //   this.Spells = new SpellGilding();
    //   this.SpellWindow.Init();
    this.Resource = new VariableBignumber(0.0);
    this.ResourceTotal = new VariableBignumber(0.0);
    this.SplinterIncome = new VariableBignumber(1.0);
    this.Trial = new VariableBignumber(0.0);
    GameContext.ContextAddResource("SplinterIncome", this.SplinterIncome);
    GameContext.ContextAddResource("Gilding.SplintersTotal", this.ResourceTotal);
    GameContext.ContextAddResource("Gilding.Trial", this.Trial);
    //   this.EchoSpawner.Init(this.Void);
    //   this.Catas.Init();
    //   this.mentalizing = GameManager.Instance.SkillManager.Get(SkillManager.SkillNames.Mentalizing);
  }

  //  GetSplinterIncome() {return this.SplinterIncome.Value * this.mentalizing.GetBonus()}

  //  AddSplinter(BigNumber value) {
  //   BigNumber addendum = value * this.GetSplinterIncome();
  //   this.Resource.Change(addendum);
  //   this.ResourceTotal.Change(addendum);
  //   this.mentalizing.AddExp(addendum / 1000.0);
  //   addendum: return;
  // }

  // BigNumber AddSplinterConst(BigNumber value) {
  //   this.Resource.Change(value);
  //   this.ResourceTotal.Change(value);
  //   this.mentalizing.AddExp(value / 1000.0);
  //   value: return;
  // }

  // RealmChange() {
  //   this.Clear(false);
  //   this.Spells.RealmChange();
  //   this.Buildings.Deactivate();
  // }

  // Clear(full = true) {
  //   if (full) {
  //     this.Resource.SetValue(0.0);
  //     this.ResourceTotal.SetValue(0.0);
  //   }
  //   this.EchoSpawner.Restart();
  //   this.Void.Clear(full);
  // }

  // GildingManager.GildingSave Save() => new GildingManager.GildingSave()
  // {
  //   resource = this.Resource.Value,
  //   resourceTotal = this.ResourceTotal.Value,
  //   Void = this.Void.Save(),
  //   Catas = this.Catas.Save(),
  //   Buildings = this.Buildings.Save(),
  //   MentalizingExp = this.mentalizing.totalExp,
  //   Spells = this.Spells.Save()
  // };

  // Load(GildingManager.GildingSave save) {
  //   this.Clear();
  //   if (save == null)
  //     return;
  //   this.Resource.SetValue(save.resource);
  //   this.ResourceTotal.SetValue(save.resourceTotal);
  //   this.Void.Load(save.Void);
  //   this.Catas.Load(save.Catas);
  //   this.Buildings.Load(save.Buildings);
  //   this.mentalizing.Load(save.MentalizingExp);
  //   this.Spells.Load(save.Spells);
  // }

  // PreLoad() {
  //   this.Buildings.ResetFull();
  //   this.Catas.Restart();
  //   this.Void.Deactivate();
  //   this.Spells.PreLoad();
  // }

  // PostLoad() {
  //   GameManager.Instance.BonusSpawner.visual.SetActive(!GameManager.Instance.Paragon.GildingIsAvailable);
  //   this.EchoSpawner.visual.SetActive(GameManager.Instance.Paragon.GildingIsAvailable);
  //   this.BuildingWindow.PostLoad();
  //   this.CheckAvailable();
  // }

  // PreExile() {
  //   Paragons paragon = GameManager.Instance.Paragon;
  //   if (paragon.GildingBuildingsIsAvailable)
  //     this.Buildings.Deactivate();
  //   if (paragon.GildingIsAvailable)
  //     this.Void.Deactivate();
  //   if (!paragon.GildingSpellsIsAvailable)
  //     return;
  //   this.Spells.PreExile();
  // }

  // CheckAvailable(reset = false) {
  //   Paragons paragon = GameManager.Instance.Paragon;
  //   if (paragon.GildingIsAvailable)
  //     this.Void.Activate();
  //   if (paragon.GildingSpellsIsAvailable)
  //     this.Spells.PostExile();
  //   if (!paragon.GildingBuildingsIsAvailable)
  //     return;
  //   this.Buildings.Activate(reset);
  // }

  // BigNumber GetOnTrial() {return this.AddSplinter(this.Trial.Value)}

  // export class GildingSave {
  //   resource: BigNumber;
  //   resourceTotal: BigNumber;
  //   MentalizingExp: BigNumber;
  //   VoidGilding.VoidSave Void;
  //   CatalystGilding.CatalystGildingSave Catas;
  //   BuildingGilding.SaveData Buildings;
  //   SpellGilding.SaveData Spells;
  // }
}
