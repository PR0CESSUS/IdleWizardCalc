import { BuildingFormat } from "@/type/BuildingFormat";
import { GameManager } from "./GameManager";
import { GlobalData } from "./GlobalData";
import { BuildingVisual } from "./BuildingVisual";

export class BuildingCreator {
  //   Atlas: SpriteAtlas;
  BuildingsFormatList: BuildingFormat[];

  Create() {
    this.BuildingsFormatList = GlobalData.Buildings;
    let Buildings = GameManager.Instance.Buildings;
    // console.log(this.BuildingsFormatList);

    for (let index = 0; index < Buildings.length; index++) {
      Buildings[index] = new BuildingVisual(index + 1);
      this.InitBuilding(Buildings[index], this.BuildingsFormatList.filter((x) => parseInt(x.Tier) == index + 1)[0]);
    }

    // console.log(Buildings);

    // for (let i = 0; i < Buildings.length; i++) this.InitBuilding(Buildings[i], this.BuildingsFormatList.filter((x) => parseInt(x.Tier) == Buildings[i].Tier)[0]);
    // this.InitBuilding(GameManager.Instance.BuildingManager.special, this.BuildingsFormatList.Find(Predicate<BuildingFormat>((x) => x.Tier == "9")));
  }

  SetBuilding(tier, name: string) {
    let buildingFormat = this.BuildingsFormatList.filter((x) => x.Name == name)[0];
    let buildingVisual = GameManager.Instance.BuildingManager.Buildings.filter((x) => x.Tier == tier)[0];
    // buildingVisual.NameLabel.text = buildingFormat.Name;
    buildingVisual.building.Name = buildingFormat.Name;
    buildingVisual.building.Description = buildingFormat.Description;
    buildingVisual.Icon = buildingFormat.Sprite;
  }

  InitBuilding(visual: BuildingVisual, format: BuildingFormat) {
    // console.log(visual, format);

    visual.building.Tier = parseInt(format.Tier);
    visual.building.Name = format.Name;
    visual.building.base_cost_string = format.BaseCost;
    visual.building.base_cost_growth = parseFloat(format.Percentage);
    visual.building.base_pps = format.BaseProfit;
    visual.building.Description = format.Description;
    visual.Icon = format.Sprite;
    visual.building.Init();
  }
}
