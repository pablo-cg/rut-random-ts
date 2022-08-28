<script setup lang="ts">
import { useTransitions } from '@/utils'
import { useDark, useToggle } from '@vueuse/core'
import MoonIcon from './icons/MoonIcon.vue'
import SunIcon from './icons/SunIcon.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { defaultTransition } = useTransitions()
</script>
<template>
  <button
    class="pointer p-2 rounded-full"
    :class="[
      isDark ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200',
      defaultTransition,
    ]"
    @click="toggleDark()"
  >
    <MoonIcon v-if="isDark" class="text-gray-100" />
    <SunIcon v-else class="text-gray-900" />
  </button>
</template>
