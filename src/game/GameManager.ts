import { SaveFile } from "@/type/SaveFile";
import { GameContext } from "./GameContext";
import { Building } from "./Building";
import { VoidMana } from "./VoidMana";

export class GameManager {
  Profit = {};
  SaveFile: SaveFile;
  VoidManaManager: VoidMana;
  public static Instance: GameManager;

  constructor(SaveFile: SaveFile) {
    GameManager.Instance = this;
    // GameContext.ContextAddBuilding();
    this.SaveFile = SaveFile;
    this.Profit = SaveFile.BuildingLevels;
    this.VoidManaManager = new VoidMana();

    // generate game resources
    GameContext.GenerateContext();
    GameContext.GenerateEffects();
    for (let index = 0; index < this.SaveFile.BuildingLevels.length; index++) GameContext.ContextAddBuilding(new Building(this.SaveFile.BuildingLevels[index], index));
  }
}