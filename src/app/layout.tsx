import { TokenCountProvider } from '@/components/token';
import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

const title = 'snowbrain';
const description = `snowbrain - an AI powered chatbot making Data Dance to Your Language's Tune`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@kaarthikcodes",
  },
  metadataBase: new URL("https://snowbrain.vercel.app/"),
  themeColor: "#ffffff"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TokenCountProvider>
            <Toaster />
            {children}
          </TokenCountProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
