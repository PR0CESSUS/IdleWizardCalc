<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<HTMLDialogElement>();
const locked = ref(false);
function closeDialog(event: Event) {
  // console.log("event.target:", event.target);
  if (locked.value) return;
  if ((event.target as HTMLDialogElement).nodeName == dialog.value.nodeName) dialog.value.close();
  event.stopPropagation();
}

defineExpose({
  dialog,
  locked,
});
</script>

<template>
  <span @click="dialog.showModal()">
    <slot name="trigger"></slot>
  </span>

  <dialog ref="dialog" @mousedown="closeDialog">
    <div class="wrapper">
      <slot name="content">Dialog Content</slot>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  padding: 0;
  background: rgba(51, 51, 51, 0.95);
  color: #fff;
  border-width: 1px;
  border-color: #525252;
}
.wrapper {
  padding: 10px;
}
</style>
../data2 ../stores/heroStats
