import { MontserratText } from '@/components/atoms/monserrat_text'
import { IArrow } from '@/components/atoms/svg/IArrow'
import { IInstagram } from '@/components/atoms/svg/IInstagram'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  //Links title array
  const links = [
    {
      title: 'Inicio',
    },
    {
      title: 'Contacto',
    },
    {
      title: 'Tickets',
    },
  ]
  return (
    //footer component
    <footer className="bottom-0 flex w-full pb-6 pl-4 pr-4 pt-10 md:pl-10 md:pr-20 md:pt-20">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col items-end justify-between pb-2 md:flex-row">
          {/* mobile links (hidden on desktop) */}
          <div className="flex w-full flex-col items-center justify-center md:hidden">
            {/* logo */}
            <div className="flex items-center justify-center pb-6 md:pb-14">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/logo.avif`}
                alt="byCambao logo"
                width={100}
                height={100}
                unoptimized
                className="h-[50px] w-[60px] md:h-[60px] md:w-[90px]"
              />
            </div>
            {/* links array  */}
            <div className="flex gap-6 text-gray-600 hover:text-gray-900">
              {links.map((link, index) => (
                <Link
                  href={'/'}
                  className="flex transform transition-transform duration-300 hover:scale-105"
                  key={index}
                >
                  <MontserratText text={link.title} fontSize="16px" />
                  <IArrow />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full items-end justify-between">
            {/* social media links */}
            <div className="flex flex-col gap-1 pt-2 md:gap-4 md:pt-0">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/bycambao"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <IInstagram className="size-5" />
              </Link>
              {/* Phone */}
              <Link
                href="tel:+34611345567"
                className="flex transform underline transition-transform duration-300 hover:scale-105"
              >
                <MontserratText text="611 34 55 67" fontSize="14px" />
              </Link>
              {/* Mail */}
              <Link
                href="mailto:bycambao@gmail.com"
                className="flex transform underline transition-transform duration-300 hover:scale-105"
              >
                <MontserratText text="bycambao@gmail.com" fontSize="14px" />
              </Link>
            </div>
            <div className="flex flex-col">
              {/* desktop links (hidden on mobile) */}
              <div className="hidden flex-col md:flex">
                {/* logo */}
                <div className="flex items-center justify-center pb-14">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/logo.avif`}
                    alt="byCambao logo"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[50px] w-[60px] md:h-[60px] md:w-[90px]"
                  />
                </div>
                {/* links array  */}
                <div className="flex gap-8 text-gray-600 hover:text-gray-900">
                  {links.map((link, index) => (
                    <Link
                      href={'/'}
                      className="flex transform transition-transform duration-300 hover:scale-105"
                      key={index}
                    >
                      <MontserratText text={link.title} fontSize="16px" />
                      <IArrow />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* cookies and legal advise */}
            <div className="flex flex-col gap-4">
              {/* cookies */}
              <Link
                href="/politica-de-cookies"
                className="flex transform underline transition-transform duration-300 hover:scale-105"
              >
                <MontserratText text="Cookies" fontSize="14px" />
              </Link>
              {/* legal advise */}
              <Link
                href="/aviso-legal"
                className="flex transform underline transition-transform duration-300 hover:scale-105"
              >
                <MontserratText text="Aviso Legal" fontSize="14px" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          {/* Horizontal line */}
          <hr className="my-4 w-full border-t-2 border-gray-300" />

          {/* Text below the line */}
          <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-600">
            <MontserratText
              text="© 2024 byCambao. Todos los derechos reservados."
              fontSize="13px"
            />
            <div className="flex gap-1">
              <MontserratText text="Created by " fontSize="13px" />
              <Link
                href="https://www.instagram.com/enriquesuarezzz"
                target="_blank"
                rel="noopener noreferrer"
                className="transform underline transition-transform duration-300 hover:scale-110"
              >
                <MontserratText text="Enrique Suarez" fontSize="13px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
