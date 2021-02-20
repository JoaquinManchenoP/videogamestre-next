import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

import React, { useContext } from "react";
import { Context } from "../public/Components/Context";

export default function Home() {
  const [toggleState, setToggleState] = useContext(Context);

  function handleClick() {
    setToggleState(false);
  }

  return (
    <motion.div className="indexPage h-screen w-screen bg-red-400" onClick = {handleClick}>
      <motion.div

        exit={{ opacity: 0 }}
        className="indexPage"
      >
        <div className="text">
          <h1>This is the index page</h1>
        </div>
        <Link href="/GenresPage">Genres</Link>
      </motion.div>
    </motion.div>
  );
}
