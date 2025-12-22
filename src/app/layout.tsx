'use client';
//Root layout

import { ThemeProvider } from "@/components/layout/Theme-Provider"
import localFont from 'next/font/local';
import "@/app/globals.css"

// const Font_Vazir_B = localFont({
//   src:"../fonts/Vazirmatn-Bold.woff2",
//   variable:"--font-vazirmatn-bold",
// });

const Font_Vazir_R = localFont({
  src:"../fonts/Vazirmatn-Regular.woff2",
    variable:"--font-vazirmatn-regular",

});

export default function RootLayout({ children,}:{ children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${Font_Vazir_R.className} md:flex flex-row `} id="Landing" >
        <ThemeProvider
          attribute="class" // تنظیم ضروری tailwindcss
          defaultTheme="system" //تم پیشفرض سیستم عامل
          enableSystem
          disableTransitionOnChange
        >
           <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
//توجه : اضافه کردن کلاس سوبر هایدریشن به تگ بالا برای جلوگیری از خطای هیدریشن در مورد تزریق کلاس تم توسط نکست تمز ضروری است.
