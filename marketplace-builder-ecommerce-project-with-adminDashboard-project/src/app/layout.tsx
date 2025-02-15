"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const[isLoading, setIsLoading] = useState(true);
// useEffect(() => {
//   setIsLoading(true);
//   const timer = setTimeout(() => {
//     setIsLoading(false);
//   }, 2000);
//   return () => clearTimeout(timer);
// }, [pathname]);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");
  const isHome = pathname.startsWith("/sign-in");
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");
  
  const studioAndHome = !isStudio && !isHome && !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews

  return (
    <ClerkProvider>
    <html lang="en">
      <head>
     
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {studioAndHome}
        {children}
       
      <Footer/>
      </body>
    </html>
    
    </ClerkProvider>
  );
}
