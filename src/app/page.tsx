import Header from '@/components/molecules/header/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'byCambao | Inicio',
  description: 'Una razón para volver',
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-28 md:pt-40 lg:pt-60">
      <Header />
    </main>
  )
}
