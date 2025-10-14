'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Card, CardType } from '../lottus-education/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import Button from '../lottus-education/Button';
import Container from '@/layouts/Container.layout';
export type CarouselType = {
  events: CardType[]
  title: string
  max_entries: number
}

const CarouselCards = (props: CarouselType) => {
  const { events, title, max_entries } = props;
  
  const router = useRouter()
  return (
    <Container>
      <div className='w-full flex justify-center'>
        <h3 className='text-5xl'>{title}</h3>
      </div>
      <div className='w-full hidden desktop:flex relative h-max-content justify-center mx-auto max-w-[1024px]'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={events.length > 3 ? 3 : events.length}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          className='flex max-h-fit !px-4'
        >
          {
            events?.map((cardData: CardType, i: number) => (
              <SwiperSlide key={i} className='max-w-83 h-full pb-12 pt-3 ' > <Card {...cardData} /></SwiperSlide>
            ))
          }
        </Swiper>
        {/* Botones de navegación personalizados */}
        <button className="custom-prev  absolute -left-12 top-1/2 -translate-y-1/2 !text-2xl text-surface-900 p-4 rounded-full material-symbols-outlined ">
          arrow_back_ios
        </button>
        <button className="custom-next absolute -right-12 top-1/2 -translate-y-1/2 !text-2xl text-surface-900 p-4 rounded-full material-symbols-outlined ">
          arrow_forward_ios
        </button>
      </div>
      <div className='w-full hidden tablet:flex relative h-max-content justify-center mx-auto'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={12}
          slidesPerView={events.length > 2 ? 2.1 : events.length}
          pagination={{ clickable: true }}
          className='flex max-h-fit '
        >
          {
            events?.map((cardData: CardType, i: number) => (
              <SwiperSlide key={i} className='max-w-83 h-full pb-12' > <Card {...cardData} /></SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className='w-full hidden mobile:flex relative h-max-content justify-center mx-auto'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={12}
          slidesPerView={events.length > 1 ? 1.1 : events.length}
          pagination={{ clickable: true }}
          className='flex max-h-fit '
        >
          {
            events?.map((cardData: CardType, i: number) => (
              <SwiperSlide key={i} className='max-w-83 h-full pb-12' > <Card {...cardData} /></SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className='w-full flex justify-center'>
        <Button onClick={()=>router.push('/eventos')}>Ver todos</Button>      
      </div>
    </Container>
  )
}
export default CarouselCards;