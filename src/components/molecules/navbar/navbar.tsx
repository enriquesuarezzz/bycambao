import { MontserratText } from '@/components/atoms/monserrat_text'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex w-full items-center justify-center gap-5 pt-5 md:gap-20 md:px-5 md:pt-10 lg:justify-between lg:pl-16 lg:pr-10">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/logo.avif`}
        alt="byCambao logo"
        width={100}
        height={100}
        className="h-[40px] w-[60px] md:h-[60px] md:w-[90px]"
        unoptimized
      />
      <div className="mt-4 flex gap-3 md:gap-10">
        <Link href={'/'}>
          <MontserratText
            text="Inicio"
            fontSize="20px"
            className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-orange after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
          />
        </Link>
        <Link href={'/contacto'}>
          <MontserratText
            text="Contacto"
            fontSize="20px"
            className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-orange after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
          />
        </Link>
        <Link href={'/'}>
          <MontserratText
            text="Tickets"
            fontSize="20px"
            className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-orange after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
          />
        </Link>
      </div>
      <div className="mt-4 hidden gap-4 lg:flex">
        <MontserratText
          text='"Exclusive parties for exclusive people"'
          fontSize="13px"
          className=""
        />
      </div>
    </nav>
  )
}
