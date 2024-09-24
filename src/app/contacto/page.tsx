import { MontserratText } from '@/components/atoms/monserrat_text'
import ContactForm from '@/components/molecules/contact_form/contact_form'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'byCambao | Contacto',
  description: 'Pagina de contacto de byCambao',
}

export default function Contacto() {
  return (
    <main>
      <section className="flex flex-col">
        {/* header image */}
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}images/contact_header.avif`}
          alt="byCambao dj image"
          width={1384}
          height={420}
          className="max-h-[500px] w-full object-cover"
          unoptimized
        />
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto max-w-8xl px-4 xl:px-10">
            <div className="flex flex-col items-center justify-center pt-2 md:pt-10">
              <MontserratText
                text="Contacto"
                fontSize="46px"
                style="bold"
                className="text-bold pt-6 text-orange md:pt-0"
              />
              <MontserratText
                text="¿Tienes alguna consulta? Ponte en contacto con nosotros"
                fontSize="18px"
                className="text-bold pb-6 pt-2 text-center md:pb-10 md:pt-6"
              />
            </div>
            {/* contact form component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
