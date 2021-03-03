import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GameCard({
  gameImage,
  i,
  gameName,
  releaseDate,
  platforms,
  gameID,
  slug,
  metacritic,
  updated,
}) {
  const [consoles, setConsoles] = useState(platforms.slice(0, 3));

  return (
    <>
      <motion.div className="image h-full w-96   pt-5 bg-gray-900 rounded-3xl justify-between  ">
        {console.log(slug)}
        <div className="image flex items-center justify-center   ">
          {gameImage && (
            <Link
              as={`/${releaseDate}/${slug}/${gameName}`}
              href="/[games]/[rating]/[GameDetails]/"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-60 w-11/12  object-cover rounded-2xl shadow-2xl "
                src={gameImage}
              ></motion.img>
            </Link>
          )}
        </div>

        <div className="info flex justify-between pt-8 mx-3  ">
          <div className=" ">
            <div className="font-light text-lg pl-2">
              <h3>{gameName}</h3>
            </div>
          </div>
          <div className="font-thin ">
            {platforms && (
              <div className="consoles space-x-2 ">
                {consoles.map((console) => (
                  <span>{console.platform.name}</span>
                ))}
              </div>
            )}
            <span className="font-thin text-xs ">
              {releaseDate.slice(0, 4)}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
