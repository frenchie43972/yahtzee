<template>
  <button @click="requestRoll">
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(['rollRequest'])

function requestRoll() {
  emit('rollRequest')
}
</script>

<style></style>
