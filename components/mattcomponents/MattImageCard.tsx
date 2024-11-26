import { Share2, ThumbsUp } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const MattImageCard = () => {
  return (
  <div className='  relative CENTER gap-2 flex-col max-w-[350px] w-full'>


<div className='group relative w-full  h-[240px] overflow-hidden bg-cover bg-center bg-[url("https://images.pexels.com/photos/26690287/pexels-photo-26690287/free-photo-of-atlantic-puffins-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")] rounded-lg bg-slate-500'>

{/* Hidden div that will be shown on hover */}
<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
  
  {/* Content at the bottom */}
  <div className='flex flex-col justify-end h-full px-4'>
    {/* Spacing div */}
    <div className='flex-1'></div>

    {/* Content at the bottom */}
    <div className='CENTER !justify-between w-full h-[60px]'>

      {/* Price text */}
      <h1 className='font-bold text-[25px] text-white'>R15.00</h1>

      {/* Icon group */}
      <div className='flex gap-3'>
        {/* Like button */}
        <div className='flex items-center gap-2 hover:cursor-pointer'>
          <div className='w-[30px] h-[30px] rounded-md flex items-center justify-center bg-slate-50 hover:bg-AppSecondary'>
            <ThumbsUp size={15} className='text-gray-600 hover:text-white' />
          </div>
          <p className='text-white'>12k</p>
        </div>

        {/* Share button */}
        <div className='flex items-center gap-2 hover:cursor-pointer'>
          <div className='w-[30px] h-[30px] rounded-md flex items-center justify-center bg-slate-50 hover:bg-AppSecondary'>
            <Share2 size={15} className='text-gray-600 hover:text-white' />
          </div>
          <p className='text-white'>12k</p>
        </div>
      </div>

    </div>

  </div>

</div>

</div>

<div className='  w-full CENTER !justify-between'>
   
   <Link href="/checkout">
   <Button className='  h-[30px] text-[12px] bg-AppSecondary text-white'>Request</Button>

   </Link>
    <p className=' text-xs sm:text-xs'>Malwande oxo</p>
</div>
  </div>
  )
}

export default MattImageCard
