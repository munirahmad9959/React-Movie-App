import React, { useState, useEffect } from 'react';
import './trend.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import TrendCard from '../components/TrendCard';

function Trend() {
    const [slides, setSlides] = useState([]);
    const fetchData = async () => {
        try {
            const api = await fetch('http://localhost:5173/data/movieData.json');
            const data = await api.json();
            setSlides(data);
        } catch (error) {
            console.error(`Error fetching data: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section id="trend" className='trend'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Coming Soon</h4>
                </div>
                <div className="row">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 3, // Fixed typo here
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 4, // Fixed typo here
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 6, // Fixed typo here
                                spaceBetween: 30,
                            }
                        }}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className='trendSwiper'
                    >
                        {slides && slides.length > 0 &&
                            slides.map(slide => (
                                <SwiperSlide key={slide._id}>
                                    <TrendCard slide={slide} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Trend;
