<script setup lang="ts">
import Button from './Button.vue'
import type { Item } from '../types/index'

interface ItemsProps {
  items: Item[]
}

defineProps<ItemsProps>()

function copyItem(item: Item) {
  item.isCopied = true
  navigator.clipboard.writeText(item.value)
}
</script>
<template>
  <ul class="flex flex-col gap-2">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex justify-between items-center px-10"
    >
      <span :class="item.isCopied ? 'line-through' : 'no-underline'">
        {{ item.value }}
      </span>
      <Button
        :label="item.isCopied ? 'Copiado' : 'Copiar'"
        :disabled="item.isCopied"
        @click="copyItem(item)"
      />
    </li>
  </ul>
</template>
