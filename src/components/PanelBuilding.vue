<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
import { inject, ref } from "vue";
import AppTooltip from "./AppTooltip.vue";

const game = ref(inject<GameManager>("game"));
</script>

<template>
  <!-- {{ game.CurrentHero.Hero.Tips_text() }} -->
  <div v-for="building in game.BuildingManager.Buildings" class="building" @click="building.building.CalculatePps()">
    <div class="div1">
      <AppTooltip>
        <template #trigger
          ><img :src="'/building/' + building.Icon + '.png'" height="52" width="64" style="object-fit: scale-down" @mouseenter="building.update_tips()"
        /></template>
        <template #content
          >&nbsp;
          <div v-html="building.tip_label" style="text-align: left"></div>
        </template>
      </AppTooltip>
    </div>
    <div class="div2">{{ building.building.Name }}</div>
    <div class="div3">&nbsp;</div>
    <div class="div4">{{ building.building.Pps.Value.ToString() }}/sec</div>
    <div class="div5"></div>
    <div class="div6"></div>
    <div class="div7">{{ building.building.Level.ValueInt }}</div>
  </div>
</template>
<style scoped>
* {
  color: #fff;
}

.building {
  background-image: url("/building/Building.png");
  background-repeat: no-repeat;
  padding-top: 15px;
  padding-left: 21px;
  width: 295px;
  height: 75px;
  display: grid;
  grid-template-columns: 60px 130px 30px;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 4 / 2;
  text-align: center;
  padding-top: 5px;
}
.div2 {
  grid-area: 1 / 2 / 2 / 4;
  margin-left: 20px;
}
.div3 {
  grid-area: 2 / 2 / 3 / 4;
  margin-left: 20px;
  margin-top: 3px;
}
.div4 {
  grid-area: 3 / 2 / 4 / 4;
  margin-left: 20px;
}
.div5 {
  grid-area: 1 / 4 / 2 / 5;
  text-align: right;
  margin-right: 18px;
}
.div6 {
  grid-area: 2 / 4 / 3 / 5;
  text-align: right;
  margin-right: 18px;
}
.div7 {
  grid-area: 3 / 4 / 4 / 5;
  text-align: right;
  margin-right: 23px;
}
span {
  color: #e2b018;
}
</style>
