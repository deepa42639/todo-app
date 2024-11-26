"use client"
import React from 'react'
import { PulseLoader } from 'react-spinners'

function Loader({IsLoading, size,color}:{IsLoading:boolean, size?:number, color?:string}) {
  return (
    <div>
      <PulseLoader
    color={color?color:"#f4012d"}
    loading={IsLoading}
  
    size={size?size:10}
  
  />
    </div>
  )
}

export default Loader
