import { Toaster } from "sonner";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EdgeStoreProvider } from "@/lib/edgestore";
import "./globals.css";

import { ConvexClientProvider } from "@/components/ui/provider/convex-provider";
import { ThemeProvider } from "@/components/ui/provider/theme-provider";
import { ModalProvider } from "@/components/ui/provider/modal-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.svg",
        href: "/logo.svg"
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ConvexClientProvider>
        <EdgeStoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="motion-theme-2"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </EdgeStoreProvider>
      </ConvexClientProvider>
      </body>
    </html>
  )
}
