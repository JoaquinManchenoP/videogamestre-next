import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Context } from "../public/Components/Context";

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
    <div
      className="genres_page h-screen w-screen bg-gray-800"
      onClick={handleToggle}
    >
      <motion.div className="genres " exit={{ opacity: 0 }}>
        <div className="text">
          <h1>This is the genres page</h1>
        </div>
        <div className="button">
          <Link href="/">Back to Home Page</Link>
        </div>
      </motion.div>
    </div>
  );
}
