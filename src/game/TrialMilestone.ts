import { ObjectiveList } from "./ObjectiveList";
import { VariableInt } from "./VariableInt";

export class TrialMilestone extends ObjectiveList {
  Target: VariableInt;
  Max: VariableInt;

  constructor(data, summary = true) {
    super(data, summary);
  }

  GetCount() {
    let level1 = this.Level;
    for (let level2 = this.Level; level2 < this.List.length && this.List[level2].Requirement.argument.ToInt() <= this.Max.ValueInt; level2++) level1++;
    return level1;
  }
}
