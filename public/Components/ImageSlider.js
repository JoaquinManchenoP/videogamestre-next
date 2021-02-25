import { Container } from "postcss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pagination from "swiper/cjs/components/pagination/pagination";
import { wrap } from "@popmotion/popcorn";
import GameCard from "./GameCard";
import axios from "axios";

export default function ImageSlider({ games }) {
  console.log(games);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="slider h-96 w-full flex  overflow-y-hidden mx-20  "
      >
        {games && (
          <div className="image flex h-96 w-screen pt-6 ">
            {games.data.results.map((game, i) => (
              <div className="foto ">
                <GameCard
                  releaseDate={game.released}
                  gameName={game.name}
                  gameImage={game.background_image}
                  platforms={game.parent_platforms}
                  i={i}
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
