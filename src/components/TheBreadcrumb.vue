<script setup lang="ts"></script>

<template>
  <RouterLink to="/">IEH2Calculator</RouterLink>
  <template v-for="route in $route.matched">
    <template v-if="!route.meta.default">
      /
      <RouterLink :to="$route.matched[$route.matched.length - 1].children.length && !$route.path.includes('/') ? $route.path + '/' + route.path : route.path">{{
        route.meta.name
      }}</RouterLink>
    </template>
  </template>
</template>
<style scoped>
a {
  color: #fff;
}
a:hover {
  color: #888888;
}
</style>
