import localFont from 'next/font/local'
import './globals.css'
import CookiesPopup from '@/components/molecules/cookies_pop_up/cookies_pop_up'
import ClientLayout from '@/components/molecules/client_layout/client_layout'

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
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} image-background antialiased`}
      >
        {children}
        {/* avoid layout on homepage */}

        <>
          <CookiesPopup />
          <ClientLayout>{children}</ClientLayout>
        </>
      </body>
    </html>
  )
}
