import React from 'react'
import { MattTextField, MattSubmit } from './MattForm'
import IsLoading from './Isloading'
import { SendHorizontal } from 'lucide-react'

const SubmitInput = ({onError,name,label, SubmitFn}:{name:string,label?:string, onError?:{isError:boolean,message:string} , SubmitFn:()=>void}) => {
  return (
 

<div className=' CENTER !flex-col gap-1 w-full '>

 <div className=' relative CENTER w-full gap-2'>

 <div className=' CENTER !flex-col gap-1 w-full'>



<MattTextField name={name} label={label?label:""}/>
{onError?.isError?<p className=' absolute -top-[25px] left-0   text-red-500 text-[10px]'>{onError.message}</p>:null}
</div>


<IsLoading className='w-[90px] CENTER' size={4} isLoading={false}>

<div onClick={()=>{SubmitFn()}} className=' !w-[60px]   hover:bg-green-400 hover:cursor-pointer h-[35px] bg-black rounded-md CENTER' ><SendHorizontal size={15} className=" text-white" /></div>

</IsLoading>

 </div>

</div>

  )
}

export default SubmitInput
