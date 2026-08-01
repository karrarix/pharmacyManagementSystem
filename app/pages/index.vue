<script lang="ts" setup>
import Nevbar from './componant/nevbar.vue';
import Table from './componant/table.vue';
    useHead({
        title: 'Pharmacy management',
        
        meta: [
          { name: 'description', content: 'Pharmacy management system' }
        ]})
</script>

<template>
  
    <div class="flex flex-col max-h-screen h-11/12 w-11/12 max-w-8xl gap-4 my-30  justify-self-center border rounded-2xl border-blue-600 p-4 m-0 dark:border-green-500 ">
      <Nevbar></Nevbar>
      <Table/>
   </div>
</template>