import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({
  subsets: ['latin'],
  weight: '400', 
})
export const metadata: Metadata = {
  title: "aibytes ai solutions",
  description: "Integrate Ai to Your business",
  icons : {
    icon : [
      {
        url : "/logo.svg",
        href : "/logo.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <Navbar/>
                {children}
            </ThemeProvider>
      
      </body>
    </html>
  );
}
