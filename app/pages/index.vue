<template>
    <div class="flex flex-col h-full gap-4 border border-blue-500 rounded-lg p-4 m-10">
        <Table/>
        <div class="flex flex-row  justify-right w-max h-full gap-4 border border-blue-500 rounded-lg p-4 m-10">    
        <NuxtLink to="/import" class=" p-2 "><Buttons></Buttons></NuxtLink>
        <NuxtLink to="/export" class="bg-green-500 text-white p-2 rounded ">bying</NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Buttons from './componant/buttons.vue';
import Table from './componant/table.vue';

useHead({
  title: 'Pharmacy management',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '../assets/images/logo.svg' }
  ],
  meta: [
    { name: 'description', content: 'Pharmacy management system' }
  ]
})
</script>