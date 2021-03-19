import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Context } from "../public/Components/Context";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import SearchGameCard from "../public/Components/SearchGameCard";

export default function searchPage({ searchString }) {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleToggle() {
    if (state.toggleNav) {
      setState({
        ...state,
        toggleNav: false,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserInput(e.target.value);

    async function fetchData() {
      console.log(userInput);
      const request = await axios.get(
        `https://api.rawg.io/api/games?key=320ec780f009438d91f5a4d404249793&search=${userInput}&search_precise=true&dates=2018-05-01,2021-02-20&page_size=8&metacritic=60,100`
      );

      setSearchResults(request.data.results);
      console.log(searchResults);
    }
    fetchData();
  }

  return (
    <motion.div
      className="h-screen w-screen bg-gray-800 flex items-center justify-center overflow-y-scroll "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleToggle}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="searchPageContent h-screen w-5/6  flex flex-col items-center ml-20 ">
        <div className="search__bar h-32 mt-10 w-full  flex  ">
          <div className="searchIcon h-10 w-12 mt-16 rounded-2xl shadow-2xl xxs:ml-1 xs:ml-8 md:ml-96  flex items-center justify-center text-white bg-neon-orange">
            <BsSearch size={20} />
          </div>
          <input
            type="sumbit"
            placeholder="Search..."
            onChange={handleSubmit}
            className="input bg-gray-600 rounded-xl h-10 w-72 mt-16 shadow-2xl pl-6"
          ></input>
        </div>

        {searchResults.length > 0 ? (
          <div className="results h-5/6 xs:w-full xxs:w-full md:w-4/6   mr-72   xxs:ml-32 xs:ml-44 space-y-12  ">
            {searchResults.map((result) => (
              <div className="test">
                {console.log(result)}
                <SearchGameCard
                  name={result.name}
                  image={result.background_image}
                  rating={result.metacritic}
                  slug={result.slug}
                  releaseDate={result.released}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty__resutls  h-4/6 w-2/6 bg-gray-800 mr-72"></div>
        )}
      </div>
    </motion.div>
  );
}
