import { Metadata } from 'next'

import '@/app/globals.css'
import { Header } from '@/components/header'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/toaster'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ClerkProvider } from "@clerk/nextjs"
import Script from 'next/script'

const title = "snowBrain";
const description = `snowBrain - AI Driven snowflake data insights`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@kaarthikcodes",
  },
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`),
  themeColor: "#ffffff",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Script async src="https://umami-livid-seven.vercel.app/script.js" data-website-id="b0156ebc-cb72-4891-9ce8-4b7a71c5ca0e"></Script>
      <ClerkProvider>
        <body
          className={cn(
            'font-sans antialiased',
            fontSans.variable,
            fontMono.variable
          )}
        >
          <Toaster />
          <Providers attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              {/* @ts-ignore */}
              <Header />
              <main className="flex flex-1 flex-col bg-muted/50">{children}</main>
            </div>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  )
}
