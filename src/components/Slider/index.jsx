import Cards from "../Cards"
import { Container } from "./styles"

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';


function Slider ({info, title, isTrue}) {

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 600px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 600px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return (
    <>

    <Container> 
        <h2>{title}</h2>

        <Swiper 
        grabCursor={true} 
        spaceBetween={0} 
        slidesPerView={matches && (2) || !matches && (5)}
        className="swiper" 
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]} >

            {info.map((item, index) => (
                <SwiperSlide key={index}>

                    <Cards item={item} text={true} isShow={isTrue} />

                </SwiperSlide>
            ))}
            
        </Swiper>

    </Container>

    </>
    )
}
export default Slider