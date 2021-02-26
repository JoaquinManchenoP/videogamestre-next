import React, { useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";
import { Context } from "./Context";

export default function gameShowcase({ games }) {
  console.log(games.newGames);
  const [videoGamesTrending, setVideoGamesTrending] = useState();
  const [newVideoGames, setNewVideoGames] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingColor, setloadingColor] = useState("#10E0B4");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(
        "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&metacritic=90,100"
      );

      setVideoGamesTrending(request);

      const newGameRequest = await axios.get(
        "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&dates=2020-10-01,2021-01-20&metacritic=70,100"
      );

      setNewVideoGames(newGameRequest);

      setLoading(false);
    }

    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(
  //       "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&dates=2019-09-01,2020-01-01"
  //     );

  //     // console.log(request);

  //     setVideoGames(request);
  //     console.log(videoGames);

  //     return request;
  //   }

  //   fetchData();
  // }, []);
  return (
    <div className="text-white bg-dark-gray w-full   ">
      {loading ? (
        <div className="loader flex items-center justify-center pt-32 ">
          <CircleLoader
            className="h-full w-full  "
            loading={loading}
            size={100}
            color={loadingColor}
          />
        </div>
      ) : (
        <>
          <div className="trending ">
            <motion.div className="trending__title pl-28 text-3xl font-extralight underline pb-2 overflow-hidden  ">
              <h1>Popular</h1>
            </motion.div>
            {videoGamesTrending && (
              <div className="slider mx-12">
                <ImageSlider games={games.popularGames} />
              </div>
            )}
          </div>
          <div className="new__games pt-10">
            <motion.div className="trending__title pl-28 text-3xl font-extralight underline pb-2  ">
              <h1 >New Games</h1>
            </motion.div>
            {videoGamesTrending && (
              <div className="slider mx-12 ">
                <ImageSlider games={games.newGames} />
              </div>
            )}
          </div>
          <div className="footer h-32 w-full bg-dark-gray"></div>
        </>
      )}
    </div>
  );
}
