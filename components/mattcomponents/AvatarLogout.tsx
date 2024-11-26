import React from 'react'
import { DropdownMenuRadioItem } from '../ui/dropdown-menu'
import Link from 'next/link'

const AvatarLogout = ({label}:{label:string}) => {
  return (

   
    <DropdownMenuRadioItem onClick={()=>{window.location.href="/api/signout"}} className=' text-[12px]' value="bottom">{label}</DropdownMenuRadioItem>
  
  )
}

export default AvatarLogout
