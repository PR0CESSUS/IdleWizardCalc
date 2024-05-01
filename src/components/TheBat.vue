<script setup lang="ts">
import { ref } from "vue";

// watch(content, () => console.log("TheLog updated"));
const sprite = ref<HTMLImageElement>();
const spritePath = ref("/bat/bat1.png");
const spriteTimer = ref(0);

// const targetX = ref(1500);
// const targetY = ref(500);
const currentX = ref(-20);
const currentY = ref(-30);

function changeAnimation() {
  if (spriteTimer.value > 4) spriteTimer.value = 0;
  spriteTimer.value++;
  spritePath.value = `/bat/bat${spriteTimer.value}.png`;
  //   console.log(sprite.value);
  //   console.log(sprite.value);
}

setTimeout(spiriteInit, 4000);

function spiriteInit() {
  setInterval(changeAnimation, 150);
  setInterval(moveAnimation, 26);
  sprite.value.style.top = `${currentY.value}px`;
  sprite.value.style.left = `${currentX.value}px`;
}

function click() {
  console.log("click Rickroll");
  moveAnimation();
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function moveAnimation() {
  currentY.value += 1;
  currentX.value += 1;
  sprite.value.style.top = `${currentY.value}px`;
  sprite.value.style.left = `${currentX.value}px`;
}
</script>

<template>
  <img :src="spritePath" @click="click" ref="sprite" />
</template>
<style scoped>
img {
  position: fixed;
  z-index: 1000;
  top: -100px;
  left: -100px;
}
</style>
