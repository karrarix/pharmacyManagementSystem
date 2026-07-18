<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { TableMeta, Row } from '@tanstack/vue-table'

type Payment = {
  id: string
  name: string
  status: 'good' | 'near end' | 'out of stock'
  instock: number
  amount: number
}

const data = ref<Payment[]>([
  {
    id: '4600',
    name: 'Product A',
    status: 'good',
    instock: 10,
    amount: 594
  },
  {
    id: '4599',
    name: 'Product B',
    status: 'near end',
    instock: 5,
    amount: 276
  },
  {
    id: '4598',
    name: 'Product C',
    status: 'out of stock',
    instock: 0,
    amount: 315
  },
  {
    id: '4597',
    name: 'Product D',
    status: 'good',
    instock: 10,
    amount: 529
  },
  {
    id: '4596',
    name: 'Product E',
    status: 'good',
    instock: 5,
    amount: 639
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
    accessorKey: 'amount',
    header: 'Amount',
    meta: {
      class: {
        th: 'text-right font-bold text-primary',
        td: 'text-right font-mono'
      }
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat().format(amount)
      return h('span', { class: 'font-semibold text-success' }, formatted)
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
  <UTable :data="data" :columns="columns" :meta="meta" class="flex-1 " />
</template>
