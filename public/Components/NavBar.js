import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { Context } from "./Context";
import { useRouter } from "next/router";

export default function NavBar() {
  const [state, setState] = useContext(Context);

  const router = useRouter();

  function handleToggle() {
    if (state.toggleNav) {
      setState({
        ...state,
        toggleNav: false,
      });
    } else {
      setState({
        ...state,
        toggleNav: true,
      });
    }
  }

  return (
    <div className="nav__bar flex fixed  ">
      <AnimatePresence>
        {state.toggleNav && (
          <div className="options ">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 250 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.4 }}
              className="nav h-screen w-72 bg-gray-700"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className="nav__options pt-20 h-1/2 flex flex-col mr-12 items-left justify-center pl-9 space-y-8"
              >
                <motion.div
                  className="branf__logo h-20 w-20 mb-12 ml-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0 }}
                ></motion.div>
                <motion.div
                  onClick={handleToggle}
                  className={
                    router.pathname == "/"
                      ? "text-neon-orange"
                      : "text-gray-400"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0 }}
                >
                  <Link scroll={false} href="/">
                    <div
                      style={{ cursor: "pointer" }}
                      className="option flex space-x-3"
                    >
                      <h1>New</h1>
                    </div>
                  </Link>
                </motion.div>
                <motion.div
                  onClick={handleToggle}
                  className={
                    router.pathname == "/GenresPage"
                      ? "text-neon-orange"
                      : "text-gray-400"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0 }}
                >
                  <Link scroll={false} href="/GenresPage">
                    <div
                      style={{ cursor: "pointer" }}
                      className="option flex space-x-3"
                    >
                      <h1>Genres</h1>
                    </div>
                  </Link>
                </motion.div>
                <motion.div
                  onClick={handleToggle}
                  className={
                    router.pathname == "/SearchPage"
                      ? "text-neon-orange"
                      : "text-gray-400"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link scroll={false} href="/SearchPage">
                    <div
                      style={{ cursor: "pointer" }}
                      className="option flex space-x-3"
                    >
                      <h1>Search</h1>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="toggle flex items-center justify-center h-screen w-3 pl-3 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          onClick={handleToggle}
          className="button__toggle h-screen w-3 bg-white opacity-50  flex items-center justify-center z-0 "
        ></motion.div>
        <motion.div
          onClick={handleToggle}
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1 }}
          className="button h-40 w-3 bg-gray-400 rounded-xl z-10 absolute mr-1 "
        ></motion.div>
      </div>
    </div>
  );
}
