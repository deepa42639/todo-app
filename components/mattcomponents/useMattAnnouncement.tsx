"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import MattAnnouncement from "./MattAnnouncement";

type AnnouncementContextType = {
  isVisible: boolean;
  setIsvisible: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  position: "top" | "bottom";
  setPosition: Dispatch<SetStateAction<"top" | "bottom">>;
};

const AnnouncementContext = createContext<AnnouncementContextType | null>(null);

const AnnnouncemetProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsvisible] = useState(false);
  const [message, setMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#000"); // Default to black
  const [position, setPosition] = useState<"top" | "bottom">("top"); // Default to top

  return (
    <AnnouncementContext.Provider
      value={{
        isVisible,
        setIsvisible,
        message,
        setMessage,
        backgroundColor,
        setBackgroundColor,
        position,
        setPosition,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

 const useMattAnnouncer = () => {
  const AnnouncementValues = useContext(AnnouncementContext);

  if (!AnnouncementValues) {
    throw new Error("MattAnnouncement used out of its context");
  }

  const Announce = (
    msg: string,
    color: string = "#000", // Default background color
    time?: number,
    position: "top" | "bottom" = "top" // Default to top
  ) => {
    AnnouncementValues.setMessage(msg);
    AnnouncementValues.setBackgroundColor(color);
    AnnouncementValues.setPosition(position);
    AnnouncementValues.setIsvisible(true);

    if (time) {
      setTimeout(() => {
        AnnouncementValues.setIsvisible(false);
      }, time);
    }
  };

  return {
    Announce,
  };
};

const MattAnnouncer = () => {
  const AnnouncementValues = useContext(AnnouncementContext);

  if (!AnnouncementValues) {
    throw new Error("MattAnnouncement used out of its context");
  }

  return (
    <MattAnnouncement
      setIsvisible={AnnouncementValues.setIsvisible}
      message={AnnouncementValues.message}
      isDisplayed={AnnouncementValues.isVisible}
      backgroundColor={AnnouncementValues.backgroundColor} // Passing background color prop
      position={AnnouncementValues.position} // Passing position prop
    />
  );
};

export { AnnnouncemetProvider, MattAnnouncer, useMattAnnouncer };
