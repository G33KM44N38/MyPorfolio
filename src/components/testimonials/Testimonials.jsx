import React from 'react'
import './Testimonials.css'
import {BsPersonCircle} from 'react-icons/bs'

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
    review: 'You want to leave a comment, contact me in the form, in the form below',
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
                {/* <div className="client_avatar">
                  <img src={avatar} alt="Avatar one" />
                </div> */}
                <BsPersonCircle fontSize="50px" color='#4db5ff'/>
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