import { secondsToDhms } from "./secondsToDhms";
import { secondsToTime } from "./secondsToTime";

export const Util = {
  secondsToDhms,
  secondsToTime,
  getBaseLog: (x, y) => {
    return Math.log(x) / Math.log(y);
  },
};
