<script setup lang="ts">
import StatisticInfo from "@/components/StatisticInfo.vue";
import { GameContext } from "@/game/GameContext";
import { GameManager } from "@/game/GameManager";
import { GlobalData } from "@/game/GlobalData";
import { Statistic } from "@/game/Statistic";
import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";

const game = ref(inject<GameManager>("game"));

definePage({
  meta: {
    name: "Upgrade",
    root: true,
    debug: true,
  },
});
</script>

<template>
  <button @click="console.log(game)">DEBUG</button>
  <button @click="console.dir(Statistic)">Statistic</button>
  <button @click="console.dir(GameContext)">GameContext</button>
  <button @click="console.dir(GlobalData)">GlobalData</button>
  <button @click="console.log(game.UpgradeManager.InitUpgrade())">Init Upgrade</button>
  <button @click="console.log(game.CurrentHero)">HeroSlot</button>
  Upgrade Applied: {{ game.UpgradeManager.UpgradeList.filter((upgrade) => upgrade.applied).length }} / {{ game.SaveFile.Upgrades.length }}
  <hr />
  <StatisticInfo />

  <span style="color: #e2b018">sss</span>
  <h3>Upgrade</h3>
  <table>
    <th @click="game.UpgradeManager.UpgradeList.sort((a, b) => (a.ID > b.ID ? 1 : b.ID > a.ID ? -1 : 0))">ID</th>
    <th>Name</th>
    <th
      @click="
        game.UpgradeManager.UpgradeList.sort((a, b) =>
          !a.Cost.includes('e') && !b.Cost.includes('e') ? 0 : a.Cost.split('e')[1] > b.Cost.split('e')[1] ? 1 : b.Cost.split('e')[1] > a.Cost.split('e')[1] ? -1 : 0
        )
      "
    >
      Cost
    </th>
    <th>Effect</th>
    <th>Test</th>
    <tr v-for="upgrade in game.UpgradeManager.UpgradeList" :class="{ green: upgrade.applied }">
      <td>{{ upgrade.ID }}</td>
      <td>{{ upgrade.Name }}</td>
      <td>{{ upgrade.base_cost_string }}</td>
      <td>{{ upgrade.GetDescription() }}</td>
      <td>
        <button
          @click="
            console.log(upgrade);
            console.log(upgrade.GetDescription());
          "
        >
          DEBUG
        </button>
      </td>
      <td><button @click="upgrade.Apply()">Apply</button></td>
    </tr>
  </table>
</template>

<style scoped>
th:hover {
  color: bisque;
  cursor: pointer;
}

* {
  font-size: 12px;
}
</style>
../data2 ../Game ../../Game ../Game
