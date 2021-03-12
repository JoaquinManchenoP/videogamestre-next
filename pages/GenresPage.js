import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Context } from "../public/Components/Context";
import { GiCaveman } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import { MdVideogameAsset } from "react-icons/md";
import { GiMachineGunMagazine } from "react-icons/gi";
import { GiRaceCar } from "react-icons/gi";
import { GiMountedKnight } from "react-icons/gi";
import { GiSoccerBall } from "react-icons/gi";
import { GiChessKnight } from "react-icons/gi";

export default function GenresPage() {
  const [state, setState] = useContext(Context);

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
      className="genres_page h-screen w-screen flex flex-col items-center justify-center  "
      onClick={handleToggle}
      exit={{ opacity: 0 }}
    >
      <div className="genres__container  h-screen w-10/12 flex flex-col  items-center justify-center">
        <div className="title text-white h-12 w-full  text-4xl font-thin pl-12 pt-12">
          <h1 className="pt-28">Genres</h1>
        </div>
        <div className="genres_options text-8xl text-yellow-500  h-2/3 w-11/12 mt-32 flex items-center justify-center space-x-6">
          <div className="action__games flex flex-col items-center">
            <Link as="/joaquin/mancheno" href="/[genres]/[GameGenrePage]">
              <GiSwordsEmblem />
            </Link>
            <h1 className="text-sm pt-4">Action</h1>
          </div>

          <div className="adventure_games">
            <GiCaveman />
            <h1 className="text-sm pt-4">Adventure</h1>
          </div>

          <div className="indie flex flex-col items-center">
            <MdVideogameAsset />
            <h1 className="text-sm pt-4">Indie</h1>
          </div>

          <div className="shooter_games flex flex-col items-center">
            <GiMachineGunMagazine />
            <h1 className="text-sm pt-4">Shooter</h1>
          </div>

          <div className="racing__games flex flex-col items-center">
            <GiRaceCar />
            <h1 className="text-sm pt-4">Racing</h1>
          </div>

          <div className="rollplaying_games flex flex-col items-center">
            <GiMountedKnight />
            <h1 className="text-sm pt-4">RPG</h1>
          </div>

          <div className="sports_gameas flex flex-col items-center">
            <GiSoccerBall />
            <h1 className="text-sm pt-4">Sports</h1>
          </div>

          <div className="strategy_games flex flex-col items-center">
            <GiChessKnight />
            <h1 className="text-sm pt-4">Strategy</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
