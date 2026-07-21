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
    <div class="flex flex-col h-full gap-4 border border-blue-600  rounded-lg p-4 m-10 mx-50 dark:border-green-500 ">
      <Nevbar></Nevbar>  
      <Table/>
   </div>
</template>