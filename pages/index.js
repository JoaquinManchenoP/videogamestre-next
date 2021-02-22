import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import GameShowcase from "../public/Components/GameShowcase";
import Slider from "../public/Components/Slider";
import React, { useContext } from "react";
import { Context } from "../public/Components/Context";

export default function Home() {
  const [toggleState, setToggleState] = useContext(Context);

  function handleClick() {
    setToggleState(false);
  }

  return (
    <motion.div
      className="indexPage h-full w-screen bg-gray-800 flex flex-col items-center justify-items-center space-y-12"
      onClick={handleClick}
    >
      <Slider />
      <GameShowcase />
    </motion.div>
  );
}
