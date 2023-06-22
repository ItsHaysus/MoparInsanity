'use client';

import Image from 'next/image'
import { createContext } from 'react';// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import presidentImg from '@/public/images/backyardigan.jpg'
import vicePresidentImg from '@/public/images/texasmopar.jpg'
import vicePresidentupperImg from '@/public/images/silverbullet.jpg'
import sergant from '@/public/images/inosuke.jpg'
import styles from './members.module.scss';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function Members()  {
  return (
    <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    pagination={{clickable: true}}
    breakpoints={{
      640: {
        width: 640,
        slidesPerView: 1,
      },
      768: {
        width: 768,
        slidesPerView: 2,
      },
    }}

  >
    <SwiperSlide>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
              </div>
              <Image className="rounded-full" src={presidentImg} width={300} height={200} alt={presidentImg.src}/>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">the_backyardigan_gt</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">President</a> <a href='https://www.instagram.com/the_backyardigan_gt/'><svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="20.145" cy="11.892" r="1"></circle><path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path><path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"></path></svg></a>
              </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <Image className="rounded-full" src={vicePresidentImg} width={300} height={200} alt={vicePresidentImg.src} />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">texasmopar1</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">VicePresident</a> <a href='https://www.instagram.com/texasmopar1/'><svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="20.145" cy="11.892" r="1"></circle><path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path><path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"></path></svg></a>
              </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <Image className="rounded-full" src={vicePresidentupperImg} width={300} height={200} alt={vicePresidentupperImg.src}/>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">silv.erbullet956</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">VicePresident</a> <a href='https://www.instagram.com/silv.erbullet956/'><svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="20.145" cy="11.892" r="1"></circle><path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path><path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"></path></svg></a>
              </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <Image className="rounded-full" src={sergant} width={300} height={200} alt={sergant.src}/>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">inosuke_rt</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Sergant</a> <a href='https://www.instagram.com/inosuke_rt/'><svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="20.145" cy="11.892" r="1"></circle><path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path><path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"></path></svg></a>
              </div>
            </div>
    </SwiperSlide>
  </Swiper>
  )
}
