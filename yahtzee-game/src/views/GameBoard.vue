<template>
  <section>
    <p>{{ rollCount }}</p>
    <BaseButton @roll-request="rollRequest">Roll</BaseButton>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import BaseButton from '@/components/BaseButton.vue'

let rollCount = ref(0)

function rollRequest() {
  if (rollCount.value >= 3) {
    return
  } else {
    rollCount.value += 1
  }
}
</script>

<style scoped></style>
