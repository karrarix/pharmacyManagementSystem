<script setup lang="ts">
async function onClick() {
  return new Promise<void>(res => setTimeout(res, 1000))
}
</script>

<template>
  <UButton loading-auto @click="onClick" class="bg-blue-500 text-white p-2 rounded">
    add
  </UButton>
</template>
