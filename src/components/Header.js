import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/SideBarSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API_II } from "../config/api";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API_II + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };

  useEffect(() => {
    // API call
    // getSearchSuggestions();
    // Make an API call after every key press

    // If difference between 2 (keystrokes)/(API calls) is < 200ms, decline API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="header">
      <div className="grid grid-flow-col shadow-lg py-3 px-2">
        {/* Menu & Logo */}
        <div className="flex items-center gap-5 ml-3 col-span-1 mr-7">
          <i
            class="fa-solid fa-bars fa-lg"
            style={{ color: "#000000", cursor: "pointer" }}
            onClick={() => toggleMenuHandler()}
          ></i>

          <div className="flex gap-1 items-center">
            <i
              class="fa-brands fa-youtube fa-2xl"
              style={{ color: "#ff0000" }}
            ></i>
            <Link to="/">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "Oswald" }}
              >
                YouTube
              </span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="col-span-10 ">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-1/2 rounded-l-2xl py-1 px-3 border border-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            <button className="border border-gray-700 bg-gray-300 py-1 px-3 rounded-r-2xl">
              <i
                class="fa-solid fa-magnifying-glass fa-md"
                style={{ color: "#000" }}
              ></i>
            </button>
          </div>

          {showSuggestions && (
            <div>
              {searchQuery === "" ? null : (
                <div className="z-10 fixed bg-white  flex justify-start items-center px-6 py-4 rounded-lg shadow-lg border border-gray-400">
                  <ul>
                    {suggestions.map((s) => (
                      <li
                        key={s}
                        className="flex flex-wrap items-center gap-4 py-1 px-3 hover:bg-gray-300 hover:rounded-lg"
                      >
                        <i
                          class="fa-solid fa-magnifying-glass fa-sm"
                          style={{ color: "#000" }}
                        ></i>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="col-span-1 flex justify-center items-center">
          <i class="fa-solid fa-user" style={{ color: "#000000" }}></i>
        </div>
      </div>
    </div>
  );
};
export default Header;
