import { MontserratText } from '@/components/atoms/monserrat_text'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'byCambao | Inicio',
  description: 'byCambao home page',
  openGraph: {
    title: 'byCambao',
    description: 'Una razón para volver',
    url: 'https://www.bycambao.com',
    siteName: 'byCambao',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMAGES_PATH}images/contact_header.avif`,
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/beige_logo.mov`}
      />

      {/* Contenido encima del video */}
      <header className="relative z-10 flex flex-col gap-4 pb-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/logo.avif`}
          alt="byCambao party image"
          width={250}
          height={250}
          unoptimized
          priority
          className="lg:h-[200px] lg:w-[300px]"
        />
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 pt-10">
        <Link href={'/bycambao'}>
          <MontserratText
            text="BYCAMBAO"
            tag="h1"
            style="bold"
            fontSize="42px"
            className="flex transform text-orange transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <Link href={'/tickets'}>
          <MontserratText
            text="TICKETS"
            tag="h1"
            style="bold"
            fontSize="42px"
            className="flex transform text-orange transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
    </main>
  )
}
