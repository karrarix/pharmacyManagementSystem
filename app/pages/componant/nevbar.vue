<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'السجل',
      icon: 'i-lucide-book-open',
      to: '/',
      focused: true
    },
    {
      label: 'بيع المنتجات',
      icon: 'i-lucide-shopping-cart',
      to: '/export'
    },
    {
      label: 'اضف منتجاتك',
      icon: 'i-lucide-box',
      to: '/insert'
    },
    {
        label: 'ابحث عن منتج',
        icon: 'i-lucide-search',
        to: '/search'
    }
  ]
])
</script>

<template>
  <UNavigationMenu color="neutral" :items="items" class="w-full justify-center flex flex-row space-x-4" />
  <UColorModeButton color="primary" class="absolute top-4 right-4" />
</template>
