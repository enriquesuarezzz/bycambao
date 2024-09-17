import { Dancing_ScriptText } from '@/components/atoms/dancing_ScriptText'
import { OnestText } from '@/components/atoms/onest_text'
import Image from 'next/image'
export default function Features() {
  const features = [
    {
      image: 'images/feature1.avif',
      title: '<span class="text-orange">Reencuentros</span>',
      description:
        'En las fiestas de cambao los reencuentros son el corazón de los eventos',
    },
    {
      image: 'images/feature2.avif',
      title: '<span class="text-orange">Algo distinto</span>',
      description:
        'La Isla de Lanzarote es distinta, vamos a darle algo distinto a nuestra gente',
    },
    {
      image: 'images/feature3.avif',
      title: '<span class="text-orange">Una razón para volver</span>',
      description:
        'Sin duda, en nuestros eventos siempre tendrás  <i>~una razón para volver a la isla~</i> ',
    },
  ]
  return (
    <div className="flex grid-cols-1 flex-col items-center justify-center gap-10 pt-14 md:pt-32 lg:grid lg:grid-cols-3 lg:gap-10">
      {features.map(({ image, title, description }) => (
        <div
          key={title}
          className="relative flex h-full max-h-[600px] max-w-[550px] flex-col items-center justify-center rounded-3xl border border-orange bg-transparent"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + image}`}
            width={500}
            height={300}
            alt="Project"
            className="h-auto w-full rounded-2xl object-cover px-8 pt-6 md:px-10 md:pt-8"
          />
          <div className="px-4 py-4 md:px-6">
            <Dancing_ScriptText
              text={title}
              fontSize="46px"
              className="pt-1 text-center md:pt-4"
            />
            <OnestText
              text={description}
              fontSize="16px"
              className="px-4 pb-6 pt-4 text-center md:px-6"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
