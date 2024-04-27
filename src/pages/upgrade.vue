<script setup lang="ts">
import { Game } from "@/Game";
import { inject } from "vue";
import { definePage } from "vue-router/auto";

const game = inject<Game>("game");

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
  <h3>Upgrade</h3>
  <table>
    <th>ID</th>
    <th>Name</th>
    <th>Cost</th>
    <tr v-for="upgrade in game.upgrade">
      <td>{{ upgrade.ID }}</td>
      <td>{{ upgrade.Name }}</td>
      <td>{{ upgrade.Cost }}</td>
    </tr>
  </table>
</template>

<style scoped>
.element {
  background-color: #636363;
  border: 1px solid #000;
  border-radius: 3px;
}
</style>
../data2 ../Game ../../Game ../Game
