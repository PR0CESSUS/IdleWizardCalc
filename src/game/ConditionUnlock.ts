import { BigNumber } from "./BigNumber";

export class ConditionUnlock {
  parameter;
  argument: BigNumber;
  Description;

  Check() {
    return false;
  }

  Preview(show_progress = true, show_complete = true) {
    return "";
  }
}
