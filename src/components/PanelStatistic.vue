<script setup lang="ts">
import { GameManager } from "@/game/GameManager";
import { inject, ref } from "vue";

const game = ref(inject<GameManager>("game"));
</script>

<template>
  <h3>Main</h3>
  Profit: <span @click="console.log(game.Profit)">{{ game.Profit.Value.ToStringPercent() }}</span
  ><br />
  Ability Power: <span>{{ game.CurrentHero.AbilityPower.Value.ToStringPercent() }}</span
  ><br />
  Idle Bonus: <span>{{ game.Idle.IdleBonus.Value.ToStringPercent() }}</span
  ><br />
  Mysteries: <span>{{ game.Reborn.Souls.Value.ToString() }}</span
  ><br />

  Each Mystery increases Profit by <span>{{ game.Reborn.SoulPower.Value.ToStringPercent() }}</span
  ><br />

  Current bonus: <span>{{ game.Reborn.GetSoulPower().ToStringPercent() }}</span
  ><br />
  <h3>Void</h3>
  Void Mana: {{ game.VoidMana.Value.ToString() }}<br />
  Increase mana profits by: <span> {{ game.VoidManaManager.prev.ToStringPercent() }}</span
  ><br />
  Void Profit: <span>{{ game.VoidManaManager.Power.Value.ToStringPercent() }}</span> <br />
  Void Mana per Entity: <span>{{ game.VoidManaManager.VoidCore.BonusProfit.Value.ToString() }}</span
  ><br />
  Void Spawn Rate: <span>{{ game.VoidManaManager.VoidCore.SpawnSpeed.Value.ToStringPercent() }}</span>

  <h3>Spell</h3>
  Evocation Efficiency: <span @click="console.log(game.Scrolls.EvocationEfficiency)">{{ game.Scrolls.EvocationEfficiency.Value.ToStringPercent() }}</span
  ><br />
  Incantation Efficiency: <span>{{ game.Scrolls.IncantationEfficiency.Value.ToStringPercent() }}</span
  ><br />
  Summoning Efficiency: <span>{{ game.Scrolls.SummoningEfficiency.Value.ToStringPercent() }}</span
  ><br />
  Cast Rate: <span>{{ game.Scrolls.CastRate.Value.ToString() }}</span
  ><br />
  Charging Time Reduction: <span>{{ game.Scrolls.SpellChargingCostReduction.Value.ToStringPercent() }}</span
  ><br />
  Shard Cost Reduction: <span>{{ game.Scrolls.SpellShardsCostReduction.Value.ToStringPercent() }}</span
  ><br />
</template>
<style scoped>
span {
  color: #e2b018;
}
</style>
