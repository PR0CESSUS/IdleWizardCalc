<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
import { HeroesNames } from "@/type/HeroesNames";
import { inject, ref } from "vue";
import AppTooltip from "./AppTooltip.vue";

const game = ref(inject<GameManager>("game"));
</script>

<template>
  <AppTooltip>
    <template #trigger><img :src="'/hero/' + HeroesNames[game.SaveFile.Hero] + '.png'" width="128" height="128" @click="game.CurrentHero.Hero.UpdateExp()" /></template>
    <template #content><p v-html="game.CurrentHero.Hero.Tips_text()"></p></template>
  </AppTooltip>
</template>
<!--  -->
