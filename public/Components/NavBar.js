import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { Context } from "./Context";
import { useRouter } from "next/router";

export default function NavBar() {
  const [toggleState, setToggleState] = useContext(Context);

  const router = useRouter();
  function toggleNav() {
    if (toggleState) {
      setToggleState(false);
    } else {
      setToggleState(true);
    }
  }

  function handleToggle() {
    setToggleState(false);
  }
  return (
    <div className="nav__bar flex">
      <AnimatePresence>
        {toggleState && (
          <div className="options">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 250 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.4 }}
              className="nav h-screen w-72 bg-purple-800"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className="nav__options h-1/2 flex flex-col mr-12 items-left justify-center pl-9 space-y-4"
              >
                <motion.h1
                  onClick={handleToggle}
                  className={
                    router.pathname == "/" ? "text-white" : "text-purple-500"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0 }}
                >
                  <Link href="/">New</Link>
                </motion.h1>

                <motion.h1
                  onClick={handleToggle}
                  className={
                    router.pathname == "/GenresPage"
                      ? "text-white"
                      : "text-purple-500"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/GenresPage">Genres</Link>
                </motion.h1>
                <motion.h1
                  onClick={handleToggle}
                  className={
                    router.pathname == "/SearchPage"
                      ? "text-white"
                      : "text-purple-500"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/SearchPage">Search</Link>
                </motion.h1>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="toggle flex items-center justify-center h-screen w-3 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          onClick={toggleNav}
          className="button__toggle h-screen w-3 bg-white opacity-50  flex items-center justify-center z-0 "
        ></motion.div>
        <motion.div
          onClick={toggleNav}
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1 }}
          className="button h-36 w-3 bg-gray-700 rounded-xl z-10 absolute mr-1 ml-2"
        ></motion.div>
      </div>
    </div>
  );
}
