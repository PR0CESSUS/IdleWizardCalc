<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
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
  <h3>Upgrade</h3>
  Upgrade Applied: {{ game.UpgradeManager.UpgradeList.filter((upgrade) => upgrade.applied).length }} / {{ game.SaveFile.Upgrades.length }}
  <hr />
  <table>
    <th @click="game.UpgradeManager.UpgradeList.sort((a, b) => (a.ID > b.ID ? 1 : b.ID > a.ID ? -1 : 0))">ID</th>
    <th>Name</th>
    <th
      @click="
        game.UpgradeManager.UpgradeList.sort((a, b) =>
          !a.Data.Cost.includes('e') && !b.Data.Cost.includes('e')
            ? 0
            : a.Data.Cost.split('e')[1] > b.Data.Cost.split('e')[1]
            ? 1
            : b.Data.Cost.split('e')[1] > a.Data.Cost.split('e')[1]
            ? -1
            : 0
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
      <td>{{ upgrade.Data.Cost }}</td>
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
