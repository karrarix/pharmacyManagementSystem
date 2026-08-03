<script type="js" setup>
import Navbar from './componant/nevbar.vue';
import { ref } from 'vue';

const nameinput = ref('');
const unitinput = ref('');
const mininput = ref('');
async function onsubmit() {

    console.log(nameinput.value);
    console.log(unitinput.value);
    console.log(mininput.value);

    let pstutas;
    if (unitinput.value>= mininput.value){
        pstutas = "جيد" ;
    }else if(unitinput.value == 0 ){
        pstutas = "منتهي"
    }
    else if (unitinput.value <= mininput.value){
        pstutas = "قريب من الانتهاء"
    }
    const error = await useSupabaseClient().from("product").insert([{name:nameinput.value , instock:unitinput.value , minimumAmount:mininput.value, status:pstutas}])
    if (error){
        console.error(error);
    }
    else{
        console.log ("insert done");
        nameinput.value = "";
        unitinput.value = "";
        mininput.value = "";
        window.location.reload();
    }
}
</script>
 
<template>
   
        <div class="flex flex-col h-full gap-4 max-w-6xl  border w-11/12 rounded-lg p-4 my-30 dark:border-green-500 justify-self-center">
        <Navbar/>
        <div class="flex flex-col gap-0 justify-center p-4 m-10">
            <div class="flex flex-col gap-4 justify-center p-4 mx-10 ">
                <UInput size="xl" v-model="nameinput"  variant="soft" color="primary" placeholder="اسم المنتج"></UInput>
                <UInputNumber size="xl" v-model="unitinput"  variant="soft" color="secondary" placeholder="عدد الوحدات"></UInputNumber>
                <UInputNumber size="xl" v-model="mininput"  variant="soft" color="neutral" placeholder="الحد الادنى"></UInputNumber>
            </div>
            <div class="flex flex-col gap-4 justify-center p-4 m-10 ">
                <UButton variant="solid" color="primary" class="justify-center" @click="onsubmit">إضافة</UButton>
                <UButton variant="outline" color="error" @click="navigateTo('/')" class="justify-center  hover:cursor-pointer">الرجوع الى السجل</UButton>
            </div>
        </div>
    </div>
  
</template>