import { motion } from "framer-motion";
import Link from "next/link";

export default function SearchGameCard({
  name,
  image,
  rating,
  slug,
  releaseDate,
}) {
  console.log(image);
  return (
    <div className="search__game__card h-20 w-full  ml-12  flex text-white space-x-8  font-extralight my-4  ">
      <img className="h-28 w-20 object-cover rounded-xl" src={image}></img>
      <div className="game__info pt-3">
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="rating ">
          <h1>Rating: {rating}</h1>
        </div>

        <div className="button pt-3">
          <Link
            as={`/${releaseDate}/${slug}/${name}`}
            href="/[games]/[rating]/[GameDetails]/"
          >
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2 }}
              className="h-6 w-12 bg-neon-orange rounded-xl shadow-xl"
            >
              View
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
