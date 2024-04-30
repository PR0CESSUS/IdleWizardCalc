<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
import { inject, ref } from "vue";

const game = ref(inject<GameManager>("game"));
</script>

<template>
  <h3>Main</h3>
  Profit: {{ game.Profit.Value.ToString() }}<br />
  <h3>Void</h3>
  Void Mana Profit: {{ game.VoidManaManager.Power.Value.ToStringPercent() }}<br />
  Void Mana per Entity: {{ game.VoidManaManager.VoidCore.BonusProfit.Value.ToString() }}<br />

  <h3>Spell</h3>
  Evocation Efficiency: {{ game.Scrolls.EvocationEfficiency.Value.ToStringPercent() }}<br />
</template>
