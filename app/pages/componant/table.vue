<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { TableMeta, Row } from '@tanstack/vue-table'
import { error, type table } from 'node:console'
import product from "../insert.vue";
import { createClient } from '@supabase/supabase-js';

let product_id = 0;

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL,
import.meta.env.VITE_SUPABASE_KEY
)
type Payment = {
  id: string
  name: string
  status: 'good' | 'near end' | 'out of stock'
  instock: number
  minimumAmount: number
}
onMounted(async ()=>{
const {data , error} = await supabase.from("product").select("*");
dataTest.value = data
console.log(dataTest.value)
})

const dataTest = ref()

async function deleteItem (pid:any){
  await useSupabaseClient().from("product").delete().eq("id",pid)
  if (Error){
    console.error(Error)
  }else{console.log("deletion is done")
   
  }
}
const columns: TableColumn<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    meta: {
      class: {
        th: 'text-center font-semibold',
        td: 'text-center font-mono'
      }
    }
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    meta: {
      class: {
        th: 'text-center',
        td: 'text-center'
      }
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const colorMap = {
        paid: 'text-success',
        failed: 'text-error',
        refunded: 'text-warning'
      }
      return h(
        'span',
        { class: `font-semibold capitalize ${colorMap[status as keyof typeof colorMap]}` },
        status
      )
    }
  },
  {
    accessorKey: 'instock',
    header: 'In Stock',
    meta: {
      class: {
        th: 'text-center',
        td: 'text-center'
      }
    }
  },
  {
    accessorKey:'minimumAmount',
    header:'Minimum amount',
    meta:{
      class:{
        th:'text-center',
        td:'text-center'
      }
    }
  },
  {
    accessorKey: 'update Button',
    header: '',
    cell: ({ row }) => {
      return h(
        'button',
        {
          class: 'bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer',
          onClick:async () => {
            
            product_id = row.getValue('id')
           await navigateTo({path:`/update`,
            query:{id:product_id}
           }) // Redirect to the update page with the ID
            

          }
        },
        'Update'
      )
    }
  },
  {
    accessorKey: 'delete Button',
    header: '',
    cell: ({ row }) => {
      return h(
        'Ubutton',
        {
          class: 'bg-red-500 text-white m-0 p-2 rounded border border-red-600 hover:bg-red-600 cursor-pointer',
          onClick: async () => {
            const id = row.getValue('id')
            console.log(`Delete button clicked for ID: ${id}`)
            await deleteItem(id);
            window.location.reload();
          }
        },
        'Delete'
      )
    }
  },
  {
    accessorKey: 'export Button',
    header: '',
    cell: ({ row }) => {
      return h(
        'Ubutton',
        {
          class: 'bg-green-500 text-white m-0 p-2 rounded border border-green-600 hover:bg-green-600 cursor-pointer px-4',
          onClick:async () => {
            const id = row.getValue('id')
            
            console.log(`Export button clicked for ID: ${id}`)
          }
        },
        'add'
      )
    }
  }
]

const meta: TableMeta<Payment> = {
  class: {
    tr: (row: Row<Payment>) => {
      if (row.original.status === 'out of stock') {
        return 'bg-error/10'
      }
      if (row.original.status === 'near end') {
        return 'bg-warning/10'
      }
      return ''
    }
  }
}
</script>

<template>
  <UTable :data="dataTest" :columns="columns" :meta="meta" class="flex-1 ">
  </UTable>
</template>
