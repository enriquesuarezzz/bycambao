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

export default function first_ByCambao_() {
  const swiper_1_images = [
    {
      url: 'images/first_ByCambao/first_ByCambao_1.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_2.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_3.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_4.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_5.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_6.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_7.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_8.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_9.avif',
    },
  ]
  const swiper_2_images = [
    {
      url: 'images/first_ByCambao/first_ByCambao_10.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_11.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_12.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_13.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_14.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_15.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_16.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_17.avif',
    },
    {
      url: 'images/first_ByCambao/first_ByCambao_18.avif',
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
        {swiper_1_images.map((image, index) => (
          <SwiperSlide key={index} className="max-w-[450px]">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}${image.url}`}
                width={500}
                height={600}
                unoptimized
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
        {swiper_2_images.map((image, index) => (
          <SwiperSlide key={index} className="max-w-[450px]">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}${image.url}`}
                width={500}
                height={600}
                unoptimized
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
