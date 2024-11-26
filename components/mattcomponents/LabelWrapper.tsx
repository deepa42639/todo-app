import { cn } from "@/lib/utils";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

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
         {
  
          label? <label
          htmlFor={`${name}`}
          className={cn(" text-gray-600 text-[13px] flex-1 ", classLabel)}
        >
          {label}
        </label>:null
         }
          <p className=" text-red-600 text-[12px] ">{error as string}</p>
        </div>
        <label className=" w-full" htmlFor={`${name}`}>
          {children}
        </label>
      </>
    );
  };



  export {LabelWrapper}