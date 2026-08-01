<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()
const searchQuery = ref('')
const serchS = useState("searchQuery", () => "");

watch(searchQuery, (newValue) => {
  // Handle the search query change here
 searchQuery.value = newValue;
  serchS.value = newValue;
})

async function searchA(){
  const query = searchQuery.value.trim();
  if (query) {
  await  navigateTo({ path: '/', query: { search: query } });
  } else {
  await  navigateTo('/');
  }
   window.location.reload();
}
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
  ]
])

</script>

<template>
  
  <div class="flex flex-row gap-4 items-center justify-center w-full">
    <UNavigationMenu color="neutral" :items="items" class="w-full flex flex-row space-x-0" />
    <div class="flex flex-row gap-4" >
      <UInput v-model="searchQuery" placeholder="بحث عن منتج" class="w-full max-w-full" />
      <UButton variant="solid" color="primary" class=" px-4" @click="searchA()">البحث</UButton>
    </div>
</div>
</template>
