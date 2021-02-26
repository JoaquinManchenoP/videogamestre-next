import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import GameShowcase from "../public/Components/GameShowcase";
import Slider from "../public/Components/Slider";
import React, { useContext, useState } from "react";
import { Context } from "../public/Components/Context";
import axios from "axios";

export default function Home({ games }) {
  const [state, setState] = useContext(Context);

  console.log(games.heroGames);

  function handleToggle() {
    if (state.toggleNav) {
      setState({
        ...state,
        toggleNav: false,
      });
    }
  }

  return (
    <motion.div
      onClick={handleToggle}
      className="indexPage h-full w-full bg-dark-gray flex flex-col items-center justify-items-center   "
    >
      <div className="slider h-full w-full  ">
        <Slider games={games.heroGames} />
      </div>
      <GameShowcase games={games} />
    </motion.div>
  );
}

export async function getServerSideProps(context) {
  const requestPopular = await axios.get(
    "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&dates=2016-10-01,2021-01-20&metacritic=90,100"
  );

  const requestNewGames = await axios.get(
    "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&dates=2020-10-01,2021-01-20&metacritic=70,100"
  );

  const requestHeroGames = await axios.get(
    "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&dates=2020-10-01,2021-01-01&metacritic=80,100"
  );

  return {
    props: {
      games: {
        popularGames: requestPopular.data.results,
        newGames: requestNewGames.data.results,
        heroGames: requestHeroGames.data.results,
      },
    },
  };
}
