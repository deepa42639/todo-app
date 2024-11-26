import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React from 'react'

const MattModal = ({className,trigger,children, description}:{className:string,trigger:React.ReactNode,children:React.ReactNode, title?:string, description?:React.ReactNode}) => {
  return (
    <AlertDialog >
    <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
    <AlertDialogContent className={className}>
      <AlertDialogHeader>
       
        <AlertDialogDescription>
        {description}
        </AlertDialogDescription>
      </AlertDialogHeader>

      {children}
      <AlertDialogFooter >
    
        {/* <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
       */}
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default MattModal
