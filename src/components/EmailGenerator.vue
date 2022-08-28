<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import ItemsList from './ItemsList.vue'
import TheHeader from './TheHeader.vue'
import EmailIcon from './icons/EmailIcon.vue'
import type { Item } from '@/types'
import { useEmailUtils } from '../utils'

const { Email } = useEmailUtils()

const emailList: Ref<Item[]> = ref([])

function generateRandomEmailList() {
  emailList.value = []
  for (let i = 0; i < 10; i++) {
    emailList.value.push(new Email())
  }
}

onMounted(() => {
  generateRandomEmailList()
})
</script>
<template>
  <TheHeader
    title="Email Random"
    @generate="generateRandomEmailList"
  >
    <template #icon>
      <EmailIcon />
    </template>
    <template #description>
      <p>Genera una lista con 10 email aleatorios</p>
    </template>
  </TheHeader>
  <ItemsList :items="emailList" class="mb-8" />
</template>
