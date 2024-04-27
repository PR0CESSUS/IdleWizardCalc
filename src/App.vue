<script setup lang="ts">
import packageInfo from "../package.json";
import TheBreadcrumb from "./components/TheBreadcrumb.vue";
import TheMenu from "./components/TheMenu.vue";
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h1 id="title">
        <TheBreadcrumb />
      </h1>
      <div id="settings">
        <!-- <button style="font-size: 12px" @click="dialog.showModal()">&#9776;</button> -->

        <!-- <button @click="createSnapshot()">Create Snapshot</button> -->
        <!-- <label for="saveFileImport" class="importLabel">Import Save File</label> -->
        <!-- <input type="file" id="saveFileImport" accept=".txt" @change="importSaveFile" /> -->
        <!-- <button id="data-restart" type="reset" @click="hardReset()">Hard Reset</button> -->
      </div>
    </div>

    <div class="sidebar" id="menu">
      <TheMenu />
    </div>

    <div id="content"><router-view></router-view></div>

    <div id="footer" class="footer">
      Version: <span id="version"> {{ packageInfo.version }} </span> <a href="https://github.com/pr0cessus/IEH2Calculator">Github Repository Page</a>
    </div>
  </div>
</template>

<style scoped>
.small {
  font-size: 16px;
}

.importLabel {
  display: inline-block;
  font-family: NotoSansBlack;
  font-size: 14px;
  font-weight: bold;
  color: #ebebeb;
  background-image: linear-gradient(#656565, #4a4a4a);
  border-top-color: #939393;
  border-bottom-color: #3f3f3f;
  border-left-color: #474747;
  border-right-color: #4e4e4e;
  border-style: outset;
  border-width: 3px;
  height: 21px;
  padding: 0px 10px 0px 10px;
  background-image: linear-gradient(#b45514, #884110);
  border-top-color: #dc8540;
  border-bottom-color: #693816;
  border-left-color: #873e0c;
  border-right-color: #98460f;
}

.importLabel:hover {
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.1);
}
nav a.router-link-active {
  color: rgb(255, 251, 0);
}
.wrapper {
  display: grid;
  /* grid-gap: 10px; */
  grid-template-columns: 151px auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer  footer";
  color: #444;
}
.header,
.footer {
  color: #f3f3f6;
  padding: 5px;
}

#title {
  display: inline-block;
}

#settings {
  float: right;
  display: flex;
  padding-top: 15px;
}
.sidebar {
  grid-area: sidebar;
  background-color: #232c37;
}

#content {
  padding: 5px 0 15px 5px;
  grid-area: content;
  /* background-color: #232c37; */

  border-left: #fff 1px solid;
  color: #f3f3f6;
}

.header {
  grid-area: header;
  border-bottom: #fff 1px solid;
  padding: 0;
}

.footer {
  grid-area: footer;
  /* background-color: #232c37; */
  border-top: #fff 1px solid;
}
</style>
