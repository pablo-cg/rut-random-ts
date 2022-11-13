<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { ref } from 'vue';
import { useMagicKeys, whenever, useToggle } from '@vueuse/core';
import Button from './Button.vue';

const keys = useMagicKeys();

const ctrlK = keys['Ctrl+Shift+K'];
const escape = keys['escape'];

const isOpen = ref(false);
const toggleOpen = useToggle(isOpen);

whenever(ctrlK, () => toggleOpen());

whenever(escape, () => closeModal());

function closeModal() {
  isOpen.value = false;
}

function guardarConfig() {
  console.log('guardar config');
  closeModal();
}
</script>

<template>
  <TransitionRoot
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      as="div"
      @close="closeModal"
      class="relative z-10"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-3xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-zinc-100 dark:bg-zinc-900"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-50"
              >
                Configuración
              </DialogTitle>
              <div class="mt-2 text-zinc-900 dark:text-zinc-50">
                <p class="text-sm">¡En construcción!, estamos trabajando para usted</p>
              </div>

              <div class="mt-4 flex gap-2 flex-row-reverse">
                <Button
                  label="Guardar"
                  class="btn-primary"
                  @click="guardarConfig"
                />
                <Button
                  label="Cancelar"
                  class="hover:bg-emerald-800/70 hover:text-emerald-50"
                  @click="closeModal"
                />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
