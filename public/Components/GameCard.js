import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GameCard({
  gameImage,
  i,
  gameName,
  releaseDate,
  platforms,
}) {
  const [consoles, setConsoles] = useState(platforms.slice(0, 3));

  return (
    <>
      <motion.div className="image h-full w-96 mx-2  pt-5 bg-gray-900 rounded-3xl justify-between  ">
        <div className="image flex items-center justify-center  ">
          {gameImage && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="h-60 w-11/12  object-cover rounded-2xl shadow-2xl "
              src={gameImage}
            ></motion.img>
          )}
        </div>
        <div className="info flex justify-between mx-3 pt-2 ">
          <div className=" ">
            <div className="font-light text-lg pl-2">
              <h3>{gameName}</h3>
              <span className="font-thin text-xs ">
                {releaseDate.slice(0, 4)}
              </span>
            </div>
          </div>
          <div className="font-thin pr-3">
            {platforms && (
              <div className="consoles space-x-2 ">
                {consoles.map((console) => (
                  <span>{console.platform.name}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
