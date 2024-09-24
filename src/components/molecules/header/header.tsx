import { MontserratText } from '@/components/atoms/monserrat_text'
import Image from 'next/image'
export default function Header() {
  return (
    <header className="flex flex-col">
      {/* header title */}
      <div className="flex items-center justify-center">
        <MontserratText
          text="Una razón para volver"
          tag="h1"
          style="semibold"
          fontSize="40px"
          className="pb-10 md:pb-14"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10 px-10 md:gap-20 lg:flex-row lg:gap-0">
        {/* header image */}
        <div className="max-h-[480px] w-full max-w-[640px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/header.avif`}
            alt="bycambao party image"
            width={500}
            height={500}
            unoptimized
            className="ml-2 h-full w-full"
          />
        </div>
        {/* header description */}
        <div className="max-w-[700px] text-center">
          <MontserratText
            text="Lanzarote alberga de los lugares más bonitos del planeta, y pecamos de dar todo a los turistas, conejeros, estamos aquí para hacerles disfrutar de la fiesta canaria con la cultura inquieta de los jóvenes."
            fontSize="16px"
            className="ml-0 lg:ml-40"
          />
        </div>
      </div>
    </header>
  )
}
