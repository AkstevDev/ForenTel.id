import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { LoadingScreen } from "@/components/loading-screen"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "ForenTel - OSINT & Digital Profiling Platform",
  description:
    "Professional OSINT, digital profiling, and monitoring services. Algorithms work together with the brain.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <LoadingScreen />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
