//@ts-nocheck
import fs from "fs";
import packageInfo from "../package.json";

const PATH = "D:/IEH2Calculator/src/pages/changelog";
const FILENAME = `${PATH}/${packageInfo.version}.vue`;
const TEMPLATE = `<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "${packageInfo.version}",
  },
});
</script>
<template>
  <h2>${packageInfo.version}</h2>
  <ul>
    <li></li>
  </ul>
</template>
`;

fs.writeFileSync(FILENAME, TEMPLATE);
