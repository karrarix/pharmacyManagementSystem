<script setup>
import NameInput from './componant/nameInput.vue';
import Nevbar from './componant/nevbar.vue';
</script>

<template>
    <div class="flex flex-col h-full gap-4 border border-blue-500 rounded-lg p-4 m-10">
        <Nevbar/>
        <NameInput></NameInput>
    </div>
</template>