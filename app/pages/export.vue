
<script lang="ts" setup>
import Nevbar from './componant/nevbar.vue';
import type { TableColumn } from '@nuxt/ui'
const route = useRoute();
const dataTest = ref();
type data = {
  id: string
  name: string
  instock: number
}

const columns: TableColumn<data>[] = [
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
    accessorKey: 'instock',
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
            <UButton @click="" class="bg-green-500 text-white p-2 rounded hover:bg-green-600 cursor-pointer mx-0 justify-center">بيع</UButton>
            <UButton variant='outline' color='error' @click="navigateTo('/')" class="hover: cursor-pointer w-full mx-0 justify-center">رجوع الى السجل</UButton>
        </div>
   </div>
</template>