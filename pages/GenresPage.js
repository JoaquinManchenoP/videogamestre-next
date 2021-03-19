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
      onClick={handleToggle}
      exit={{ opacity: 0 }}
      className="genres__page w-30  h-screen flex items-center justify-center"
    >
      <div className="options__container xxs:h-full xs:h-80   bg-dark-gray rounded-3xl shadow-2xl flex items-center justify-center xxs:flex-col xxs:space-y-6 xs:space-y-12  md:space-y-12 ">
        <div className="top__section px-10 flex xxs:flex-col xxs:space-y-6 xs:space-y-0  xs:flex-row  xs:space-x-16  ">
          <div className="option" style={{ cursor: "pointer" }}>
            <div className="action__games  text-neon-orange flex flex-col items-center xxs:flex-col justify-center ">
              <Link as="/genres/action" href="/genres/[GameGenrePage]">
                <GiSwordsEmblem size={44} />
              </Link>
              <h1 className="text-md pt-2">Action</h1>
            </div>
          </div>
          <div className="option" style={{ cursor: "pointer" }}>
            <div className="action__games  text-neon-orange flex flex-col items-center xxs:flex-col justify-center ">
              <Link as="/genres/adventure" href="/genres/[GameGenrePage]">
                <GiCaveman size={44} />
              </Link>
              <h1 className="text-md pt-2">Adventure</h1>
            </div>
          </div>
          <div className="option" style={{ cursor: "pointer" }}>
            <div className="action__games text-neon-orange flex flex-col items-center xxs:flex-col justify-center ">
              <Link as="/genres/indie" href="/genres/[GameGenrePage]">
                <MdVideogameAsset size={44} />
              </Link>
              <h1 className="text-md pt-2">Indie</h1>
            </div>
          </div>
        </div>
        <div className="bottom__section px-10 flex xxs:flex-col xxs:space-y-6 xs:space-y-0  xs:flex-row xs:space-x-16  md:text-red-400 ">
          <div className="option" style={{ cursor: "pointer" }}>
            <div className="action__games  text-neon-orange flex flex-col items-center xxs:flex-col justify-center ">
              <Link as="/genres/shooter" href="/genres/[GameGenrePage]">
                <GiMachineGunMagazine size={44} />
              </Link>
              <h1 className="text-md pt-2">Shooter</h1>
            </div>
          </div>
          <div className="option" style={{ cursor: "pointer" }}>
            <div className="action__games  text-neon-orange flex flex-col items-center xxs:flex-col justify-center ">
              <Link as="/genres/racing" href="/genres/[GameGenrePage]">
                <GiRaceCar size={44} />
              </Link>
              <h1 className="text-md pt-2">Racing</h1>
            </div>
          </div>
          <div className="option" style={{ cursor: "pointer" }}>
            <div className="action__games  text-neon-orange flex flex-col items-center xxs:flex-col justify-center ">
              <Link as="/genres/shooter" href="/genres/[GameGenrePage]">
                <GiMachineGunMagazine size={44} />
              </Link>
              <h1 className="text-md pt-2">Shooter</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

{
  /* <motion.div
className="genres_page h-screen w-screen flex flex-col items-center justify-center  "
onClick={handleToggle}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
>
<div className="genres__container  h-screen w-10/12 flex flex-col  items-center  ">
  <div className="title text-white h-12 w-full  text-4xl font-thin pl-6 pt-12  ">
    <h1 className="">Genres</h1>
  </div>
  <div className="genres_options text-8xl text-yellow-500  h-2/3 w-11/12  flex items-center justify-center space-x-6">
    <div className="action__games flex flex-col items-center xxs:flex-col ">
      <Link as="/genres/action" href="/genres/[GameGenrePage]">
        <GiSwordsEmblem />
      </Link>
      <h1 className="text-sm pt-4">Action</h1>
    </div>

    <div className="adventure_games">
      <Link as="/genres/adventure" href="/genres/[GameGenres]">
        <GiCaveman />
      </Link>
      <h1 className="text-sm pt-4">Adventure</h1>
    </div>

    <div className="indie flex flex-col items-center">
      <Link as="/genres/indie" href="/genres/[GameGenres]">
        <MdVideogameAsset />
      </Link>
      <h1 className="text-sm pt-4">Indie</h1>
    </div>

    <div className="shooter_games flex flex-col items-center">
      <Link as="/genres/shooter" href="/genres/[GameGenres]">
        <GiMachineGunMagazine />
      </Link>
      <h1 className="text-sm pt-4">Shooter</h1>
    </div>

    <div className="racing__games flex flex-col items-center">
      <Link as="/genres/racing" href="/genres/[GameGenres]">
        <GiRaceCar />
      </Link>
      <h1 className="text-sm pt-4">Racing</h1>
    </div>

    <div className="sports_gameas flex flex-col items-center">
      <Link as="/genres/sports" href="/genres/[GameGenres]">
        <GiSoccerBall />
      </Link>
      <h1 className="text-sm pt-4">Sports</h1>
    </div>

  </div>
</div>
</motion.div> */
}
