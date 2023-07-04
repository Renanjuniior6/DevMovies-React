import CardsSeries from "../CardsSeries"
import { Container } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react'

function SliderSeries ({info, title}) {

    
    return (
        
    <>

    <Container> 
        <h2>{title}</h2>

        <Swiper grabCursor={true} spaceBetween={20} slidesPerView={'auto'} className="swiper"  >

            {info.map((item, index) => (
                <SwiperSlide key={index}>

                    <CardsSeries item={item} text={true} />

                </SwiperSlide>
            ))}
            
        </Swiper>

    </Container>

    </>
    )
}
export default SliderSeries