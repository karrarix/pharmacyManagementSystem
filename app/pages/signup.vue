<script setup lang="ts">
import type { AuthFormField,FormSubmitEvent } from '@nuxt/ui'
const clint = useSupabaseClient();

const fields = ref<AuthFormField[]>([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])


async function signUp(payload: FormSubmitEvent<any>){
    const email= payload.data.email as string;
    const password= payload.data.password as string;
    const {error} = await clint.auth.signUp({email,password})
    if(error){
        console.error(error)
    }
    else{
    console.log("signup done with :", email, password)
    window.location.href = "/login";

    }
};
</script>

<template>
<div class="flex flex-col justify-center top-2/12 items-center h-screen">
  <UAuthForm
    title="sign up"
    description="Enter your credentials to access your account."
    icon="i-lucide-user"
    :fields="fields"
    class="max-w-md"
    ref="authForm"
    @submit="signUp"
    >
    <template #description>
       you do have an account? <ULink to="login" class="text-primary font-medium">log in</ULink>.
    </template>
  </UAuthForm>
  </div>
</template>
