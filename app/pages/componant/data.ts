import { SupabaseClient } from "@supabase/supabase-js";
import { error } from "node:console";
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL,
import.meta.env.VITE_SUPABASE_KEY
)
type Payment = {
  id: string
  name: string
  status: 'good' | 'near end' | 'out of stock'
  instock: number
  minimumAmount: number
}

async function getData(pname:string) {
  let data = await supabase.from("product").select('*').eq("name",pname)
  if(error){
    console.error(error);
    return error;
}
  else{
    return data;
  }
}

async function insertData(data:any) {
    await supabase.from("product").insert([{
        name:data.name,
    }] )
}


module.exports
{
    getData

}