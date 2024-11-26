
"use client"

import React, { useEffect, useState } from 'react'
import { ActiveUserAction } from '../ServerActions/ActiveUserAction'

const useActiveUser = <T>() => {
    const [userData, setUserData]= useState<T | null>(null)
    const [position, setPosition] = React.useState("bottom")
useEffect(()=>{

  ActiveUserAction<T>().then((data ) =>setUserData(data ))
},[])

return {userData}
}

export default useActiveUser
