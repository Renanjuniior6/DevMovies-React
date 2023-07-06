import CardsMovies from "../CardsMovies"
import { Container } from "./styles"

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function SliderMovies ({info, title, isTrue}) {

    
    return (
        
    <>

    <Container> 
        <h2>{title}</h2>

        <Swiper 
       // grabCursor={true} 
        spaceBetween={10} 
        slidesPerView={'2'} 
        className="swiper" 
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]} >

            {info.map((item, index) => (
                <SwiperSlide key={index}>

                    <CardsMovies item={item} text={true} isShow={isTrue} />

                </SwiperSlide>
            ))}
            
        </Swiper>

    </Container>

    </>
    )
}
export default SliderMovies