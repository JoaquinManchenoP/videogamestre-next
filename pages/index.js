import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import GameShowcase from "../public/Components/GameShowcase";
import Slider from "../public/Components/Slider";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../public/Components/Context";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import { useRouter } from "next/router";

export default function Home({ games }) {
  const [state, setState] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [loadingColor, setLoadingColor] = useState("#ff5811");

  const router = useRouter();

  console.log(state.toggleNav);

  function handleToggle() {
    if (state.toggleNav) {
      setState({
        ...state,
        toggleNav: false,
      });
    }
  }

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setLoading(false);
      }, 1100);
    } else {
      setLoading(true);
    }
  }, []);

  //  {loading ? (
  // <div className="loader flex items-center justify-center pt-32 ">
  //   <CircleLoader
  //     className="h-full w-full  "
  //     loading={loading}
  //     size={100}
  //     color={loadingColor}
  //   />
  // </div>

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
          onClick={handleToggle}
          className="indexPage h-full w-full bg-dark-gray flex flex-col items-center justify-items-center   "
        >
          <div className="slider h-full w-full  ">
            <Slider games={games.heroGames} />
          </div>
          <GameShowcase games={games} />
        </motion.div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const requestPopular = await axios.get(
    "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&dates=2019-01-01,2021-01-20&metacritic=80,100&page_size=25"
  );

  const requestNewGames = await axios.get(
    "https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&dates=2020-10-20,2021-02-01&metacritic=68,100&page_size=25"
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
