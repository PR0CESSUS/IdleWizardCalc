export class Building {
  Tier: number;
  Level: number;
  base_cost;
  pps_per_building;
  cost_growth;
  constructor(level, tier) {
    this.Level = level;
    this.Tier = tier;
  }
}
