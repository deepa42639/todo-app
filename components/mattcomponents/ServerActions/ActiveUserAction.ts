
"use server"

import React from 'react'
import { getActiveUser } from '../api/getActiveUser'

type PayLoadType = {userName:string,UserId:string,src:string}  
 function  ActiveUserAction<T>() {

    const Data =  getActiveUser<PayLoadType>() as Promise<T>

   
return Data
}

export  {ActiveUserAction}
