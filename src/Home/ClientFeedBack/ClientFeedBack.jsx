import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tilt } from 'react-tilt'
import { Slide,Fade } from "react-awesome-reveal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const ClientFeedBack = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-10'>
            <div>

                <p className=' text-center text-3xl font-bold font-serif text-slate-800'><Slide><Fade duration={1000} cascade damping={1e-1}>Our Customer Says</Fade></Slide></p>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div>

                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>

                                <div className='p-10   flex flex-col items-center'>
                                 <Tilt>  <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
    </Tilt> 
    <Slide><Fade duration={1000} cascade damping={1e-1}> <p className='mx-24'>{review.details} </p></Fade></Slide>
                                    <h3 className='text-2xl font-serif text-orange-500 mt-2'>{review.name}</h3>
                                    <div className='flex justify-center items-center'>
                                        <img className='w-48 h-48 rounded-full mt-4' src={review.image} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </div>

            </Swiper>
        </div>
    );
};

export default ClientFeedBack;