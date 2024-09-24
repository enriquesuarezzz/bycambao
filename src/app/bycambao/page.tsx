import { MontserratText } from '@/components/atoms/monserrat_text'
import SectionLayout from '@/components/atoms/section_layout/section_layout'
import Features from '@/components/molecules/features/features'
import FirstByCambao from '@/components/molecules/firstByCambao/firstByCambao'
import Header from '@/components/molecules/header/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'byCambao | byCambaoDetails',
  description: 'byCambao events details, pictures and more',
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-28 md:pt-40 lg:pt-60">
      <SectionLayout>
        <Header />
        <Features />
        <MontserratText
          text="The first byCambao"
          fontSize="46px"
          className="pt-10 md:pt-20"
        />
      </SectionLayout>
      <FirstByCambao />
    </main>
  )
}
