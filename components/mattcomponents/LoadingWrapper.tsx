
"use client"
import React from 'react'
import Loader from './Loader'
import { cn } from '@/lib/utils'

function LoadingWrapper({children, isLoading,className,isSmallScreen}:{children:React.ReactNode, isLoading:boolean,className?:string,isSmallScreen?:boolean}) {
  
  const hFull = " h-full "

  return (
    <>
      
      <div className={cn(" CENTER h-screen w-screen ",isSmallScreen?hFull:" "+className)}>

      {
      
      isLoading?<Loader  IsLoading={isLoading}/>:children
      
      }
      </div>
     
    </>
  )
}

export default LoadingWrapper
