import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, House, Ticket } from "lucide-react"

export function StatsCard({className,title, description, icon}:{className?:string,title:string, description:string, icon:React.ReactNode}) {
  return (
    <Card className="w-[250px]">
      <CardHeader>
       <div className=" CENTER !justify-between w-full ">

      
       <CardTitle className={className}>{title} </CardTitle>

{icon}

       </div>

       <div className=" group CENTER !justify-between w-full    hover:cursor-pointer">
       <CardDescription className=" group-hover:text-AppPrimary">{description}</CardDescription>
       <ArrowRight  className=" group-hover:text-AppPrimary"/>

       </div>
      
      </CardHeader>
   
    </Card>
  )
}
