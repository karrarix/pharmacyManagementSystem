<script setup>
import Navbar from './componant/nevbar.vue';
</script>

<template>
    <div class="flex flex-col h-full gap-4 border rounded-lg p-4 my-10 mx-50">
        <Navbar/>
        <div class="flex flex-col gap-0 justify-center p-4 m-10">
            <div class="flex flex-col gap-4 justify-center p-4 mx-10 ">
                <UInput size="xl"  variant="soft"color="primary" placeholder="اسم المنتج"></UInput>
                <UInput size="xl"  variant="soft" color="secondary" placeholder="عدد الوحدات"></UInput>
                <UInput size="xl"  variant="soft" color="neutral" placeholder="الحد الادنى"></UInput>
            </div>
            <div class="flex flex-col gap-4 justify-center p-4 m-10 ">
                <UButton variant="solid" color="primary" class="justify-center">إضافة</UButton>
                <UButton variant="outline" color="error" class="justify-center">إلغاء</UButton>
            </div>
        </div>
    </div>
</template>