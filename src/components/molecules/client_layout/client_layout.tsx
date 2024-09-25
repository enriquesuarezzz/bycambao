'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/molecules/navbar/navbar'
import Footer from '@/components/molecules/footer/footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      {children}

      {/* only render navbar and footer on pages other than the home page */}
      {pathname !== '/' && (
        <>
          <Navbar />
          <Footer />
        </>
      )}
    </>
  )
}
