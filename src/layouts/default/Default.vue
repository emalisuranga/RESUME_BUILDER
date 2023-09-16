<template>
  <v-app>
    <div class="skewed-background"></div>
    <default-bar />

    <default-view />
    <!-- <MainStepper2 /> -->
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import MainStepper2 from '@/components/MainStepper2.vue'
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
