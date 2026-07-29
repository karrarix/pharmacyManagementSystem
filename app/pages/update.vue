<script type="js" setup>
import Navbar from './componant/nevbar.vue';
import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';
const nameinput = ref('');
const unitinput = ref('');
const mininput = ref('');
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL,
import.meta.env.VITE_SUPABASE_KEY
)
const route = useRoute()
const product_id = route.query.id;

async function changeInput(data) {
    await (nameinput.value = data[0].name);
    await (unitinput.value = data[0].instock);
    await (mininput.value = data[0].minimumAmount);
        console.log (data)
}

onMounted(async ()=>{
    console.log("data", product_id)
    
 const {data , error} = await supabase.from("product").select("*").eq("id",product_id)

    if (error){
        console.error(error)
    }
    else{ 
       
    await changeInput(data)

}
})

async function onsubmit() {

    console.log(nameinput.value);
    console.log(unitinput.value);
    console.log(mininput.value);

    let pstutas;
    if (unitinput.value>= mininput.value){
        pstutas = "good" ;
    }else if(unitinput.value == 0 ){
        pstutas = "no stock"
    }
    else if (unitinput.value <= mininput.value){
        pstutas = "low stock"
    }
    const error = await useSupabaseClient().from("product").update([{name:nameinput.value , instock:unitinput.value , minimumAmount:mininput.value, status:pstutas}]).eq("id" ,route.query.id)
    if (error){
        console.error(error);
        navigateTo("/")
    }
    else{
        console.log ("update done");
        navigateTo("/")
    }
}
</script>
 
<template>
    <div class="flex flex-col h-full gap-4 border rounded-lg p-4 my-10 mx-50">
        <Navbar/>
        <div class="flex flex-col gap-0 justify-center p-4 m-10">
            <div class="flex flex-col gap-4 justify-center p-4 mx-10 ">
                <UInput size="xl" v-model="nameinput"  variant="soft" color="primary" placeholder="اسم المنتج"></UInput>
                <UInput size="xl" v-model="unitinput"  variant="soft" color="secondary" placeholder="عدد الوحدات"></UInput>
                <UInput size="xl" v-model="mininput"  variant="soft" color="neutral" placeholder="الحد الادنى"></UInput>
            </div>
            <div class="flex flex-col gap-4 justify-center p-4 m-10 ">
                <UButton variant="solid" color="primary" class="justify-center" @click="onsubmit">تحديث</UButton>
                <UButton variant="outline" color="error" class="justify-center"><ULink class="w-full mx-0 px-full" to="/">إلغاء</ULink></UButton>
            </div>
        </div>
    </div>
</template>