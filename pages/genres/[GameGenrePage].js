import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import GenreGameCard from "../../public/Components/GenreGameCard";
import PuffLoader from "react-spinners/PuffLoader";

export default function GameGenrePage({ currentGenre }) {
  console.log(currentGenre);
  const router = useRouter();
  const [capitalizedGenre, setCapitalizedGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingColor, setLoadingColor] = useState("#F6B80C");

  console.log(router.query);

  const genreTitle = router.query.GameGenrePage;

  useEffect(() => {
    if (genreTitle) {
      setCapitalizedGenre(
        genreTitle.charAt(0).toUpperCase() +
          genreTitle.slice(1, genreTitle.length)
      );
    }
    if (currentGenre) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader flex items-center justify-center pt-80  ">
          <PuffLoader
            className="h-full w-full  "
            loading={loading}
            size={120}
            color={loadingColor}
          />
        </div>
      ) : (
        <motion.div
          className="flex flex-col items-center  overflow-y-scroll"
          exit={{ opacity: 0 }}
        >
          <div className="game_content  h-screen w-5/6 flex flex-col itmes ">
            <div className="title w-full h-20 text-4xl font-extralight pt-12  ">
              <h className="text-white pl-10">{capitalizedGenre}</h>
            </div>
            <div className="games_container w-full h-full  mt-16 flex flex-col items-center">
              <div className="games h-full w-11/12  rounded-xl">
                <div className="grid grid-cols-3 h-full w-full gap-1  items-center  ">
                  {currentGenre &&
                    currentGenre.map((game) => (
                      <GenreGameCard
                        gameName={game.name}
                        gameImage={game.background_image}
                        releaseDate={game.released}
                        slug={game.slug}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const requestGenre = await axios.get(
    `https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&genres=${context.query.GameGenrePage}&metacritic=70,100&&dates=2018-05-01,2021-02-20&page=1&page_size=39&search_precise=true`
  );

  return {
    props: {
      currentGenre: requestGenre.data.results,
    },
  };
}
