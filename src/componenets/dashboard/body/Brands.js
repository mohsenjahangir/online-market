import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { FaArrowCircleRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { brands } from '../../../data/Data'

export const Brands = () => {
    return (
        <>
        <h1 className='text-center text-capitalize mt-5'>most popular brands</h1>
            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=' rounded p-2 bg-danger m-5 text-capitalize'
            >
                
                {brands.map((item)=><SwiperSlide className='btn btn-light' ><img src={item.imge} /></SwiperSlide>)}
                
            </Swiper>
        </>
    )
}
