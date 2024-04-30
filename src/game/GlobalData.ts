import { AttributeFormat } from "@/type/AttributeFormat";
import { BuildingFormat } from "@/type/BuildingFormat";
import { UpgradeFormat } from "@/type/UpgradeFormat";

export class GlobalData {
  public static Intelligence: AttributeFormat[];
  public static Insight: AttributeFormat[];
  public static Spellcraft: AttributeFormat[];
  public static Wisdom: AttributeFormat[];
  public static Dominance: AttributeFormat[];
  public static Patience: AttributeFormat[];
  public static Mastery: AttributeFormat[];
  public static Empathy: AttributeFormat[];
  public static Upgrades: UpgradeFormat[];
  public static Buildings: BuildingFormat[];
}
