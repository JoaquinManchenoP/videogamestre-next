import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Slider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const images = [
    "https://images7.alphacoders.com/102/thumb-1920-1020913.jpg",
    "https://thereformedgamers.files.wordpress.com/2020/07/z6rryz3sof441.jpg",
    "https://images3.alphacoders.com/843/843016.jpg",
  ];

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <motion.img
        custom={direction}
        key={page}
        src={images[imageIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          x: { type: "spring", stiffness: 300 },
          opacity: { duration: 0.5, delay: 0 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        className="hero_image h-3/6 w-9/12 mt-16 bg-red-400 rounded-xl shadow-xl object-cover"
      ></motion.img>
      <div className="buttons w-full h-20  flex justify-between z-10 absolute items-center pt-64  ">
        <motion.div
          className="text-white text-2xl pl-16  "
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.2, x: -8 }}
          whileTap={{ scale: 0.8, x: 8 }}
          onClick={() => paginate(-1)}
          transition={{ duration: 0.2 }}
        >
          <FaArrowAltCircleLeft />
        </motion.div>

        <motion.div
          className="text-white text-2xl pr-16   "
          initial={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.2, x: 8 }}
          whileTap={{ scale: 0.8, x: -8 }}
          transition={{ duration: 0.2 }}
          onClick={() => paginate(1)}
        >
          <FaArrowAltCircleRight />
        </motion.div>
      </div>
    </>
  );
}
