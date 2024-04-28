import { BigNumber } from "./BigNumber";
import { Variable } from "./Variable";

export class Effect {
  apply: (v: Variable, a: BigNumber, m: BigNumber, w: Variable, e?: Variable) => void;
  Delete: Function;
  preview: (a: BigNumber, m: BigNumber, w?: Variable, e?: Variable, asnumber?: boolean) => string;
  constructor(apply, Delete, preview = null) {
    this.apply = apply;
    this.Delete = Delete;
    this.preview = preview;
  }

  //   apply(v, a, m, w, e = null) {
  //     // Variable v,
  //     // BigNumber a,
  //     // BigNumber m,
  //     // Variable w,
  //     // Variable e = null
  //     // this.effect.apply(this.target, this.add, this.mult, this.parameter);
  //   }
}
