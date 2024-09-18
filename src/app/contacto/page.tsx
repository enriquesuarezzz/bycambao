import { Dancing_ScriptText } from '@/components/atoms/dancing_ScriptText'
import { OnestText } from '@/components/atoms/onest_text'
import ContactForm from '@/components/molecules/contact_form/contact_form'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
              <Dancing_ScriptText
                text="Contacto"
                fontSize="46px"
                style="bold"
                className="text-bold pt-6 text-orange md:pt-0"
              />
              <Dancing_ScriptText
                text="¿Tienes alguna consulta? Ponte en contacto con nosotros"
                fontSize="20px"
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
