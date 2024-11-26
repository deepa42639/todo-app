


import { cookies } from 'next/headers';
import React from 'react'
import { verifyToken } from '../helpers/VerifyToken';


export async function getActiveUser<T>() {

    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    
    if (token) {
       
        
      try {
        const payload = await verifyToken(token as string) as T;
    
    return payload
 
      } catch (error) {
        return null
    }
    }else{
        return null
    }
 
}


