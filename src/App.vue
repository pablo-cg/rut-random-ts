<script setup lang="ts">
import { RouterView } from 'vue-router';
import ToggleDark from '@/components/ToggleDark.vue';
import { useTransitions } from './utils';
import Copyright from './components/Copyright.vue';

const { defaultTransition } = useTransitions();
</script>

<template>
  <div
    class="max-h-screen max-w-screen lg:flex lg:flex-col lg:justify-center lg:items-center"
    :class="defaultTransition"
  >
    <div class="absolute right-1 top-1">
      <ToggleDark />
    </div>
    <main class="px-5 mt-16 w-full">
      <RouterView />
    </main>
    <Copyright />
  </div>
</template>

<style scoped></style>
