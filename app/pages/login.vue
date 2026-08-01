<script setup lang="ts">
import type { AuthFormField,FormSubmitEvent } from '@nuxt/ui'

const authForm = useTemplateRef('authForm');
const supabase = useSupabaseClient();

let mode = ref("LOG IN") ;
const fields = ref<AuthFormField[]>([
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' }
])


async function signUp(payload: FormSubmitEvent<any>){
    const email= payload.data.email as string;
    const password= payload.data.password as string;
    const {error} = await supabase.auth.signUp({email,password})
    if(error){
        console.error(error)
    }
    else{
    window.location.href = "/login";
    }
};



  async function login(payload: FormSubmitEvent<any>) {
  const email = payload.data.email;
  const password = payload.data.password;
  
  const {error} = await supabase.auth.signInWithPassword({email:email,password:password})
  if (error){
    console.error(error.message)
  }
  else{
    window.location.href = "/"
  }
  
  console.log("done")
  
};


async function authup(payload: FormSubmitEvent<any>) {

  if (mode.value === "LOG IN")
{
  login(payload)
}
else {
  signUp(payload)
}
  
}

 function toggle(){
  if (mode.value === "LOG IN"){
    mode.value = "SIGN UP";
    console.log(mode);
  }else{mode.value = "LOG IN"
  console.log(mode)
  
  }
}

</script>

<template>
  <div class="flex flex-col justify-center top-2/12 items-center h-screen">
    <UAuthForm title="WELLCOME" ref="authForm" :fields="fields"  class="max-w-md mx-4" @submit="authup">
      <template #description>
        <p class="my-4"> are you new sign up if not log in and wellcome back </p>

        <UButton :label="mode" @click="toggle()" class=""></UButton>
          
        </template>
    </UAuthForm>
  </div>
  
</template>