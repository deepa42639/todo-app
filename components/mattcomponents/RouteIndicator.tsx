"use client";
import { CircleGauge, House, KeyRound, UserRoundPlus, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const RouteIndicator = () => {
  const Path = usePathname();
  let page = "";
let Icon = <House />
  switch (Path) {
    case "/":
      page = "Home";
      Icon = <House />;
      break;
    case "/register":
      page = "Register";
      Icon = <UserRoundPlus />;
      break;
    case "/login":
      page = "Login";
      Icon = <KeyRound />;
      break;
    case "/dashboard":
      page = "Dashboard";
      Icon = <CircleGauge />;
      break;
    case "/add":
      page = "Home";
      Icon = <House />;
      break;

    default:
      break;
  }

  return (
    <div className=" w-full h-[50px]  CENTER font-bold gap-5 border-b-2">
    {Icon}
      <h1>{page}</h1>
    </div>
  );
};

export default RouteIndicator;
