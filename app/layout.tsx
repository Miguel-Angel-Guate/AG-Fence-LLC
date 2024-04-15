import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import Navbar from "./components/Navbar";
import AGFooter from "./components/AGFenceFooter";



import { Lato } from 'next/font/google'
import SectionStatusLink from "./components/shared/SectionStatus";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`
   /*  yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    }, */
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        <SectionStatusLink />
        {children}
        <Analytics />
        <AGFooter />
      </body>
    </html>
  );
}
