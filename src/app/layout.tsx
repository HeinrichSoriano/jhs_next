import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from "@next/font/local";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

const font_zector = LocalFont({
	src: "../../public/fonts/Zector.ttf",
	variable: "--font-zector",
});

const font_logotype_bold = LocalFont({
  src: "../../public/fonts/logotype_3/LOGOTYPE-ExtraBold.otf",
  variable: "--font-logotype-bold"
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[inter.className,  font_zector.variable, font_logotype_bold.variable].join(" ")}>
        <NextTopLoader color="#9966ff"/>
        {children}
      </body>
    </html>
  )
}
