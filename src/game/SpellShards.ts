import { BigNumber } from "./BigNumber";
import { VariableComplex } from "./VariableComplex";

export class SpellShards {
  Pool: BigNumber;
  Capacity: VariableComplex;
  Efficiency: VariableComplex;
  // Average: CounterAverageBigNumber;

  constructor() {
    this.Capacity = new VariableComplex("1e3");
    this.Efficiency = new VariableComplex(new BigNumber(1));
    //   this.Average = new CounterAverageBigNumber();
  }

  Add(shards: BigNumber) {
    shards = BigNumber.Multiplication(shards, this.Efficiency.Value);

    //   this.Average.push(shards);
    this.Insert(shards);
  }

  Insert(shards: BigNumber) {
    this.Pool = BigNumber.Add(this.Pool, shards);
    if (!(this.Pool > this.Capacity.Value)) return;
    this.Pool = this.Capacity.Value;
  }

  GetShards() {
    if (this.Pool < new BigNumber(1)) return new BigNumber(0);
    let shards = BigNumber.Multiplication(this.Pool, new BigNumber(0.10000000149011612));
    if (shards < new BigNumber(1)) shards = new BigNumber(1);
    this.Pool = BigNumber.Subtract(this.Pool, shards);
    return shards;
  }

  GetFillPercent() {
    // return (this.Pool / this.Capacity.Value).ToFloat();
  }
}
