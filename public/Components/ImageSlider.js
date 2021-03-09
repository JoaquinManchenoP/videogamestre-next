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
        className="slider h-96 w-full flex   "
      >
        {games && (
          <div className="image flex h-96 w-screen pt-6 space-x-5 ">
            {games.map((game, i) => (
              <div className="foto ">
                {console.log(game)}
                <GameCard
                  releaseDate={game.released}
                  gameName={game.name}
                  gameImage={game.background_image}
                  platforms={game.parent_platforms}
                  i={i}
                  gameID={game.id}
                  slug={game.slug}
                  metacritic={game.metacritic}
                  updated={game.updated}
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
}
