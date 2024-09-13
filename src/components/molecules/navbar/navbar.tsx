import { OnestText } from '@/components/atoms/onest_text'
import { SacramentoText } from '@/components/atoms/sacramento'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex w-full items-center justify-center gap-5 pt-5 md:justify-between md:px-5 md:pt-10 lg:px-16">
      <Image
        src={'/images/logo.avif'}
        alt="byCambao logo"
        width={100}
        height={100}
        className="h-[50px] w-[60px] md:h-[60px] md:w-[90px]"
        unoptimized
      />
      <div className="mt-4 flex gap-3 md:gap-10">
        <Link href={'/'}>
          <OnestText
            text="Inicio"
            tag="h1"
            style="bold"
            fontSize="16px"
            className="relative block w-fit text-xl after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-orange after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
          />
        </Link>
        <Link href={'/'}>
          <OnestText
            text="Contacto"
            tag="h1"
            style="bold"
            fontSize="16px"
            className="relative block w-fit text-xl after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-orange after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
          />
        </Link>
        <Link href={'/'}>
          <OnestText
            text="Equipo"
            tag="h1"
            style="bold"
            fontSize="16px"
            className="relative block w-fit text-xl after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-orange after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
          />
        </Link>
      </div>
      <div className="mt-4 hidden gap-4 md:flex">
        <SacramentoText
          text='"Una razón para volver"'
          tag="h1"
          style="bold"
          fontSize="16px"
          className=""
        />
      </div>
    </nav>
  )
}
