"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useEffect,useState } from "react";
import axios from "axios";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import Link from "next/link";

function Hero() {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSlides = async () => {
      try {
        // Use our internal API route instead of directly calling the WordPress API
        // This avoids CORS issues since the request is made server-to-server
        const response = await axios.get('/api/home-slides');
        console.log('Full API response:', response.data);
        
        if (response.data && response.data[0] && response.data[0].acf && response.data[0].acf.zdjecia) {
          setSlides(response.data[0].acf.zdjecia);
        } else {
          console.error('Expected data structure not found in API response');
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching slides:', err);
        setError(true);
      }
    };

    getSlides();
  }, []);

  // Fallback static slides if API fails
  const staticSlides = [
    "/images/hero/1.jpg",
    "/images/hero/2.jpg",
    "/images/hero/3.jpg",
    "/images/hero/4.jpg",
    "/images/hero/5.jpg",
  ];

  // Use static slides if there's an error or no slides from API
  const displaySlides = error || slides.length === 0 ? 
    staticSlides.map(src => ({ full_image_url: src })) : 
    slides;
  return (
    <section className="hero">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper -mt-14 max-sm:h-80"
      >
        {displaySlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image 
              src={slide.full_image_url} 
              quality={50} 
              width={1440} 
              height={800} 
              alt="hero image" 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70"> 
                <Image src="/images/logo_pion.png" alt="logo" width={903} height={924} className="!w-[20vw] !h-auto"/>
                <Link href="/kontakt">
                    <button type="button" className="btn md:px-10 mt-5 md:mt-20">Kontakt</button>
                </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
