<template>
  <v-app>
    <div class="skewed-background"></div>
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
</script>

<style scoped>
.skewed-background {
  position: absolute;
  z-index: 99;
  top: -60px;
  left: 0;
  width: 100%;
  height: 380px;
  background: #2dc46a;
  -webkit-transform: skewY(-6deg);
  transform: skewY(-6deg);
}
</style>
