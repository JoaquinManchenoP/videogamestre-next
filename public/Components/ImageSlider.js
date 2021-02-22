import { Container } from "postcss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import pagination from "swiper/cjs/components/pagination/pagination";
import { wrap } from "@popmotion/popcorn";

export default function ImageSlider() {
  const [position, setPosition] = useState(0);
  const images = [
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    ,
  ];

  const moveRight = () => {
    if (position < images.length - 1) {
      setPosition(position + 1);
    }
  };

  const moveLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="slider h-44 w-full  bg-gray-900   flex items-center jusiify-center overflow-scroll  "
      >
        <div className="image h-32 w-24 flex mx-12 space-x-12">
          {images.map((poster, i) => (
            <motion.img
              variants={{
                visible: (i) => ({
                  opacity: 1,
                  y: 0,

                  transition: {
                    delay: i * 0.25,
                    duration: 0.8,
                  },
                }),
                hidden: (i) => ({
                  opacity: 0,
                  y: 70,
                }),
              }}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              exit={{ opacity: 0 }}
              className="object-cover h-full w-full rounded-xl shadow-2xl"
              src={poster}
            ></motion.img>
          ))}
          ;
        </div>
      </motion.div>
    </>
  );
}
