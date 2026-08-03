<script lang="ts" setup>
import Nevbar from './componant/nevbar.vue';
import Table from './componant/table.vue';
    useHead({
        title: 'Pharmacy management',
        
        meta: [
          { name: 'description', content: 'Pharmacy management system' }
        ]})

const data = useState('data',() =>{
  return [
    { id: '1', name: 'Product 1', instock: 10 },
    { id: '2', name: 'Product 2', instock: 5 },
    { id: '3', name: 'Product 3', instock: 0 },
    { id: '4', name: 'Product 4', instock: 20 },
    { id: '5', name: 'Product 5', instock: 15 }
  
  ]
})
data.value.push({ id: '6', name: 'Product 6', instock: 8 })
console.log(data.value)

</script>

<template>
  
    <div class="flex flex-col max-h-screen h-11/12 w-11/12 max-w-8xl gap-4 my-30  justify-self-center border rounded-2xl border-blue-600 p-4 m-0 dark:border-green-500 ">
      <Nevbar></Nevbar>
      <Table/>
   </div>
</template>