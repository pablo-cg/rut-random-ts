<script setup lang="ts">
import { useTransitions } from '@/utils'
import Button from './Button.vue'

const { defaultTransition } = useTransitions()

interface PropsModel {
  title: string
}

defineProps<PropsModel>()
const emit = defineEmits(['generate'])

function generate() {
  emit('generate')
}
</script>

<template>
  <div class="grid sm:grid-cols-12 mb-8">
    <section class="flex justify-center sm:col-span-3 lg:col-span-4">
      <div id="icon" class="w-36 h-36">
        <slot name="icon" />
      </div>
    </section>
    <section
      class="flex flex-col justify-center items-center text-center gap-2 sm:col-span-9 sm:items-start sm:text-start lg:col-span-8"
    >
      <h1
        class="font-montserrat font-bold text-4xl text-emerald-800 dark:text-emerald-400"
        :class="defaultTransition"
      >
        {{ title }}
      </h1>
      <slot name="description" />
      <Button label="Generar" @click="generate" />
    </section>
  </div>
</template>
