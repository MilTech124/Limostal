"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import Link from "next/link";

function Hero() {
  const slides = [
    "/images/hero/1.jpeg",
    "/images/hero/2.jpeg",
    "/images/hero/3.jpeg",
    "/images/hero/4.jpeg",
    "/images/hero/5.jpeg",
  ];
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
        {slides.map((slide) => (
          <SwiperSlide key={slide} className="relative">
            <Image src={slide} width={1440} height={900} cover />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70"> 
                <Image src="/images/logo_pion.png" width={903} height={924} className="!w-[20vw] !h-auto"/>
                <Link href="/kontakt">
                    <button type="button" className="btn md:px-10 mt-5 md:mt-20">Kontakt</button>
                </Link>
               
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </section>
  );
}

export default Hero;
