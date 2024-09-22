'use client'

import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/molecules/navbar/navbar'
import Footer from '@/components/molecules/footer/footer'
import { usePathname } from 'next/navigation'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* avoid layout on homepage */}
        {pathname !== '/' && (
          <>
            <Navbar />
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
