import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/100010929.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/9f74161dd136485ac79f5ca5e829b2340419b084_1666776495.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/627f3a8485f2884e7ae2951adf0761fc3792495e_1627386509.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/5518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/f660c46ffc6d58a19e5c0af9d03c50be9a929571_1627214766.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/477ab48bb7261595c02cb0f4c504837e464f00d0_1663485028.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                <SwiperSlide className='btn btn-light' ><Link to=''><img src='https://dkstatics-public.digikala.com/digikala-brands/5f9e5a98fc72f4eac2d4b4e6e4e6399ebd9aa65c_1646565463.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80' /></Link></SwiperSlide>
                
            </Swiper>
        </>
    )
}
