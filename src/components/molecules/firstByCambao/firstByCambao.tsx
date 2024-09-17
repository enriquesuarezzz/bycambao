'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Image from 'next/image'

export default function FirstByCambao() {
  const images = [
    {
      url: 'images/firstByCambao/firstByCambao1.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao2.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao3.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao4.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao5.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao6.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao7.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao8.avif',
    },
    {
      url: 'images/firstByCambao/firstByCambao9.avif',
    },
  ]

  return (
    <section className="flex flex-col gap-10 pt-10 md:gap-20 md:pt-20">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={'auto'}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0 }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="max-w-[450px]">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + image.url}`}
                width={500}
                height={600}
                alt="First byCambao Party Image"
                className="h-[200px] w-[375px] rounded-2xl object-cover md:h-[300px] md:w-[450px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={'auto'}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, reverseDirection: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="max-w-[450px]">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + image.url}`}
                width={500}
                height={600}
                alt="First byCambao Party Image"
                className="h-[200px] w-[375px] rounded-2xl object-cover md:h-[300px] md:w-[450px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
