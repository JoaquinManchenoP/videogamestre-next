import React from "react";
import { motion } from "framer-motion";

export default function GameGenrePage() {
  return (
    <motion.div className="flex flex-col items-center" exit={{ opacity: 0 }}>
      <div className="game_content  h-screen w-5/6 flex flex-col itmes">
        <div className="title w-full h-20 text-4xl font-extralight pt-12  ">
          <h className="text-white pl-10">Genre</h>
        </div>
        <div className="games_container w-full h-full  mt-16 flex flex-col items-center ">
          <div className="games h-full w-11/12 bg-purple-200 rounded-xl"></div>
        </div>
      </div>
    </motion.div>
  );
}
