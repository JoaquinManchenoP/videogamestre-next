import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../public/Components/Context";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

export default function GameDetails({ currentGame }) {
  console.log(currentGame);
  const [thisGame, setThisGame] = useState();
  const [state, setState] = useContext(Context);

  const router = useRouter();

  function handleToggle() {
    if (state.toggleNav) {
      setState({
        ...state,
        toggleNav: false,
      });
    }
  }

  console.log(router.query);

  return (
    <div onClick={handleToggle} className="h-screen w-screen text-white">
      {currentGame && (
        <>
          {console.log(currentGame[0].name)}
          <h1>{currentGame[0].name}</h1>
          <h1>{currentGame[0].released.slice(0, 4)}</h1>
          <img src={currentGame[0].background_image}></img>
        </>
      )}
    </div>
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
