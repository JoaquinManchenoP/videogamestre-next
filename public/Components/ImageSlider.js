import { Container } from "postcss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import pagination from "swiper/cjs/components/pagination/pagination";
import { wrap } from "@popmotion/popcorn";
import GameCard from "./GameCard";

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
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
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
        className="slider h-60 w-full  bg-gray-800 flex flex-col  overflow-scroll shadow-2xl px-12  "
      >
        <div className="image flex space-x-6 pt-9  ">
          {images.map((poster, i) => (
            <GameCard poster={poster} i={i} />
          ))}
        </div>
      </motion.div>
    </>
  );
}
