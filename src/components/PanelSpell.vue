<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
import { inject, ref } from "vue";
import AppTooltip from "./AppTooltip.vue";

const game = ref(inject<GameManager>("game"));
</script>

<template>
  <div class="spellGrid">
    <div v-for="spell in game.SpellBook.SpellChooses" class="spell" :class="{ active: spell.active }">
      <AppTooltip>
        <template #trigger><img :src="'spell/' + spell.Data.Key + '.png'" style="object-fit: scale-down" width="70" @click="spell.Apply()" /></template>
        <template #content><p v-html="spell.getTip()"></p> </template>
      </AppTooltip>
    </div>
  </div>
</template>
<style scoped>
.spellGrid {
  /* padding-left: 21px; */
  width: 522px;
  height: 120px;
  display: flex;
}

.active {
  filter: hue-rotate(230deg);
}

.active img {
  filter: hue-rotate(-230deg);
}

.spell {
  background-image: url("/spell/Spell.png");
  background-repeat: no-repeat;
  padding-top: 14px;
  padding-left: 8px;
  /* margin-left: 8px; */
  /* margin-right: 7px; */
  border: 1px solid black;
  width: 87px;
  height: 100px;
}
</style>
