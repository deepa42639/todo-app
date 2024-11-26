"use client"

import { ActiveUserAction } from '@/components/mattcomponents/ServerActions/ActiveUserAction'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useEffect, useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import useActiveUser from './hooks/useActiveUser'
import { useRouter } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const MattAvatar = ({title,sessionUser,AvatarItems}:{title?:string, sessionUser:{name?:string,imageSrc:string},AvatarItems:React.ReactNode[]}) => {

    
    const [position, setPosition] = React.useState("bottom")

const Route = useRouter()



  return (
    <div>
      
    
  
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <div className=' CENTER gap-3 hover:cursor-pointer'>
<Avatar>
<AvatarImage src={sessionUser.imageSrc} />
<AvatarFallback>CN</AvatarFallback>
</Avatar>

{

sessionUser.name?<p className=' text-[12px] hidden sm:block'>{sessionUser.name}</p>:null
}


</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px]">

        {title&&<><DropdownMenuLabel>{title}</DropdownMenuLabel> <DropdownMenuSeparator /></>}
      
       
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        
        {

AvatarItems.map((item)=>item)
        }
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu> 
     </div>
  )

}
export default MattAvatar
