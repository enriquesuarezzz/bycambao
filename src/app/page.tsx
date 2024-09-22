import { OnestText } from '@/components/atoms/onest_text'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'byCambao | Inicio',
  description: 'byCambao home page',
}

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <header className="flex flex-col gap-4 pb-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/logo.avif`}
          alt="byCambao party image"
          width={150}
          height={150}
          unoptimized
        />
        <OnestText text="byCambao" tag="h1" fontSize="46px" className="" />
      </header>
      <div className="flex flex-col items-center justify-center gap-10">
        <Link href={'/bycambao'}>
          <OnestText
            text="ByCambao"
            tag="h1"
            style="bold"
            fontSize="18px"
            className="flex transform transition-transform duration-300 hover:scale-105 hover:text-orange"
          />
        </Link>
        <Link href={'/tickets'}>
          <OnestText
            text="Tickets"
            tag="h1"
            style="bold"
            fontSize="18px"
            className="flex transform transition-transform duration-300 hover:scale-105 hover:text-orange"
          />
        </Link>
      </div>
    </main>
  )
}
