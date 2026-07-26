<script setup lang="js">

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY, 

  {
    auth: {
      autoRefreshToken: true, // Automatically extends the session
      persistSession: true,   // Stores session details locally
    },
  }
)


const { data } = useSupabaseClient().auth.onAuthStateChange((event, session) => {
  console.log(event, session)
  if (event === 'INITIAL_SESSION') {
    // handle initial session
  } else if (event === 'SIGNED_IN') {
    
  } else if (event === 'SIGNED_OUT') {
    
    window.location.href ="/login"
    supabase.auth.signOut()

  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    
  }
})
</script>



<template class="h-screen w-screen">

  <NuxtPage/>

</template>
