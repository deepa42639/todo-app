import React from 'react'
import { DropdownMenuRadioItem } from '../ui/dropdown-menu'
import Link from 'next/link'

const AvatarAction = ({actionMethod,label}:{actionMethod:()=>void,label:string}) => {
  
  
    return (

    
    <DropdownMenuRadioItem onClick={()=>{actionMethod()}} className=' text-[12px]' value="bottom">{label}</DropdownMenuRadioItem>
  
  )
}

export default AvatarAction
