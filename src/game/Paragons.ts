import { GameManager } from "./GameManager";
import { ObjectiveList } from "./ObjectiveList";

export class Paragons {
  // prototype: ParagonUI;
  // summaryLabel: TextMeshProUGUI;
  // summaryBlock: GameObject;
  // permanentBlock: GameObject;
  // List<ParagonUI> listMysts;
  // contentMyst: Transform;
  // scrollMyst: ScrollRect;
  // List<ParagonUI> listPermanent;
  // contentPermanent: Transform;
  // scrollPermanent: ScrollRect;
  // onChangeLVL: Action;
  // onChangeLegacyLVL: Action;
  Level: number;
  LevelPermanent: number;
  MaxLevel: number;

  // MystColor: Color;

  // PermanentColor: Color;

  MystParagons: ObjectiveList;

  PermanentParagons: ObjectiveList;

  // summaryIcon: SummaryIconSwitch;

  constructor() {
    this.Level = GameManager.Instance.SaveFile.Paragon;

    this.LevelPermanent = 0;
    //   this.InitializeLists();
    //   VariableLong timeSession = Statistic.TimeSession;
    //   timeSession.OnChange = timeSession.OnChange + new Action(this.CheckLevel);
  }

  Open() {
    //   foreach (ParagonUI listMyst in this.listMysts)
    //     listMyst.Preview();
    //   foreach (ParagonUI paragonUi in this.listPermanent)
    //     paragonUi.Preview();
    //   if (!this.permanentBlock.activeSelf) {
    //     this.SwitchSummaryAndList();
    //     this.summaryIcon.SetState(this.summaryBlock.activeSelf);
    //   }
    //   this.gameObject.SetActive(true);
    //   this.StartCoroutine(this.aligh());
  }

  InitializeLists() {
    //   this.MystParagons = new ObjectiveList(GlobalData.MystParagons);
    //   this.PermanentParagons = new ObjectiveList(GlobalData.PermanentParagons);
    //   if (this.listMysts.length > 0) {
    //     foreach (Component listMyst in this.listMysts)
    //       UnityEngine.Object.Destroy((UnityEngine.Object) listMyst.gameObject);
    //     this.listMysts = new List<ParagonUI>();
    //   }
    //   foreach (Objective objective in this.MystParagons.List)
    //     this.listMysts.push(this.CreateLabel(this.contentMyst).Init(objective, this.MystColor));
    //   foreach (Objective objective in this.PermanentParagons.List)
    //     this.listPermanent.push(this.CreateLabel(this.contentPermanent).Init(objective, this.PermanentColor));
  }

  get AttributesIsAvailable() {
    return this.Level >= 1;
  }

  get ChallengesIsAvailable() {
    return this.Level >= 2;
  }

  get TrialsIsAvailable() {
    return this.Level >= 3;
  }

  get ExpeditionIsAvailable() {
    return this.Level >= 4;
  }

  get MasteryIsAvailable() {
    return this.Level >= 5;
  }

  get PetT2IsAvailable() {
    return this.Level >= 7;
  }

  get EmpathyIsAvailable() {
    return this.Level >= 8;
  }

  get ItemsIsAvailable() {
    return this.Level >= 9;
  }

  get BuyAllIsAvailable() {
    return this.Level >= 10;
  }

  get ShoulderIsAvailable() {
    return this.Level >= 11;
  }

  get WaistIsAvailable() {
    return this.Level >= 13;
  }

  get FingerIsAvailable() {
    return this.Level >= 14;
  }

  get NeckIsAvailable() {
    return this.Level >= 16;
  }

  get EnchantingIsAvailable() {
    return this.Level >= 17;
  }

  get BackIsAvailable() {
    return this.Level >= 18;
  }

  get WristIsAvailable() {
    return this.Level >= 19;
  }

  get WeaponIsAvailable() {
    return this.Level >= 20;
  }

  get ClassT2IsAvailable() {
    return this.Level >= 22;
  }

  get OffhandIsAvailable() {
    return this.Level >= 23;
  }

  get LegsIsAvailable() {
    return this.Level >= 25;
  }

  get MountIsAvailable() {
    return this.Level >= 26;
  }

  get RealmsIsAvailable() {
    return this.Level >= 27;
  }

  get DumpStatIsAvailable() {
    return this.Level >= 28;
  }

  get PhylacteryIsAvailable() {
    return this.Level >= 30;
  }

  get PantheonIsAvailable() {
    return this.Level >= 31;
  }

  get PetT3IsAvailable() {
    return this.Level >= 32;
  }

  get Pantheon2IsAvailable() {
    return this.Level >= 33;
  }

  get GildingCatasIsAvailable() {
    return this.Level >= 36;
  }

  get LocationsIsAvailable() {
    return this.Level >= 34;
  }

  get Gods2SkillIsAvailable() {
    return this.Level >= 35;
  }

  get GildingIsAvailable() {
    return this.Level >= 34;
  }

  get Pantheon3IsAvailable() {
    return this.Level >= 37;
  }

  get GildingBuildingsIsAvailable() {
    return this.Level >= 38;
  }

  get Pantheon4IsAvailable() {
    return this.Level >= 39;
  }

  get GildingSpellsIsAvailable() {
    return this.Level >= 40;
  }

  get PantheonMinorsIsAvailable() {
    return this.Level >= 41;
  }

  get AscensionIsAvailable() {
    return this.Level >= 42;
  }
}
