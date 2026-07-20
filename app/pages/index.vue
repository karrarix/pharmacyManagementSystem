<script lang="ts" setup>
  import Buttons from './componant/buttons.vue';
import Nevbar from './componant/nevbar.vue';
  import Table from './componant/table.vue';
        
    useHead({
        title: 'Pharmacy management',
        
        meta: [
          { name: 'description', content: 'Pharmacy management system' }
        ]})
</script>

<template>
    <div class="flex flex-col h-full gap-4 border border-blue-500 rounded-lg p-4 m-10">
      <Nevbar></Nevbar>  
      <Table/>
    </div>
</template>