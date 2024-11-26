"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Music2, User } from "lucide-react";
import {
  ComponentProps,
  ComponentType,
  JSXElementConstructor,
  ReactNode,
} from "react";

type navItemProp = {
  name: string;
  icon: React.ReactNode;
  path: string;
  basePath?: `/${string}`;

};

function MattNav({
  navItem,
  bottomItem,
  topItem
}: {
  navItem: navItemProp[];
  bottomItem?: navItemProp;
  topItem?: navItemProp;
 
}) {
  const Path = usePathname();

  return (
    <div className=" bg-slate-50  z-40 pt-8 pb-4 hidden sm:flex flex-col   border-r-2  h-screen w-[80px]  items-center justify-between">
      <div className="flex flex-col gap-5 h-[400px]">
       
      {

topItem? <div className="CENTER flex-col">

<div className="flex relative">
  <div className="SIB flex hover:cursor-pointer h-11 w-11 items-center justify-center rounded-lg">
    {topItem.icon}
  </div>
  <label className="left-10 opacity-0 transition-all duration-500 text-sm rounded-lg flex items-center justify-center bg-black absolute top-2 text-white w-auto pl-3 h-8 pr-3 z-40">
    {topItem.name}
  </label>
</div>

 


<p>.....</p>
</div>:null
}
       
       
        {navItem.map((navItem, index) => {
          const ActivePath = navItem.basePath
            ? `${navItem.basePath}${navItem.path}`
            : navItem.path;

          return (
            <Link
              key={index}
              href={
                navItem.basePath
                  ? `${navItem.basePath}${navItem.path}`
                  : navItem.path
              }
            >
              <div className="flex relative  ">
                <div className=" SIB flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg">
                  <div
                    className={cn(
                      " text-[#4A4B4B]",
                      Path == `${ActivePath}` ?  " text-red-600" : " "
                    )}
                  >
                    {navItem.icon}
                  </div>
                </div>
                <label className="left-10 opacity-0  transition-all duration-500   text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40">
                  {navItem.name}
                </label>
              </div>
            </Link>
          );
        })}
      </div>

     {

        bottomItem? <div className="CENTER flex-col gap-3">
        <p>.....</p>

        <Link
          href={
            bottomItem?.basePath
              ? `${bottomItem?.basePath}${bottomItem?.path}`
              : bottomItem?.path
          }
        >
          <div className="flex relative  ">
            <div className="SIB flex hover:cursor-pointer hover:bg-gray-200 h-11 w-11 CENTER rounded-lg">
              {/* <div className="CENTER pt-2 w-10 hover:bg-gray-300  h-10 rounded-md text-ApppTertiary"></div> */}

             {
                bottomItem.icon
             }
            </div>
            <label className="left-10 opacity-0 transition-all duration-500    text-sm rounded-lg CENTER bg-black absolute top-2  text-white w-auto pl-3 h-8 pr-3 z-40">
              {bottomItem.name}
            </label>
          </div>
        </Link>
      </div>:null
     }
    </div>
  );
}

export default MattNav;


