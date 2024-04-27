<script setup lang="ts">
const props = defineProps<{ target?: Object; filename: string }>();

function Download() {
  const filename = `${props.filename}.json`;
  const jsonStr = JSON.stringify(props.target);
  let element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}
</script>

<template>
  <button @click="Download">
    <slot></slot>
  </button>
</template>
<style scoped>
.trigger {
  color: #a7e6ff;
  cursor: pointer;
}
.trigger:hover {
  color: #ffea04;
}
</style>
