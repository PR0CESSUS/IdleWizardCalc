type BigNumberSave = {
  Exponent: number;
  Mantissa: number;
};

export class DefaultSaveFile {
  BuildingLevels: number[] = Array(8).fill(0);
  Upgrades: number[] = [];
  Int: number = 0;
  Ins: number = 0;
  Scr: number = 0;
  Wis: number = 0;
  Dom: number = 0;
  Pat: number = 0;
  Mas: number = 0;
  Emp: number = 0;
  Ver: number = 0;
  Pet: number = 0;
  Hero: number = 0;
  CastSpell: BigNumberSave = { Mantissa: 0, Exponent: 0 };
  CharExp: BigNumberSave = { Mantissa: 0, Exponent: 0 };
  ClickableCollect: number = 0;
}
