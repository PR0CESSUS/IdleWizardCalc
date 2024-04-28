<script setup lang="ts">
import { Game } from "@/Game";
import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";

const game = ref(inject<Game>("game"));

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
  <button @click="console.log(game.GameManager.VoidManaManager.VoidCore.BonusProfit)">Void Bonus</button>
  <button @click="console.log(game.InitUpgrade())">Init Upgrade</button>
  {{ game.GameManager.VoidManaManager.VoidCore.BonusProfit.Value.ToString() }}
  <h3>Upgrade</h3>
  <table>
    <th>ID</th>
    <th>Name</th>
    <th>Cost</th>
    <th>Effect</th>
    <th>Test</th>
    <tr v-for="upgrade in game.upgrade" :class="{ green: upgrade.applied }">
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
* {
  font-size: 12px;
}
</style>
../data2 ../Game ../../Game ../Game
