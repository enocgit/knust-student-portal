import SideNav from '@/components/SideNav'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'


export const metadata: Metadata = {
  title: 'KNUST Student Portal',
  description: 'Generated by create next app',
}

// const nunito = Roboto({subsets: ["latin"], weight: ["300", "400", "500", "700", "900"]})
// const nunito = Nunito({subsets: ["latin"]})
const nunito = Nunito({subsets: ["latin"], weight: ["400"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${nunito.className} bg-grayscale-100`}>
        <SideNav>
          {children}
        </SideNav>
      </body>
    </html>
  )
}
