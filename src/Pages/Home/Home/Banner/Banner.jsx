import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
         
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            className="w-full mx-auto h-[550px] "
            src="https://i.postimg.cc/cLFNwp1g/Green-Blue-Illustration-Online-Store-Facebook-Cover.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="w-full mx-auto h-[550px] "
            src="https://i.postimg.cc/GpNwSvyb/Pink-Online-Shopping-Tips-Youtube-Thumbnail.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="w-full mx-auto h-[550px] "
            src="https://i.postimg.cc/RV9r8SNJ/Green-Gradient-Super-Sale-Fecbook-Cover.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="w-full mx-auto h-[550px] "
            src="https://i.postimg.cc/fTqTcSRf/Yellow-Modern-Fashion-Summer-Sale-Facebook-Cover.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="w-full mx-auto h-[550px] "
            src="https://i.postimg.cc/15Xy3Rrn/Turquoise-Blue-Shoes-Realistic-Product-Promotion-Banner-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="w-full mx-auto h-[550px] "
            src=" https://i.postimg.cc/rFDLLnq5/Green-Blue-Illustration-Online-Store-Facebook-Cover-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="w-full mx-auto h-[550px] "
            src="https://i.postimg.cc/VsH34qXv/Turquoise-Blue-Shoes-Realistic-Product-Promotion-Banner.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className="w-full mx-auto h-[550px] "
            src="https://i.postimg.cc/fbGvJbdw/Turquoise-Blue-Shoes-Realistic-Product-Promotion-Banner-1.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
