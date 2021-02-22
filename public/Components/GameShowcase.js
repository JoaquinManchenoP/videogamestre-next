import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";

export default function gameShowcase() {
  return (
    <div className="text-white h-full w-full space-y-8 object-fit ">
      <ImageSlider />
      <ImageSlider />
      <ImageSlider />
    </div>
  );
}
