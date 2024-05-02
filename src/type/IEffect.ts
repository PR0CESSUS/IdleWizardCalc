import { Variable } from "@/game/Variable";

export type IEffect = {
  Apply: () => void;

  SetEfficiency: (eff: Variable) => void;

  SetGilding: (eff: Variable) => void;

  Delete: () => void;

  Update: () => void;

  Preview: (key: string) => string;
};
