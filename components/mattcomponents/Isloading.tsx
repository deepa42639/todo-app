
"use client"
import React from 'react'
import Loader from './Loader'
import { cn } from '@/lib/utils'

function IsLoading({children, size, isLoading,className}:{children:React.ReactNode,size?:number, isLoading:boolean,className?:string}) {
  
  

  return (
    <>
      
      <div className={cn("w-fit h-fit",className)}>

      {
      
      isLoading?<Loader size={size} IsLoading={isLoading}/>:children
      
      }
      </div>
     
    </>
  )
}

export default IsLoading
