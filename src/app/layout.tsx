import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SideNav } from "@/components/Sidenav";
import { BottomNav } from "@/components/BottomNav";
import Footer from "@/components/Footer";

const gothic = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "あかねの留学生活",
  description: "私の日本留学生活",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          gothic.className
        )}
      >
        <SideNav />
        {children}
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
