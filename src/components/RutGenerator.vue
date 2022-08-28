<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import ItemsList from './ItemsList.vue'
import TheHeader from './TheHeader.vue'
import IdCardIcon from './icons/IdCardIcon.vue'
import type { Item } from '../types'
import { useRutUtils } from '../utils'

const { Rut } = useRutUtils()

const rutList: Ref<Item[]> = ref([])

function generateRandomRutList() {
  rutList.value = []
  for (let i = 0; i < 10; i++) {
    rutList.value.push(new Rut())
  }
}

onMounted(() => {
  generateRandomRutList()
})
</script>
<template>
  <TheHeader title="RUT Random" @generate="generateRandomRutList">
    <template #icon>
      <IdCardIcon />
    </template>
    <template #description>
      <p>Genera una lista con 10 RUT aleatorios</p>
    </template>
  </TheHeader>
  <ItemsList :items="rutList" class="mb-8" />
</template>
