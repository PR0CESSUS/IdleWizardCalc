import upgrade from "@/data/upgrades.json";
import { Upgrade } from "./game/Upgrade";
import { GameManager } from "./game/GameManager";
import { DefaultSaveFile } from "./game/DefaultSaveFile";

export class Game {
  GameManager: GameManager;
  upgrade: Upgrade[] = [];
  upgradeRaw;

  constructor() {
    this.upgradeRaw = upgrade;
    let SaveFile = JSON.parse(localStorage.getItem("IdleWizardSaveFileData"));
    SaveFile ??= new DefaultSaveFile();
    if (SaveFile) this.GameManager = new GameManager(SaveFile);

    for (let index = 0; index < upgrade.length; index++) this.upgrade.push(new Upgrade(upgrade[index]));
  }

  InitUpgrade() {
    for (let index = 0; index < this.upgrade.length; index++) {
      const upgrade = this.upgrade[index];

      if (this.GameManager.SaveFile.Upgrades.includes(upgrade.ID) && upgrade.Data.V == "VoidMana.Bonus") upgrade.Apply();
    }
  }
}
