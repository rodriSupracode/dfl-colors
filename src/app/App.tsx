"use client";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";

export const App = ({ children }: { children: ReactNode }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
