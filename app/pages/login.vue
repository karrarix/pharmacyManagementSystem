<script setup lang="ts">
import type { AuthFormField,FormSubmitEvent } from '@nuxt/ui'
const authForm = useTemplateRef('authForm');
const supabase = useSupabaseClient();


const fields = ref<AuthFormField[]>([
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' }
])

  async function login(payload: FormSubmitEvent<any>) {
  const email = payload.data.email;
  const password = payload.data.password
  console.log(email)
  
  const {error} = await supabase.auth.signInWithPassword({email:email,password:password})
  if (error){
    console.error(error.message)
  }
  else{
    window.location.href = "/"
  }
  
  console.log("done")
  
};


</script>

<template>
  <div class="flex flex-col justify-center top-2/12 items-center h-screen">
    <UAuthForm title="Log in" ref="authForm" :fields="fields"  class="max-w-md" @submit="login">
      <template #description>
          Don't have an account? <ULink to="signup" class="text-primary font-medium">Sign up</ULink>.
        </template>
    </UAuthForm>
  </div>
  
</template>