<script setup lang="ts">
defineProps({
    placeholder: {
        type: String,
        default: 'Enter your name'
    }
})
</script>

<template>
    <div class="flex flex-row h-full gap-4 justify-left p-4 m-10">
        <UInput color="secondary" highlight :placeholder="placeholder" />
    </div>
</template>
