<script setup lang="ts">
import PanelBuilding from "@/components/PanelBuilding.vue";
import PanelHero from "@/components/PanelHero.vue";
import PanelSpell from "@/components/PanelSpell.vue";
import PanelStatistic from "@/components/PanelStatistic.vue";
import { GameContext } from "@/game/GameContext";
import { GameManager } from "@/game/GameManager";
import { GlobalData } from "@/game/GlobalData";
import { Statistic } from "@/game/Statistic";
import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";
const game = ref(inject<GameManager>("game"));
definePage({
  meta: {
    name: "Main",
    root: true,
  },
});
</script>

<template>
  <div class="main-wrap">
    <div class="content">
      <button @click="console.log(game)">DEBUG</button>
      <button @click="console.dir(Statistic)">Statistic</button>
      <button @click="console.dir(GameContext)">GameContext</button>
      <button @click="console.dir(GlobalData)">GlobalData</button>
      <!-- <button @click="console.log(game.UpgradeManager.InitUpgrade())">Init Upgrade</button> -->
      <!-- <button @click="console.log(game.VoidManaManager.UpdateEffect())">Void UpdateEffect</button> -->
      <!-- <button @click="console.log(game.CurrentHero.Hero.ApplyEffects())">Hero Apply Effect</button> -->

      <hr />
      <PanelHero />
      <hr />
      <PanelStatistic />
      <hr />
      <PanelSpell />
    </div>
    <div class="buildings"><PanelBuilding /></div>
  </div>
</template>

<style scoped>
.main-wrap {
  display: grid;
  /* grid-gap: 10px; */
  grid-template-columns: auto;
  grid-template-areas: "content buildings";
  color: #444;
}
.content {
  color: #f3f3f6;
}
.buildings {
  grid-area: buildings;
}
</style>
