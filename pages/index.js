import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

import Slider from "../public/Components/Slider";

import React, { useContext } from "react";
import { Context } from "../public/Components/Context";

export default function Home() {
  const [toggleState, setToggleState] = useContext(Context);

  function handleClick() {
    setToggleState(false);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      className="indexPage h-screen w-screen bg-gray-800 flex flex-col items-center justify-items-center"
      onClick={handleClick}
    >
      <Slider />

      <div className="games">This is a game</div>
    </motion.div>
  );
}
