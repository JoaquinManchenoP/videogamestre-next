import React from "react";
import { motion } from "framer-motion";

export default function GameCard({ poster, i }) {
  console.log(poster);
  return (
    <div className="image h-36 w-32 shadow-2xl ">
      <motion.img
        variants={{
          visible: (i) => ({
            opacity: 1,

            transition: {
              delay: i * 0.2,
              duration: 0.8,
            },
          }),
          hidden: (i) => ({
            opacity: 0,
          }),
        }}
        custom={i}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        exit="hidden"
        className="object-cover h-full w-full rounded-xl shadow-2xl  "
        src={poster}
      ></motion.img>
      <motion.div
        className="game__info pt-4 flex space-x-8 "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="game__name__year flex  mx-4 space-x-5">
          <h1 className="text-md font-light  ">Name</h1>
          <span className="font-thin text-xs pt-1.5">Year</span>
        </div>
      </motion.div>
    </div>
  );
}
