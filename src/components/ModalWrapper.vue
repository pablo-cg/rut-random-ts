<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'

type ModalWrapperProps = {
  show: boolean
}

type ModalWrapperEmits = {
  (e: 'close'): void
}

defineProps<ModalWrapperProps>()

const emit = defineEmits<ModalWrapperEmits>()
</script>

<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="emit('close')" class="relative z-10">
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
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
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
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
