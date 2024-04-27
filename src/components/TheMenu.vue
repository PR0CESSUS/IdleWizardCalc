<script setup lang="ts">
import AppDropdown from "./AppDropdown.vue";
import { useRouter } from "vue-router/auto";
import { useGlobalStore } from "@/stores/global";

const routes = useRouter()
  .getRoutes()
  .filter((route) => route.meta.root);

const globalStore = useGlobalStore();

// console.log(useRouter().getRoutes());
</script>

<template>
  <nav>
    <template v-for="route in routes">
      <template v-if="route.children?.length && route.meta.submenu">
        <AppDropdown>
          <template #trigger
            ><RouterLink :to="route.path" class="rightarrow"> {{ route.meta.name }} </RouterLink></template
          >
          <template #content>
            <template v-for="childrenRoute in route.children.filter((route) => !route.meta?.default)">
              <template v-if="childrenRoute.children?.length">
                <AppDropdown submenu>
                  <template #trigger
                    ><router-link class="submenu rightarrow" :to="route.path + '/' + childrenRoute.path" v-if="!childrenRoute.meta?.default"
                      >{{ childrenRoute.meta?.name }}
                    </router-link></template
                  >
                  <template #content>
                    <template v-for="grandChildrenRoute in childrenRoute.children">
                      <router-link class="submenu" v-if="!grandChildrenRoute.meta?.default" :to="route.path + '/' + childrenRoute.path + '/' + grandChildrenRoute.path"
                        >{{ grandChildrenRoute.meta?.name }}
                      </router-link>
                    </template>
                  </template>
                </AppDropdown>
              </template>
              <template v-else>
                <router-link class="submenu" :to="route.path + '/' + childrenRoute.path" v-if="!childrenRoute.meta?.default">{{ childrenRoute.meta?.name }} </router-link>
              </template>
            </template>
          </template>
        </AppDropdown>
      </template>
      <template v-else>
        <template v-if="route.meta.version">
          <RouterLink :to="route.children[route.children.length - 1]" :class="{ warning: globalStore.checkVersion() }" @click="globalStore.updateVersion">
            {{ route.meta.name }}
          </RouterLink>
        </template>
        <template v-else>
          <RouterLink :to="route.path"> {{ route.meta.name }}</RouterLink>
        </template>
      </template>
    </template>
  </nav>
</template>
<style scoped>
.submenu {
  font-size: 12px;
  padding: 4px 15px;
  border-width: 2px;

  min-width: 100px;
}
.rightarrow {
  background-image: url(/img/buttonright.png), linear-gradient(#868686, #535353);
  background-size: 1em, contain;
  background-repeat: no-repeat;
  background-position: right, left;
  background-clip: border-box;
}

.warning {
  background-image: url(/img/exclamationmark.png), linear-gradient(#868686, #535353);
  background-size: 2em, contain;
  background-repeat: no-repeat;
  background-position: right, left;
  background-clip: border-box;
}

.submenu:hover {
  filter: brightness(120%);
}

nav a {
  display: block;
  text-align: center;
  text-decoration: none;
  border-width: 4px 4px 4px 4px;
  border-radius: 0px;
  border-color: #b6b6b6 #8f8f8f #9e9e9e #969696;
  border-style: outset;
  background-clip: padding-box;
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  padding-right: 5px;
  background-image: linear-gradient(#868686, #535353);
}

nav a:hover {
  color: #fffbcf;
  filter: brightness(110%);
}

.router-link-active {
  color: #ffea04;
}
</style>
