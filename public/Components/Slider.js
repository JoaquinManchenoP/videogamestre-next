import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Slider({ games }) {
  const [images, setImages] = useState([]);
  const [currentGames, setCurrentGames] = useState([]);
  const [currentPlatforms, setCurrentPlatforms] = useState([]);

  useEffect(() => {
    setImages(
      games.map((game) => {
        return game.background_image;
      })
    );
    setCurrentGames(games);
  }, []);

  console.log(currentGames);
  console.log(currentPlatforms);

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const counter = imageIndex;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="image  max-h-full w-full  flex items-center justify-center flex-col  ">
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
          className="hero_image max-h-96 w-4/6  shadow-xl object-cover object-top mt-20 rounded-xl m-2  "
        ></motion.img>
        <div className="buttons w-full  flex justify-between z-10 absolute items-center ">
          <motion.div
            className="text-white text-2xl pl-16  "
            initial={{ scale: 1, x: 0 }}
            whileHover={{ scale: 1.2, x: -8 }}
            whileTap={{ scale: 0.8, x: 8 }}
            exit={{ opacity: 0 }}
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
            exit={{ opacity: 0 }}
            onClick={() => paginate(1)}
          >
            <FaArrowAltCircleRight />
          </motion.div>
        </div>
      </div>

      {currentGames[imageIndex] && (
        <div className="game__info  w-full  ">
          <div className="gameName text-white  text-right text-bottom  2xl:mr-32 lg:mr-16 lg-md:pr-48 md:pr-32 sm: pr-32  ">
            <h1 className="text-2xl font-light my-3 ">
              {currentGames[imageIndex].name}
            </h1>
            <span className="font-extralight">
              {currentGames[imageIndex].released.slice(0, 4)}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
