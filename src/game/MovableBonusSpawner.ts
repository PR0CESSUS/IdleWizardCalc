import { GameContext } from "./GameContext";
import { VariableComplex } from "./VariableComplex";

export class MovableBonusSpawner {
  SpawnRate: VariableComplex;
  DropQuantity: VariableComplex;
  constructor() {
    this.SpawnRate = new VariableComplex(1.0);
    this.DropQuantity = new VariableComplex(1.0);
    GameContext.ContextAddResource("Bats.SpawnRate", this.SpawnRate);
    GameContext.ContextAddResource("Bats.Drop", this.DropQuantity);
  }
}
