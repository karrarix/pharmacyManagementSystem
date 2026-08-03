
<script lang="ts" setup>
import type { Database } from '#build/types/supabase-database.js';
import Nevbar from './componant/nevbar.vue';
import type { TableColumn } from '@nuxt/ui'
const route = useRoute();
const dataTest = useState<BasketItem[]>('basket') || ref<BasketItem[]>([]);
type BasketItem = {
  id: string
  name: string
  uintsBought: number
  instock: number
}




async function bought (){

  for(const item of dataTest.value){
    const newstock = item.instock - item.uintsBought
    const {error} = await useSupabaseClient<Database>().from("product")
      .update([{instock: newstock} as {instock:number}]).eq('id',item.id)
      error?console.error(`error for product ${item.id} :`,error.message) : console.log("done");
  }

  navigateTo('/')
  
}




const columns: TableColumn<BasketItem>[] = [
  {
    accessorKey: 'id',
    header: 'المعرف',
    meta: {
      class: {
        th: 'text-center font-semibold',
        td: 'text-center font-mono'
      }
    }
  },
  {
    accessorKey: 'name',
    header: 'اسم المنتج',
  },
  {
    accessorKey: 'uintsBought',
    header: 'عدد الوحدات',
    meta: {
      class: {
        th: 'text-center',
        td: 'text-center'
      }
    }
  },
 
]
</script>


<template>
    <div class="flex flex-col max-h-screen h-11/12 w-11/12 max-w-8xl gap-4 my-30  justify-self-center border rounded-2xl border-blue-600 p-4 m-0 dark:border-green-500 ">
      <Nevbar></Nevbar>
      <UTable :data="dataTest" :columns="columns"  class="flex-1 ">
  </UTable>
        <div class="flex flex-col gap-4 justify-center p-4 m-10 ">
            <UButton @click="bought()" class="bg-green-500 text-white p-2 rounded hover:bg-green-600 cursor-pointer mx-0 justify-center">بيع</UButton>
            <UButton variant='outline' color='error' @click="navigateTo('/')" class="hover: cursor-pointer w-full mx-0 justify-center">رجوع الى السجل</UButton>
        </div>
   </div>
</template>