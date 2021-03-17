import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../public/Components/Context";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
import PuffLoader from "react-spinners/PuffLoader";

export default function GameDetails({ currentGame }) {
  console.log(currentGame);
  const [themeColor, setThemeColor] = useState(
    `#${currentGame[0].dominant_color}`
  );
  const [thisGame, setThisGame] = useState();
  const [state, setState] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [loadingColor, setLoadingColor] = useState("#F6B80C");

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function handleToggle() {
    if (state.toggleNav) {
      setState({
        ...state,
        toggleNav: false,
      });
    }
  }

  console.log(router.query);

  console.log(themeColor);

  return (
    <>
      <motion.div exit={{ opacity: 0 }}>
        <div
          onClick={handleToggle}
          className="h-screen w-screen text-white flex flex-col items-center justify-center  "
        >
          <div className="backround__image   ">
            <img
              className="opacity-40 z-0 h-screen w-screen object-cover  "
              src={currentGame[0].short_screenshots[1].image}
            ></img>
          </div>
          <div className=" gradient h-screen w-screen top-32  z-10 absolute mt-32  bg-gradient-to-b from-transparent via-gray-800 to-dark-gray"></div>

          <div className="  game__details__page h-screen w-4/6 pb-12  z-10 absolute mt-60   flex flex-col items-center   ">
            <div className="game__title w-5/6 h-1/2  flex  xs:space-x-6  ">
              <div className="game__poster h-full xs:w-1/2 xxs:w-full  flex items-center justify-center ">
                <img
                  className="h-96 w-80 object-cover rounded-3xl shadow-2xl absolute"
                  src={currentGame[0].background_image}
                ></img>
              </div>
              <div className="game__description  xs:w-1/2 flex items-center static xss:w-full xxs:absolute xxs:mr-2 xs:static text-white  ">
                <div className="pt-6 title space-y-3 mx-4 ">
                  <h1 className="text-3xl font-light pb-3">
                    {currentGame[0].name}
                  </h1>

                  <span className="font-thin text-md">
                    {currentGame[0].released.slice(0, 4)}
                  </span>
                  {currentGame && (
                    <>
                      <div className="rating text-md font-thin">
                        <h1>Metacritic: {currentGame[0].metacritic}</h1>
                      </div>
                      <div className="consoles flex space-x-4 pt-36   ">
                        {currentGame[0].platforms
                          .slice(0, 3)
                          .map((platforms) => (
                            <div className="platforms text-sm font-thin xxs:pt-8">
                              <span>{platforms.platform.name}</span>
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {currentGame[0].short_screenshots && (
              <div className="screen__shots w-full h-32  mt-24 flex ">
                {currentGame[0].short_screenshots.slice(2, 5).map((shots) => (
                  <div className="image h-32 w-full mx-2 ">
                    {loading ? (
                      <div className="loader flex items-center justify-center pt-80  ">
                        <PuffLoader
                          className="h-20 w-20  "
                          loading={loading}
                          size={80}
                          color={loadingColor}
                        />
                      </div>
                    ) : (
                      <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="object-cover  h-40 w-42 rounded-2xl shadow-xl "
                        src={shots.image}
                      ></motion.img>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function getServerSideProps(context) {
  const requestGame = await axios.get(
    `https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&search=${context.query.GameDetails}&dates=${context.query.games}&search_precise=true`
  );

  console.log("concha de la lora");

  return {
    props: {
      currentGame: requestGame.data.results,
    },
  };
}
{
  /* {console.log(currentGame[0].name)}
          <h1>{currentGame[0].name}</h1>
          <h1>{currentGame[0].released.slice(0, 4)}</h1>
          <img src={currentGame[0].background_image}></img> */
}
