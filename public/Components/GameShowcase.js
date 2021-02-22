import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";

export default function gameShowcase() {
  return (
    <div className="text-white h-full w-full space-y-8 object-fit  ">
      <div className="trending">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="trending__title pl-10 text-3xl font-extralight underline"
        >
          <h1>Trending</h1>
        </motion.div>
        <ImageSlider />
      </div>
      <div className="new__games  ">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="new__games__title pl-10 text-3xl font-extralight underline"
        >
          <h1>New Games</h1>
        </motion.div>

        <ImageSlider />
      </div>
    </div>
  );
}
