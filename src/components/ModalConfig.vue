<script setup lang="ts">
/* eslint-disable no-unused-vars */
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useMagicKeys, whenever, useToggle } from '@vueuse/core'
import { DialogTitle } from '@headlessui/vue'
import { useOptionsStore } from '@/stores/options'
import Button from './Button.vue'
import ModalWrapper from './ModalWrapper.vue'
import InputNumber from './InputNumber.vue'

const optionsStore = useOptionsStore()
const { minRut, maxRut, defaultMinRut } = storeToRefs(optionsStore)

const keys = useMagicKeys()

const isOpen = ref(false)
const toggleOpen = useToggle(isOpen)

whenever(keys['Ctrl+Shift+K'], () => toggleOpen())

whenever(keys['escape'], () => closeModal())

const rutOptions = reactive({
  minimum: minRut.value,
  maximum: maxRut.value
})

function closeModal() {
  isOpen.value = false
}

function guardarConfig() {
  if (rutOptions.minimum < defaultMinRut.value) return
  if (rutOptions.maximum <= rutOptions.minimum) return

  minRut.value = rutOptions.minimum
  maxRut.value = rutOptions.maximum
  closeModal()
  location.reload()
}
</script>

<template>
  <ModalWrapper :show="isOpen" @close="closeModal">
    <DialogTitle
      as="h3"
      class="text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-50"
    >
      Configuración
    </DialogTitle>
    <section class="mt-5 text-zinc-900 dark:text-zinc-50 grid grid-cols-2 gap-2">
      <InputNumber
        id="minimum-rut"
        v-model="rutOptions.minimum"
        label="Valor mínimo RUT"
        :min="defaultMinRut"
      />
      <InputNumber
        id="maximum-rut"
        v-model="rutOptions.maximum"
        label="Valor máximo RUT"
        :min="rutOptions.minimum"
      />
    </section>

    <section class="mt-5 flex gap-2 flex-row-reverse">
      <Button label="Guardar" class="btn-primary" @click="guardarConfig" />
      <Button
        label="Cancelar"
        class="hover:bg-emerald-800/70 hover:text-emerald-50"
        @click="closeModal"
      />
    </section>
  </ModalWrapper>
</template>
