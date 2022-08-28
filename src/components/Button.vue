<script setup lang="ts">
import { useTransitions } from '@/utils'

const { defaultTransition } = useTransitions()

interface ButtonProps {
  label: string
  disabled?: boolean
}

defineProps<ButtonProps>()

</script>
<template>
  <button
    class="py-2 px-4 rounded-full bg-emerald-700 text-emerald-50 focus:outline-none enabled:hover:bg-emerald-900 dark:enabled:hover:bg-emerald-400 dark:enabled:hover:text-neutral-900 dark:bg-emerald-600 disabled:opacity-50 disabled:cursor-default"
    :class="[defaultTransition]"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>
