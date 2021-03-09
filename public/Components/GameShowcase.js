import React, { useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";
import axios from "axios";

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

      setVideoGamesTrending(games);

      setLoading(false);
    }

    fetchData();
  }, []);

  console.log(games);

  return (
    <div className="text-white bg-dark-gray w-full   ">
      <div className="trending ">
        <motion.div className="trending__title pl-28 text-3xl font-extralight underline pb-2 overflow-hidden  ">
          <h1 className="">Popular</h1>
        </motion.div>
        {videoGamesTrending && (
          <div className="slider mx-12 overflow-x-auto overflow-y-hidden">
            <ImageSlider games={games.popularGames} />
          </div>
        )}
      </div>
      <div className="new__games pt-10">
        <motion.div className="trending__title pl-28 text-3xl font-extralight underline pb-2  ">
          <h1 className="">New Games</h1>
        </motion.div>
        {videoGamesTrending && (
          <div className="slider mx-12 overflow-x-scroll overflow-y-hidden ">
            <ImageSlider games={games.newGames} />
          </div>
        )}
      </div>
      <div className="footer h-32 w-full bg-dark-gray"></div>)
    </div>
  );
}
