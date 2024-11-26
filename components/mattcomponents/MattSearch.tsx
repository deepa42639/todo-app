import { Search } from 'lucide-react'
import React, { ForwardedRef, useEffect } from 'react'
import { Input } from '../ui/input'

type bt = React.ButtonHTMLAttributes<HTMLButtonElement>
type inp =  React.InputHTMLAttributes<HTMLInputElement>
const MattSearch = React.forwardRef<HTMLInputElement,inp>((props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="relative mt-4">
        <div className="CENTER size-[30px] rounded-md bg-black absolute top-[2.5px] left-[3px] ">
          <Search size={18} className="text-white" />
        </div>
        <Input
          onChange={() => {}}
          placeholder="Search"
          className="pl-[50px]"
          ref={ref}
          {...props} // Spread any additional props to the Input component
        />
      </div>
    );
  });

  MattSearch.displayName="MattSearch"

export default MattSearch
