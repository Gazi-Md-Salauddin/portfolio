import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/shared/Navbar/Navbar';
import Cursor from '@/components/Cursor';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gazi Md Salauddin | Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gradient-to-br from-[#020617] via-[#0B1220] to-[#020617] text-white">
        <Navbar/>
        <main>{children}</main>
        <Cursor/>
        <Toaster/>
        </body>
    </html>
  );
}
