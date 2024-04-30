import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./css/index.css";

import { createRouter, createWebHashHistory } from "vue-router/auto";
import { GameManager } from "./game/GameManager";
import { useGlobalStore } from "./stores/global";

const router = createRouter({
  history: createWebHashHistory(),
});
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

const game = new GameManager();

globalThis.Game = game;
globalThis.globalStore = useGlobalStore();

// debug
app.config.performance = true;

app.provide("game", game);
app.mount("#app");
