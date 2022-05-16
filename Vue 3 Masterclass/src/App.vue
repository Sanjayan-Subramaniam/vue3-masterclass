<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import PageHome from '@/components/PageHome.vue';
</script>

<template>
  <img
    alt="Vue logo"
    class="logo"
    src="@/assets/logo.svg"
    width="125"
    height="125"
  />

  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/style.css';
</style>
