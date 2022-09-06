<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToggleDark from '@/components/ToggleDark.vue'
import { useTransitions } from './utils'
import Copyright from './components/Copyright.vue'
import CountdownTimer from './components/CountdownTimer.vue'

const { defaultTransition } = useTransitions()

const endDate = new Date('2022-09-12T10:00:00.000')
</script>

<template>
  <div
    class="max-h-screen max-w-screen lg:flex lg:flex-col lg:justify-center lg:items-center"
    :class="defaultTransition"
  >
    <div class="absolute right-1 top-1">
      <ToggleDark />
    </div>
    <div class="absolute left-1 bottom-1 hidden sm:block">
      <CountdownTimer :end-date="endDate" />
    </div>
    <main class="px-5 mt-16 w-full">
      <RouterView />
    </main>
    <Copyright />
  </div>
</template>

<style scoped></style>
