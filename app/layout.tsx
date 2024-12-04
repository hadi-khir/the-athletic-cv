import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Port_Lligat_Slab } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";

const portLligatSlab = Port_Lligat_Slab({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "The Athletic - Hadi",
  description: "An Athletic style CV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={portLligatSlab.className}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            {children}
          </main>
        </SidebarProvider>
        <Analytics />
      </body>
    </html>
  );
}
