// impot Axios 
import axios from 'axios'
import { supabase } from './supabase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from './../firebase.config'; 

export const listImages = async (folder: string) => {
  const listRef = ref(storage, folder);
  const result = await listAll(listRef);
  const urls = await Promise.all(result.items.map((itemRef) => getDownloadURL(itemRef)));
  console.log(urls)
  return urls;
};


// Authentication 
// Sign up User
export async function SignupFunctionality(){

}


// Sign Up with Google 
export async function SignUpWithGoogle(){

}



// Sign Up Facebook 
export async function SignUpWithFacebook(){

}




// Login 
export async function LoginFunctiionality(){

}

export async function uploadImage(file: any) {
  const { data, error } = await supabase.storage
    .from('PublicImages')
    .upload(`${Date.now()}_${file.name}`, file);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getImages() {
  const { data, error } = await supabase.storage
    .from('PublicImages')
    .list('', { limit: 100 });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data)

  const imageUrls = data.map((image) => {
    const { publicURL }:any = supabase.storage.from('PublicImages').getPublicUrl(image.name);
    return publicURL;
  });

  return imageUrls;
}
