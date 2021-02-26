import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../public/Components/Context";

export default function searchPage() {
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
      className="h-screen w-screen bg-gray-800"
      onClick={handleToggle}
      exit={{ opacity: 0 }}
    >
      SearchPage
    </motion.div>
  );
}
