<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";
const game = ref(inject<GameManager>("game"));
definePage({
  meta: {
    name: "Home",
    root: false,
  },
});
</script>

<template>Current Hero: {{ game.CurrentHero }}<br /></template>
