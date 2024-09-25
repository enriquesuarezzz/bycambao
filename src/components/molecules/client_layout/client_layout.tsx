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
      {pathname !== '/' && (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}
