import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Link from "next/link";

export default function GenreGameCard({
  gameImage,
  gameName,
  releaseDate,
  slug,
}) {
  const [loading, setLoading] = useState(true);
  const [loadingColor, setLoadingColor] = useState("#F6B80C");

  useEffect(() => {
    if (gameImage) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        exit={{ opacity: 0 }}
        className="images flex flex-col items-center justify-center pb-20"
      >
        {gameImage ? (
          <Link
            as={`/${releaseDate}/${slug}/${gameName}`}
            href="/[games]/[rating]/[GameDetails]/"
          >
            <img
              className="object-cover h-72 w-56 rounded-xl  shadow-2xl "
              src={gameImage}
            ></img>
          </Link>
        ) : (
          <div
            className="h-56 w-52 rounded-xl  shadow-2xl bg-gray-500 "
            src={gameImage}
          ></div>
        )}
        <idv className="gameTitle mt-8">
          <h1 className="text-white font-extralight">{gameName}</h1>
        </idv>
      </motion.div>
    </div>
  );
}
