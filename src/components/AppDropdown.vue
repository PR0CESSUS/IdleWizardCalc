<script setup lang="ts">
import { computed, ref } from "vue";
const inContentZone = ref(false);
const inTriggerZone = ref(false);
const isVisible = computed(() => inContentZone.value || inTriggerZone.value);
const content = ref<HTMLDivElement>();
const mouseEnter = (event) => {
  if (content.value.textContent == "") return;
  inTriggerZone.value = true;
  const rect = event.target.getBoundingClientRect() as DOMRect;
  content.value.style.left = `${rect.right}px`;
  content.value.style.top = `${rect.top}px`;
};
</script>

<template>
  <div>
    <div class="trigger" @mouseenter="mouseEnter($event)" @mouseleave="inTriggerZone = false">
      <slot name="trigger"></slot>
    </div>

    <div class="tooltip" v-show="isVisible" ref="content" @mouseenter="inContentZone = true" @mouseleave="inContentZone = false">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  position: fixed;
  max-width: 700px;
  min-width: 100px;
  background: rgba(51, 51, 51, 0.95);
  z-index: 1;
  text-wrap: nowrap;
}
.trigger {
  display: inline;
}
</style>
