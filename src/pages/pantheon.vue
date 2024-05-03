<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
import { MainGod } from "@/game/MainGod";
import { MinorGod } from "@/game/MinorGod";
import { GodsNames } from "@/type/GodsNames";
import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";

const game = ref(inject<GameManager>("game"));

definePage({
  meta: {
    name: "Pantheon",
    root: true,
  },
});

function isMainGod(i) {
  return i instanceof MainGod;
}

// onMounted(() => {
//   debugger;
// });
</script>

<template>
  <hr />
  <table>
    <th>ID</th>
    <th>Name</th>
    <th>Level</th>
    <th>Effect 1</th>
    <th>Effect 2</th>
    <tr v-for="(god, index) in game.Pantheon.gods">
      <td>{{ index }}</td>
      <template v-if="god">
        <td @click="console.log(god)">{{ GodsNames[god.Key] }}</td>
        <td>{{ god.Level.ValueInt }}</td>

        <td :class="{ green: isMainGod(god) ? god.firstSkill.applied : god.effects[0].applied }">
          {{
            god instanceof MainGod
              ? god.GetSkillDescription(god.DescriptionFirst, god.firstSkill)
              : god instanceof MinorGod
              ? god.GetSkillDescription(god.Description, god.effects[0])
              : ""
          }}
        </td>
        <td :class="{ green: isMainGod(god) ? god.secondSkill.applied : god.effects[1] ? god.effects[1].applied : false }">
          {{
            god instanceof MainGod
              ? god.GetSkillDescription(god.DescriptionSecond, god.secondSkill)
              : god instanceof MinorGod && god.effects[1]
              ? god.GetSkillDescription(god.Description, god.effects[1])
              : ""
          }}
        </td>
        <!-- <td>{{ god.Data.Cost }}</td>  -->
        <!-- <td>{{ god.GetDescription() }}</td> -->
      </template>

      <td>
        <!-- <button @click="console.log(god)">DEBUG</button> -->
      </td>
      <!-- <td><button @click="god.Apply()">Apply</button></td> -->
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
