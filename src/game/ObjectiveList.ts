import { GameContext } from "./GameContext";
import { Objective } from "./Objective";
import { SimpleEffect } from "./SimpleEffect";

export class ObjectiveList {
  List: Objective[];
  Level: number;
  //   Summary: ObjectiveSummary;
  SummaryEnable;

  get Count() {
    return this.List.length;
  }

  constructor(data, summary = true) {
    this.List = [];
    this.Level = 0;
    this.SummaryEnable = summary;
    if (data == null) return;
    for (const objectiveData of data) {
      let objective = new Objective(
        parseInt(objectiveData.Level),
        GameContext.GetResource(objectiveData.Req),
        objectiveData.ReqParam,
        objectiveData.ReqDescr,
        objectiveData.RewardDescr
      );
      if (objectiveData.Reward != null && objectiveData.Reward != "") {
        if (objectiveData.RewardA == null || objectiveData.RewardA == "") objectiveData.RewardA = "0";
        if (objectiveData.RewardM == null || objectiveData.RewardM == "") objectiveData.RewardM = "1";
        objective.Reward = SimpleEffect.Create(GameContext.GetResource(objectiveData.Reward), objectiveData.RewardA, objectiveData.RewardM);
      }
      this.List.push(objective);
    }
    if (!this.SummaryEnable) return;
    // this.Summary = new ObjectiveSummary();
  }

  Check() {
    if (this.List == null) return 0;
    this.Level = 0;
    for (let index = 0; index < this.List.length; index++) {
      let objective = this.List[index];
      objective.ResetCurrent();
      if (objective.Check()) {
        this.Level = index + 1;
        if (!objective.IsActive) {
          objective.Apply();
          //   if (this.SummaryEnable)
          //     this.Summary.push(objective.Reward, objective.RewardDescription);
        }
      } else break;
    }
    for (let level = this.Level; level < this.List.length; level++) {
      let objective = this.List[level];
      objective.ResetCurrent();
      if (objective.IsActive) {
        objective.Delete();
        objective.Check();
        // if (this.SummaryEnable)
        //   this.Summary.Remove(objective.Reward);
      }
    }
    if (this.Level < this.List.length) this.List[this.Level].SetCurrent();
    return this.Level;
  }

  //   GetSummary() {return this.SummaryEnable ? this.Summary.GetAll() : '';}

  Reset() {
    this.Level = 0;
    for (let index = 0; index < this.List.length; index++) this.List[index].Reset();
    if (!this.SummaryEnable) return;
    // this.Summary.Reset();
  }

  GetCount() {
    return this.List.length;
  }

  IsCompletedFull() {
    return this.GetCount() == this.Level;
  }
}
