<script setup lang="ts">
async function onClick() {
  return new Promise<void>(res => setTimeout(res, 1000))
}
defineProps({
  label: {
    type: String,
    default: 'click me'
  },
  color: {
    type: String,
    default: 'bg-blue-500'
  }
})
</script>



<template>
  <UButton loading-auto @click="onClick" :class="['${{color}} text-white p-2 rounded', color]">
    <slot>{{ label }}</slot>
  </UButton>
</template>
