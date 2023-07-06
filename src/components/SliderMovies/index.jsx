import CardsMovies from "../CardsMovies"
import { Container } from "./styles"

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules';


function SliderMovies ({info, title, isTrue}) {

    
    return (
        
    <>

    <Container> 
        <h2>{title}</h2>

        <Swiper freeMode={true} spaceBetween={20} slidesPerView={'auto'} className="swiper" pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}>
            

            {info.map((item, index) => (
                <SwiperSlide key={index}>

                    <CardsMovies isShow={isTrue} item={item} text={true} />

                </SwiperSlide>
            ))}
            
        </Swiper>

    </Container>

    </>
    )
}
export default SliderMovies