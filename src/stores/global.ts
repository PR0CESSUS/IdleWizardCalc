import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import packageInfo from "../../package.json";

const STORE_NAME = "GlobalStore";
const DEFAULT_DATA = {
  version: "0.0.0",
};

export const useGlobalStore = defineStore(STORE_NAME, {
  state: () => useStorage(STORE_NAME, DEFAULT_DATA, localStorage, { mergeDefaults: true }),

  actions: {
    set(value) {
      console.log(value);
    },
    increment() {
      this.count++;
      // this.Save();
    },
    checkVersion() {
      const [major, minor, patch] = this.version.split(".");
      const [majorReal, minorReal, pathReal] = packageInfo.version.split(".");

      return major < majorReal || minor < minorReal || patch < pathReal;
    },

    updateVersion() {
      this.version = packageInfo.version;
    },

    Save() {
      localStorage.setItem(STORE_NAME, JSON.stringify(this));
    },
  },
});
