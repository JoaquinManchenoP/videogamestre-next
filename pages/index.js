import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import GameShowcase from "../public/Components/GameShowcase";
import Slider from "../public/Components/Slider";
import React, { useContext, useState } from "react";
import { Context } from "../public/Components/Context";
import axios from "axios";
import ImageSlider from "../public/Components/ImageSlider";
import CircleLoader from "react-spinners/CircleLoader";

export default function Home({ stars }) {
  console.log(stars);
  const [toggleState, setToggleState] = useContext(Context);
  const [loading, setLoading] = useContext(Context);
  const [loadingColor, setLoadingColor] = useState("#36D7B7");

  function handleClick() {
    setToggleState(false);
  }
  console.log(loading);
  return (
    <motion.div
      className="indexPage h-full bg-dark-gray w-screen  flex flex-col items-center justify-items-center space-y-12 "
      onClick={handleClick}
    >
      <Slider />
      <GameShowcase />
    </motion.div>
  );
}
