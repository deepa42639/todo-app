import React, { ChangeEvent, useState } from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { LabelWrapper } from '../LabelWrapper'
import { cn } from '@/lib/utils'
import { ImageUp } from 'lucide-react'

const useImageSrc = () => {
  
// const [srcArray, seSrcArray] =useState<Record<string,{src:string,fileName:string} | null>>({})
const [srcArray, seSrcArray] =useState<Record<string,{src:string,fileName:string} | null>>({})
const updateSrcArray = (key:string,src:string,fileName:string)=>{

    seSrcArray((prev)=>({...prev,[key]:{src,fileName}}))

}


const ImageDisplay = ({ className,name }: UploadedImageProps & {name:string}) => {

  


    return (
      <>
  

        {srcArray[name]?.src? (
          <img
            src={srcArray[name]?.src}
            alt=""
            className={cn(
              "w-24 h-24  rounded-sm  object-cover object-left-top  shadow-lg border-[3px] border-white",
              className
            )}
          />
        ) : <div  className={cn(
          " CENTER border border-gray-300 w-24 h-24 rounded-sm object-cover object-center",
          className
        )}>
          
          <ImageUp
                    size={34}
                    className="text-gray-400 group-hover:text-white"
                  />
          </div>}
      </>
    );
  };

const MattImageFile =  ({
    className,
    name,
    label,
    trigger,
  }: MattImageFileProps)=> {
    const { control } = useFormContext();


   
    return (
      <div>
        <Controller
          name={name}
          control={control}
          rules={{ required: { value: true, message: "Select required" } }}
          render={({ field, formState: { errors } }) => (
            <LabelWrapper
              name={name}
              className="flex-col items-start"
              error={errors?.[name]?.message}
              label={label?label:""}
            >
              <label
                htmlFor={name}
                className={cn(
                  "relative group  gap-2 items-center font-normal hover:cursor-pointer hover:bg-green-300 bg-gray-200 h-[35px] flex rounded-sm w-full pl-1",
                  className
                )}
              >

          
        {srcArray[name]?.src? 

          (<ImageDisplay name={name} className="group-hover:scale-110 duration-500 relative w-[60px] h-[70%] scale-100 shadow-md ring-2 border-1 border-white ring-white"/>
          ):

(
  <ImageUp
    size={28}
    className="text-gray-100 group-hover:text-white"
  />
)
        }       

<span className="text-pretty text-[12px]  w-full object-contain  group-hover:text-white overflow-hidden line-clamp-1 whitespace-nowrap pr-4">
                  {srcArray[name]?.fileName ? srcArray[name]?.fileName : "No image chosen"}
                </span>
            
              </label>

              <input
                hidden
                id={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
               


                  if (e.target.files && e.target.files.length > 0) {
                    field.onChange(e.target.files[0]);

                    updateSrcArray(name,URL.createObjectURL(e.target.files[0]),e.target.files[0].name)
                 
                  }
                }}
                accept="image/*"
                type="file"
              />
            </LabelWrapper>
          )}
        />
      </div>
    );
  };


return {ImageDisplay,MattImageFile}

}




export default useImageSrc
