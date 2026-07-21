<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { TableMeta, Row } from '@tanstack/vue-table'

type Payment = {
  id: string
  name: string
  status: 'good' | 'near end' | 'out of stock'
  instock: number
  amount: number
  minimumAmount: number
}

const data = ref<Payment[]>([
  {
    id: '4600',
    name: 'Product A',
    status: 'good',
    instock: 10,
    amount: 594,
    minimumAmount: 5
  },
  {
    id: '4599',
    name: 'Product B',
    status: 'near end',
    instock: 5,
    amount: 276,
    minimumAmount: 10 
  },
  {
    id: '4598',
    name: 'Product C',
    status: 'out of stock',
    instock: 0,
    amount: 315,
    minimumAmount: 15
  },
  {
    id: '4597',
    name: 'Product D',
    status: 'good',
    instock: 10,
    amount: 529,
    minimumAmount: 5
  },
  {
    id: '4596',
    name: 'Product E',
    status: 'good',
    instock: 5,
    amount: 639,
    minimumAmount: 5
  }
])

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
          onClick: () => {
            const id = row.getValue('id')
            navigateTo(`/insert`) // Redirect to the update page with the ID
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
          onClick: () => {
            const id = row.getValue('id')

            console.log(`Delete button clicked for ID: ${id}`)
          }
        },
        'Delete'
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
  <UTable :data="data" :columns="columns" :meta="meta" class="flex-1 ">
  </UTable>
</template>
