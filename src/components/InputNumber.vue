<script setup lang="ts">
import { ref } from 'vue'

type InputNumberProps = {
  modelValue: number
  label: string
  id: string
  min?: number
  max?: number
}

type InputNumberEmits = {
  (e: 'update:modelValue', value: number): void
}

const props = defineProps<InputNumberProps>()
const emit = defineEmits<InputNumberEmits>()

const inputNumber = ref(props.modelValue)

function updateValue() {
  emit('update:modelValue', inputNumber.value)
}
</script>

<template>
  <div>
    <label
      :for="id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ label }}
    </label>
    <input
      v-model="inputNumber"
      type="number"
      :id="id"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required
      :min="min"
      :max="max"
      @change="updateValue"
    />
  </div>
</template>
