"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  [key: string]:any;
}
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    // ThemeProvider    تمام پروپ های مورد نیار را از ما میگیرد
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}