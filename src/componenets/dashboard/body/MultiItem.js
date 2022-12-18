import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { FaArrowCircleRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const MultiItem = () => {

  return (
    <>

      <Swiper

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='bg-warning rounded p-1 m-5 text-capitalize'
      >
        
        <SwiperSlide ><img src='https://dkstatics-public.digikala.com/digikala-products/b9a26e01077f7d6013ed05bb966f5032bbc51741_1640678963.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/114708700.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/ea58310a983775229333230e34949f29b586f6ff_1661345915.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/d45296c1e10573ca2670dd6a9bfc51a024df2097_1668343036.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/549df3f96873da85dce5e84d42087fa37772c446_1670685662.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/6d9d1dcf343e0ffa8a58b3b0a8e00f12efa04a08_1670422586.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/3b0337df1203e8428db60b3ef2539925af813f76_1663027517.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/a79e4e0439c8164fdecb9ad7684184e27b3a6dee_1664282409.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/0e10436634d7a2ba22fde38bec778e9c7a263ad6_1610201557.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/5d3c20105cf9af47d746c18b15c2016f34356dfe_1669444654.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide><img src='https://dkstatics-public.digikala.com/digikala-products/f2102f16c3cb6c2c0a5182fdbccfdd26f2a34078_1664890137.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' /></SwiperSlide>
        <SwiperSlide className='p-5 m-5 btn btn-warning' ><div  /><h1><FaArrowCircleRight/></h1>show more <div/></SwiperSlide>
      </Swiper>
    </>
  )
}
