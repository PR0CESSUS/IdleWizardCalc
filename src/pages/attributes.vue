<script setup lang="ts">
import AppTooltip from "@/components/AppTooltip.vue";
import { GameManager } from "@/game/GameManager";
import { Attributes } from "@/type/Attributes";
import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";

const game = ref(inject<GameManager>("game"));

definePage({
  meta: {
    name: "Attributes",
    root: true,
  },
});

function color(attribute: any, value: number) {
  return attribute.Level.ValueInt >= value ? Attributes[attribute.Key] : "";
}
</script>

<template>
  <h4>Attributs</h4>

  <table>
    <th>Name</th>
    <th>Level</th>

    <tr v-for="attribute in game.AttributeManager.Attributes">
      <td>
        <AppTooltip>
          <template #trigger>{{ Attributes[attribute.Key] }} </template>
          <template #content
            >{{ attribute.GetDescription() }} <br /><br />
            Total:
            {{ attribute.Preview() }}</template
          >
        </AppTooltip>
      </td>
      <td>{{ attribute.Level.ValueInt }}</td>
      <td v-for="(_, i) in game.AttributeManager.MaxValue.ValueInt" class="point" :class="color(attribute, i)">
        <AppTooltip v-if="_ % 25 == 0">
          <template #trigger><p @click="console.log(attribute.perks[Math.floor(_ / 25) - 1])">[x]</p> </template>
          <!-- <template #trigger><p @click="console.log(attribute.perks[Math.floor(_ / 25) - 1].Activate())">[x]</p> </template> -->
          <template #content>{{ attribute.perks[Math.floor(_ / 25) - 1].GetDescription() }}</template>
        </AppTooltip>
      </td>

      <!-- 
      
       -->
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
.Intelligence {
  background-color: rgb(53, 140, 253);
}
.Insight {
  background-color: blueviolet;
}

.Spellcraft {
  background-color: rgb(247, 46, 96);
}
.Wisdom {
  background-color: rgb(33, 233, 123);
}
.Dominance {
  background-color: rgb(226, 223, 28);
}
.Patience {
  background-color: rgb(43, 226, 202);
}
.Mastery {
  background-color: rgb(226, 153, 43);
}
.Empathy {
  background-color: rgb(236, 40, 155);
}

.point {
  width: 1px;
  height: 10px;
}
</style>
../data2 ../Game ../../Game ../Game
