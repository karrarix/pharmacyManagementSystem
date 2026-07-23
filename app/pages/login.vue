<script setup lang="ts">

const supabase = useSupabaseClient();
const authForm = useTemplateRef('authForm')
import type { AuthFormField,FormSubmitEvent } from '@nuxt/ui'


const fields = ref<AuthFormField[]>([
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' }
])

  function onSubmit(payload: FormSubmitEvent<any>) {
  const email = payload.data.email;
  const password = payload.data.password
  console.log(email)
  
  supabase.auth.signInWithPassword({email:email,password:password})
  
  console.log("done")
  
}
</script>

<template>
  <div class="flex flex-col justify-center top-2/12 items-center h-screen">
    <UAuthForm title="Login" ref="authForm" :fields="fields"  class="max-w-md" @submit="onSubmit"></UAuthForm>
  </div>
  
</template>