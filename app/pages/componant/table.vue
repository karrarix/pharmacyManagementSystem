<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { TableMeta, Row } from '@tanstack/vue-table'

const route = useRoute();
let product_id = 0;
const dataTest = ref();
const searchQuery = ref(route.query.search || '');

type Payment = {
  id: string
  name: string
  status: 'جيد' | 'قريب من الانتهاء' | 'منتهي'
  instock: number
  minimumAmount: number
}
// Fetch data from Supabase based on the search query aka the main page functionality
onMounted(async () => {

    const {data , error} = await useSupabaseClient().from("product").select("*").ilike("name", searchQuery.value + "%");
    dataTest.value = data;
    error? console.error(error): console.log("data fetched successfully");

  })

type BasketItem = {
  id: string
  name: string
  uintsBought: number
  instock: number
}

let unitsBought = 0;
const basket = useState<BasketItem[]>('basket', () => {
  return []
})

async function deleteItem (pid:any){
  const {error} = await useSupabaseClient().from("product").delete().eq("id",pid)
  
  error?console.error(error):console.log("deletion is done")
   
}

type data = {
  id: string
  name: string
  instock: number
}

const data = ref<data[]>([])


const columns: TableColumn<Payment>[] = [
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
    accessorKey: 'status',
    header: 'الحالة',
    meta: {
      class: {
        th: 'text-center',
        td: 'text-center'
      }
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const colorMap = {
        'جيد': 'text-success',
        'قريب من الانتهاء': 'text-warning',
        'منتهي': 'text-error'
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
    header: 'عدد الوحدات',
    meta: {
      class: {
        th: 'text-center',
        td: 'text-center'
      }
    }
  },
  {
    accessorKey:'minimumAmount',
    header:'الحد الادنى',
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
        'تعديل'
      )
    }
  },
  {
    accessorKey: 'delete Button',
    header: 'الخيارات',
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
        'حذف'
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
            const id = row.getValue('id') || 0  as number ;
            const instock = row.getValue('instock') || 0 as number;
            if (basket.value.some((item: any) => item.id === id) && basket.value.some((item: any) => item.uintsBought < instock ) ) {

              basket.value.some((item: any) => {
                if (item.id === id) {
                  item.uintsBought += 1;
                }
              })
              return
            }else if (basket.value.some((item:any) => item.id === id && item.uintsBought === instock)){
              console.log(`Product with ID: ${id} has reached the maximum unitsBought limit.`)
            }else {
              basket.value.push({ id: row.getValue('id'), name: row.getValue('name'), uintsBought: 1 , instock: row.getValue('instock')})
            }
          }
        },
        'بيع'
      )
    }
  }
]

const meta: TableMeta<Payment> = {
  class: {
    tr: (row: Row<Payment>) => {
      if (row.original.status === 'منتهي') {
        return 'bg-error/10'
      }
      if (row.original.status === 'قريب من الانتهاء') {
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
