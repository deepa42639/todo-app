"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormProvider,
  useFormContext,
  FieldValues,
  UseFormReturn,
  SubmitHandler,
  FieldError,
  Merge,
  FieldErrorsImpl,
  Controller,
  Control,
  FieldValue,
} from "react-hook-form";

import { addDays, format } from "date-fns";
import {
  CalendarArrowDown,
  CalendarCheck,
  Calendar as CalendarIcon,
  CalendarPlus2,
  CircleCheck,
  CircleCheckBig,
  CloudUpload,
  FileAudio2,
  FileVideo2,
  Film,
  House,
  ImageUp,
  Lock,
  Mail,
  Pause,
  Phone,
  Play,
  ShieldAlert,
  Smartphone,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../../components/ui/textarea";
import Image from "next/image";
import {  FontPoppins } from "./Constants/Fonts";
import Link from "next/link";
import { routes } from "./Constants/AppRoutes";

type ChildClass = {
  children: React.ReactNode;
  className?: string;
};

type OptionType = { value: string; label: string };

type UploadedImageProps = {
  className?: string;
};

type MattImageFileProps = {
  name: string;
  label?: string;
  className?: string;
  trigger?: (videoName: string | null) => React.ReactNode;
};

type MattVideoFileProps = {
  name: string;
  label?: string;
  className?: string;
  trigger?: (videoName: string | null) => React.ReactNode;
};

type MattFileFileProps = {
  name: string;
  label: string;
  className?: string;
  trigger?: (videoName: string | null) => React.ReactNode;
};

const LabelWrapper = ({
  name,
  className,
  classLabel,
  label,
  error,
  children,
}: {
  name?: string;
  className?: string;
  label?: string;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  children: React.ReactNode;
  classLabel?: string;
}) => {
  return (
    <>
      <div className={cn(" w-full flex gap-1   items-center", className)}>
        {label ? (
          <label
            htmlFor={`${name}`}
            className={cn(" text-gray-600 text-[13px] flex-1 ", classLabel)}
          >
            {label}
          </label>
        ) : null}
        <p className=" text-red-600 text-[12px] ">{error as string}</p>
      </div>
      <label className=" w-full" htmlFor={`${name}`}>
        {children}
      </label>
    </>
  );
};

const useMediaInput = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [soundName, setSoundName] = useState<string | null>(null);
  const [videoName, setVideoName] = useState<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [SoundSrc, setSoundSrc] = useState<string | null>(null);

  const [VideoSrc, setVideoSrc] = useState<string | null>(null);

  const [isPlaying, SetIsplaying] = useState(false);

  const SoundRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (SoundRef.current) {
      SoundRef.current.volume = 0.3;
      if (isPlaying) {
        SoundRef.current.play();
      } else {
        SoundRef.current.pause();
      }
    }
  }, [isPlaying]);
  const SoundPlayPause = () => {
    SetIsplaying(!isPlaying);
  };

  const UploadedImage = ({ className }: UploadedImageProps) => {
    return (
      <>
        {src ? (
          <img
            src={src}
            alt=""
            className={cn(
              "w-24 h-24  rounded-sm  object-cover object-left-top  shadow-lg border-[3px] border-white",
              className
            )}
          />
        ) : (
          <div
            className={cn(
              " CENTER border border-gray-300 w-24 h-24 rounded-sm object-cover object-center",
              className
            )}
          >
            <ImageUp
              size={34}
              className="text-gray-400 group-hover:text-white"
            />
          </div>
        )}
      </>
    );
  };

  const UploadedVideo = ({ className }: UploadedImageProps) => {
    return (
      <>
        {VideoSrc ? (
          <video
            controls
            src={VideoSrc}
            className={cn(
              "w-[300px] h-[200px] rounded-sm object-cover object-center",
              className
            )}
          />
        ) : (
          <div
            className={cn(
              " CENTER border border-gray-300 w-24 h-24 rounded-sm object-cover object-center",
              className
            )}
          >
            <FileVideo2
              size={34}
              className="text-gray-400 group-hover:text-white"
            />
          </div>
        )}
      </>
    );
  };

  const MattImageFile = ({
    className,
    name,
    label,
    trigger,
  }: MattImageFileProps) => {
    const { control } = useFormContext();
    const [src, setSrc] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

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
              label={label ? label : ""}
            >
              <label
                htmlFor={name}
                className={cn(
                  "relative group  gap-2 items-center font-normal hover:cursor-pointer hover:bg-green-300 bg-gray-200 h-[35px] flex rounded-sm w-full pl-1",
                  className
                )}
              >
                {fileName ? (
                  <img
                    src={src ? src : ""}
                    alt=""
                    className="w-24 h-24 rounded-sm object-cover object-left-top shadow-lg border-[3px] border-white"
                  />
                ) : (
                  <ImageUp
                    size={28}
                    className="text-gray-100 group-hover:text-white"
                  />
                )}
                <span className="text-pretty text-[12px] w-full object-contain group-hover:text-white overflow-hidden line-clamp-1 whitespace-nowrap pr-4">
                  {fileName ? fileName : "No image chosen"}
                </span>
              </label>

              <input
                hidden
                id={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files.length > 0) {
                    field.onChange(e.target.files[0]);
                    setSrc(URL.createObjectURL(e.target.files[0]));
                    setFileName(e.target.files[0].name);
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

  const MattSoundFile = ({
    className,
    name,
    label,
    trigger,
  }: MattFileFileProps) => {
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
              label={label}
            >
              {trigger ? (
                trigger(videoName)
              ) : (
                <label
                  htmlFor={name}
                  className={cn(
                    "group gap-2 items-center font-normal hover:cursor-pointer hover:bg-green-300 bg-gray-200 h-[55px] flex rounded-sm w-full pl-3",
                    className
                  )}
                >
                  {soundName ? (
                    <>
                      {SoundSrc ? (
                        <audio hidden ref={SoundRef} src={SoundSrc} />
                      ) : null}

                      <div className=" flex gap-1 justify-center items-center h-full relative">
                        <CloudUpload className=" hover:text-green-900 text-white duration-500 relative  h-[60%]" />
                        <div
                          className=" flex h-[70%] rounded-full relative justify-center items-center bg-green-300 w-[40px] "
                          onClick={(e) => {
                            SoundPlayPause();
                          }}
                        >
                          {isPlaying ? (
                            <Pause className="group-hover:h-[70%] hover:text-green-900 text-white duration-500 relative h-[60%]" />
                          ) : (
                            <Play className="group-hover:h-[70%] hover:text-green-900 text-white duration-500 relative  h-[60%]" />
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <FileAudio2
                      size={34}
                      className="text-gray-400 group-hover:text-white"
                    />
                  )}

                  <span className="text-pretty w-full object-contain text-gray-500 group-hover:text-white overflow-hidden line-clamp-1 whitespace-nowrap pr-4">
                    {soundName ? soundName : "No sound file"}
                  </span>
                </label>
              )}

              <input
                hidden
                id={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e.target.files);
                  if (e.target.files && e.target.files.length > 0) {
                    if (SoundRef.current) {
                      SoundRef.current.pause();
                      SetIsplaying(false);
                    }
                    setSoundSrc(URL.createObjectURL(e.target.files[0]));
                    setSoundName(e.target.files[0].name);
                  }
                }}
                accept="audio/*"
                type="file"
              />
            </LabelWrapper>
          )}
        />
      </div>
    );
  };

  const MattVideoFile = ({
    className,
    name,
    label,
    trigger,
  }: MattVideoFileProps) => {
    const { control } = useFormContext();
    return (
      <div className=" w-full ">
        <Controller
          name={name}
          control={control}
          rules={{ required: { value: true, message: "Select required" } }}
          render={({ field, formState: { errors } }) => (
            <LabelWrapper
              name={name}
              className="flex-col items-start w-full"
              error={errors?.[name]?.message}
              label={label}
            >
              {trigger ? (
                trigger(videoName)
              ) : (
                <label
                  htmlFor={name}
                  className={cn(
                    "group gap-2 items-center font-normal hover:cursor-pointer hover:bg-green-300 bg-gray-200 h-[35px] flex rounded-sm !w-full pl-3",
                    className
                  )}
                >
                  {videoName ? (
                    <Film className="group-hover:h-[70%] text-white duration-500 relative w-[60px] h-[60%]" />
                  ) : (
                    <FileVideo2
                      size={28}
                      className="text-gray-200 group-hover:text-white"
                    />
                  )}

                  <span className="text-pretty w-full object-contain text-white group-hover:text-white overflow-hidden line-clamp-1 whitespace-nowrap pr-4">
                    {videoName ? videoName : "No video file"}
                  </span>
                </label>
              )}

              <input
                hidden
                id={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setVideoSrc(URL.createObjectURL(e.target.files[0]));
                    setVideoName(e.target.files[0].name);
                    field.onChange(e.target.files[0]);
                  }
                }}
                accept="video/*"
                type="file"
              />
            </LabelWrapper>
          )}
        />
      </div>
    );
  };

  return {
    UploadedImage,
    UploadedVideo,
    MattVideoFile,
    MattSoundFile,
    MattImageFile,
  };
};

export default function MattForm<T extends FieldValues>({
  Methods,
  watchErrors,
  children,
  className,
  title,
  indicator,
  onsubmit,
  watchValues
}: {
  Methods: UseFormReturn<T, any, undefined>;
  children: React.ReactNode;
  watchErrors?: boolean;
  watchValues?: boolean;
  onsubmit: (data: T) => void;
  className?: string;
  title?: string;
  indicator?:boolean
}) {


  return (
    <FormProvider {...Methods}>
      <form
        onSubmit={Methods.handleSubmit(onsubmit)}
         autoComplete="off"
        className={cn(
          " relative flex-col w-[300px] bg-red-100  p-6 px-8 rounded-md  flex items-center justify-center ",
          className
        )}
      >

{

indicator?(Object.keys(Methods.formState.errors).length > 0?<ShieldAlert size={25} className="  absolute top-5 left-3" />:<CircleCheckBig size={25}  className=" text-gree-400 absolute top-5 left-3"  />):null}
        {title && (
              <h1 className={cn(" text-[20px]  mb-4 ", FontPoppins)}> {title}</h1>
            
         
        )}
        {children}

        {watchValues ? (
          <pre>{JSON.stringify(Methods.watch(), null, 2)}</pre>
        ) : null}

{watchErrors?Methods.formState.errors ? (
          <pre>

{JSON.stringify(
    Object.keys(Methods.formState.errors).reduce((acc, key) => {
      const error = Methods.formState.errors[key];
      acc[key] = typeof error?.message === "string" ? error.message : "Unknown error";
      return acc;
    }, {} as Record<string, string | undefined>),
    null,
    2
  )} 
  </pre>):null:null
  
  }
      </form>
    </FormProvider>
  );
}

type TypeOfInput= "textInput" | "password" | "email"
type IconType = "user" | "lock" | "telephone" | "mobile" | "address" | "email"
function MattTextField({
  className,
  type="textInput",
  name,
  label,
  placeholder,
  Icon,
  readOnly
}: {
  name: string;
  placeholder?: string;
  label: string;
  className?: string;
  type?:TypeOfInput;
  Icon?:IconType,
  readOnly?:boolean
}) {

  const TextfieldRef = useRef<HTMLInputElement | null>(null)
  const [isReadOnly, setIsReadOnly] = useState(true);
 const [focus,setFocus] = useState(false);

  const Icons: Record<IconType,React.ReactNode> ={
    user:<UserRound  className={cn("absolute size-[15px] top-[9px] left-[12px] duration-500",focus?"text-red-600 size-[16px]":"text-gray-500-600 ")}/>,
    lock:<Lock  className={cn("absolute size-[15px] top-[9px] left-[12px] duration-500",focus?"text-red-600 size-[16px]":"text-gray-500-600 ")} />,
    mobile:<Smartphone  className={cn("absolute size-[15px] top-[9px] left-[12px] duration-500",focus?"text-red-600 size-[16px]":"text-gray-500-600 ")} />,
    address:<House  className={cn("absolute size-[15px] top-[9px] left-[12px] duration-500",focus?"text-red-600 size-[16px]":"text-gray-500-600 ")} />,
    telephone:<Phone  className={cn("absolute size-[15px] top-[9px] left-[12px] duration-500",focus?"text-red-600 size-[16px]":"text-gray-500-600 ")} />,
email:<Mail className={cn("absolute size-[15px] top-[9px] left-[12px] duration-500",focus?"text-red-600 size-[16px]":"text-gray-500-600 ")}/>
  }
  
  
  const {
    register,
    formState: { errors },
  } = useFormContext();


  return (
    <div className=" CENTER flex-col gap-1 w-full">
      <LabelWrapper  name={name} error={errors?.[name]?.message} label={label}>
       <div className="relative">

       <Input

  
 readOnly={readOnly}
        type={type}
          id={name}
          {...register(name, {
            required: { value: true, message: "Required" },
          })}
          placeholder={placeholder}
          className={cn(
            " placeholder:text-gray-300 w-full h-[35px] border-gray-300  focus-visible:ring-gray-300  focus-visible:ring-1 focus-visible:ring-offset-0",
            `${className} ${Icon?"pl-10":""}`  
          )}


          ref={(e) => {
            register(name).ref(e); // Register the input
            TextfieldRef.current = e; 
            
         
          }}

          onFocus={()=>{
            setFocus(true)
            setIsReadOnly(false)
          }}
          onBlur={()=>setFocus(false)}

        />

        { Icon?Icons[Icon]:null}
       </div>
      </LabelWrapper>
    </div>
  );
}

function MattSubmit({ children, className }: ChildClass) {
  return (
    <Button className={cn( " h-[35px] text-[12px] w-full ",className)}>
      {children}
    </Button>
  );
}

function MattSubmitAlternative({isSubmit, LoginLabel,SignUpLabel,reverse,className }: {LoginLabel:string,SignUpLabel:string,reverse?:boolean,className?:string,isSubmit:"login" | "signup"}) {
  return (
 <div className={cn(" CENTER gap-2 w-full", `${className}  ${reverse?" flex-row-reverse":""}`)}>

{

  isSubmit==="login"?<Button variant={isSubmit==="login"?"default":"outline"} type={isSubmit=="login"?"submit":"button"} className={cn(" hover:bg-slate-700 h-[35px] text-[12px] w-full ")}>
  {LoginLabel}
  </Button>:<Link href={routes.login} className="w-full" >
  <Button variant="outline" type={"button"} className={cn(" h-[35px] text-[12px] w-full ")}>
    {LoginLabel}
    </Button>
  </Link>
}

   



    {

isSubmit==="signup"?<Button  type="submit"  variant="default" className={cn(" h-[35px] text-[12px] w-full ")}>
{SignUpLabel}
</Button>:<Link href={routes.register} className="w-full">
<Button variant="outline" type={"button"} className={cn(" h-[35px] text-[12px] w-full ")}>
  {SignUpLabel}
  </Button>
</Link>
}
 </div>
  );
}

function MattSelect({
  className,
  name,
  label,
  Options,
  placeholder,
}: {
  name: string;
  label: string;
  Options: OptionType[];
  className?: string;
  placeholder?: string;
}) {
  const { control, register } = useFormContext();
  return (
    <div className=" CENTER flex-col gap-1 w-full">
      <Controller
        name={name}
        control={control}
        rules={{ required: { value: true, message: "Select required" } }}
        render={({ field, formState: { errors } }) => (
          <LabelWrapper
            name={name}
            className=" "
            error={errors?.[name]?.message}
            label={label}
          >
            <Select onValueChange={field.onChange}>
              <SelectTrigger className={cn(" h-[35px] w-full ", className)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Options?.map((value) => (
                    <SelectItem key={value.value} value={value.value}>
                      {value.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelWrapper>
        )}
      />
    </div>
  );
}

function MattRadioGroup({
  Options,
  className,
  name,
  label,
}: {
  name: string;
  label: string;
  className?: string;
  Options: OptionType[];
}) {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: { value: true, message: "Required" } }}
        render={({ field, formState: { errors } }) => (
          <LabelWrapper
            name={name}
            className="  flex-col items-start mb-2"
            error={errors?.[name]?.message}
            label={label}
          >
            <RadioGroup
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              {Options?.map((value) => (
                <div
                  key={value.value}
                  className={cn(" mt-1 flex items-center space-x-2", className)}
                >
                  <RadioGroupItem value={value.value} id={value.value} />
                  <Label htmlFor={value.value}>{value.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </LabelWrapper>
        )}
      />
    </div>
  );
}

function MattCheckBox({
  className,
  name,
  label,
  sideAction,
}: {
  name: string;
  label: string;
  className?: string;
  sideAction?:()=>void
}) {
  const { control } = useFormContext();

  return (
    <div className=" w-full">
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => (
          <div className="mb-4 relative CENTER flex-row-reverse  gap-1 w-full ">
            <LabelWrapper
              name={name}
              className="  absolute font-normal text-[11px] mt-[17px] w-full pl-6  "
              error={errors?.[name]?.message}
              label={label}
            >
              <Checkbox
                id={name}
                className=" absolute"
                checked={field.value}
                onCheckedChange={(e)=>{

                  if(sideAction){
                    sideAction()
                  }
                  field.onChange(e)
                }}
              />
            </LabelWrapper>
          </div>
        )}
      />
    </div>
  );
}

function MattDatePicker({
  name,
  label,
  className,
}: {
  name: string;
  label: string;
  className?: string;
}) {
  const [date, setDate] = React.useState<Date>();
  const { control, register, setValue } = useFormContext();



  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: { value: true, message: "Select required" } }}
        render={({ field, formState: { errors } }) => (
          <LabelWrapper
            name={name}
            className=" mb-4"
            error={errors?.[name]?.message}
            label={label}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) => {
                    const NewDate = addDays(new Date(), parseInt(value));
                    setDate(NewDate);

                    field.onChange(NewDate);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="0">Today</SelectItem>
                    <SelectItem value="1">Tomorrow</SelectItem>
                    <SelectItem value="3">In 3 days</SelectItem>
                    <SelectItem value="7">In a week</SelectItem>
                  </SelectContent>
                </Select>
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={field.onChange}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </LabelWrapper>
        )}
      />
    </div>
  );
}

function MattHtmlDatePicker({
  name,
  label,
  className,
}: {
  name: string;
  label: string;
  className?: string;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

const handleClick = ()=>{

  const dateInput  = document.getElementById(name) 

  if(dateInput){

    dateInput.showPicker()
  }
}
const [iDate,setIdate] = useState<string | null>(null)
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: { value: true, message: "Select required" } }}
      render={({ field, formState: { errors } }) => (
    
          <LabelWrapper
            name={name}
            className=" -mb-[3px] "
            error={errors?.[name]?.message}
            label={label}
          ><div className="relative w-full" onClick={()=>{handleClick()}}>
           
           <label
              
                className={cn(
                  "absolute z-10  group  gap-2 items-center font-normal hover:cursor-pointer hover:bg-purple-400 bg-purple-500 h-[35px] flex rounded-sm w-full pl-1",
                  className
                )}
              >
                {iDate ? <CalendarCheck  className="text-purple-200 group-hover:text-white"/>  : (
                 <CalendarPlus2  className="text-purple-900 group-hover:text-white"/> 
                )}
                <span className="text-pretty text-[12px] w-full object-contain text-purple-900 group-hover:text-white overflow-hidden line-clamp-1 whitespace-nowrap pr-4">
                  {iDate ?  <span className="text-white">{iDate}</span>:"Select a date"}
                </span>
              </label>
           
            <div className=" flex flex-col relative w-full">
             
              
              <input
                id={name}
                value={field.value}
                type="date"
                onChange={(e)=>{
                  const NewDate = addDays(new Date(), parseInt(e.target.value));
                  setIdate(format(e.target.value,"PPP"))
                  field.onChange(NewDate)

                }}
                className=" opacity-0 hover:cursor-pointer hover:bg-gray-500 hover:text-white w-full mb-4 bg-slate-200 h-[45px] px-4 rounded-sm"
              />
            </div>
            </div>
          </LabelWrapper>
       
      )}
    />
  );
}

function MattTextArea({
  name,
  label,
  className,
  placeholder,
  readOnly,
}: {
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  readOnly?:boolean
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <LabelWrapper
      name={name}
      className="  "
      error={errors?.[name]?.message}
      label={label}
    >
      <Textarea 

readOnly={readOnly}
        {...register(name)}
        placeholder={placeholder}
        className={cn(" resize-none text-gray-500",className)}
      />
     
    </LabelWrapper>
  );
}

export type { OptionType };
export {
  useMediaInput,
  MattTextArea,
  MattHtmlDatePicker,
  MattForm,
  MattTextField,
  MattSubmit,
  MattSelect,
  MattDatePicker,
  MattRadioGroup,
  MattCheckBox,
  MattSubmitAlternative
};
