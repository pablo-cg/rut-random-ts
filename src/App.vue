<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToggleDark from '@/components/ToggleDark.vue'
import { useTransitions } from './utils'
import Copyright from './components/Copyright.vue'
import { useOptionsStore } from './stores/options'
import { computed } from 'vue'

const { defaultTransition } = useTransitions()

const optionsStore = useOptionsStore()

const minimumRut = computed(() => optionsStore.minRut.toLocaleString())
const maximumRut = computed(() => optionsStore.maxRut.toLocaleString())
</script>

<template>
  <div
    class="max-h-screen max-w-screen lg:flex lg:flex-col lg:justify-center lg:items-center"
    :class="defaultTransition"
  >
    <div class="absolute right-1 top-1">
      <ToggleDark />
    </div>
    <div class="absolute left-1 top-1 text-xs text-gray-500">
      <h1>Configuración Actual:</h1>
      <ul>
        <li>Valor RUT Mínimo: {{ minimumRut }}</li>
        <li>Valor RUT Máximo: {{ maximumRut }}</li>
      </ul>
    </div>
    <main class="px-5 mt-16 w-full">
      <RouterView />
    </main>
    <Copyright />
  </div>
</template>

<style scoped></style>
