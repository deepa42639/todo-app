"use client"
import React, { useEffect } from 'react';
import { Progress } from '../ui/progress';
import Loader from './Loader';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";

const MattProgress = ({ className,toastData, progress, color = "orange" }: { progress: number, color?: string, className?:string,toastData?:{Heading?:string,Message?:string} }) => {
  const { toast } = useToast();

  useEffect(() => {

    if(toastData){

      if (progress == -1) {
        toast({
          title: toastData.Heading?toastData.Heading:"",
          description: toastData.Message?toastData.Message:"",
        });
      }
    }
    
  }, [progress]); 

  return (
    <>
      {progress >= 100 ? (
        <Loader size={10} IsLoading />
      ) : (
        <Progress color={color} value={progress} className={cn("h-2", className)} />
      )}
    </>
  );
};

export default MattProgress;
