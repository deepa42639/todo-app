"use client";

import { X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";


type AnnouncerProps = {
  message: string;
  backgroundColor: string;
  position: "top" | "bottom";
  setIsvisible: Dispatch<SetStateAction<boolean>>;
  href?: string;
  linkLabel?: string;
  isDisplayed: boolean;
};

const MattAnnouncement: React.FC<AnnouncerProps> = ({
  message,
  backgroundColor = "#12dcd5",
  position = "top", // Default to top
  setIsvisible,
  href,
  linkLabel,
  isDisplayed,
}) => {


  return (
    <div
      style={{ backgroundColor }}
      className={`fixed z-40 w-screen text-white h-[60px] px-12 flex items-center transition-transform duration-500 ease-in-out ${
        isDisplayed
          ? position === "top"
            ? "translate-y-0 top-0"
            : "translate-y-0 bottom-0"
          : position === "top"
          ? "-translate-y-full top-0"
          : "translate-y-full bottom-0"
      }`}
    >
      <p className="flex-1">
        Hi!! <span className="text-2xl">&#128075;</span> <span className="capitalize"></span> &#160; &#160; &#160; &#160; | &#160; &#160; &#160; &#160; {message}{" "}
        {href && linkLabel ? <Link href={href}>{linkLabel}</Link> : null}
      </p>
      <X onClick={() => setIsvisible(false)} className="text-white hover:cursor-pointer" />
    </div>
  );
};

export default MattAnnouncement;
