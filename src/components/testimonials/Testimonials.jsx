import React from 'react'
import './Testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: '',
    name: '',
    review: 'whanna be the first who give a review ? Contact Me in the form at the end of the page',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>  
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={[ Pagination ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client_review'>{name}</h5>
                <small className="client_name">
                  {review}
                </small>
              </SwiperSlide>
            )
         })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials