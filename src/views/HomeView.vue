<script setup lang="ts">
import RutGenerator from '../components/RutGenerator.vue';
import EmailGenerator from '../components/EmailGenerator.vue';
import ModalConfig from '@/components/ModalConfig.vue';
</script>

<template>
  <ModalConfig />
  <main class="grid grid-cols-1 lg:grid-cols-2">
    <section
      id="ruts"
      class="w-full"
    >
      <RutGenerator />
    </section>
    <section
      id="correos"
      class="w-full"
    >
      <EmailGenerator />
    </section>
  </main>
</template>
