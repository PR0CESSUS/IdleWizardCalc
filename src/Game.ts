import upgrade from "@/data/upgrades.json";

type UpgradeData = {
  ID: number;
  Name: string;
  Cost: number;
};

export class Game {
  upgrade: UpgradeData[];

  constructor() {
    this.upgrade = upgrade;
  }
}
