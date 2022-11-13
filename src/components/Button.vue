<script setup lang="ts">
import { useTransitions } from '@/utils';

const { defaultTransition } = useTransitions();

interface ButtonProps {
  label: string;
  disabled?: boolean;
}

defineProps<ButtonProps>();
</script>
<template>
  <button
    :class="[defaultTransition, 'py-2 px-4 rounded-full focus:outline-none', $attrs.class]"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>
