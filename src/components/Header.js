import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/SideBarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg py-3 px-2">
      {/* Menu & Logo */}
      <div className="flex items-center gap-5 ml-3 col-span-1">
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
      <div className="col-span-10 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 rounded-l-2xl py-1 px-3 border border-gray-700 "
        />
        <button className="border border-gray-700 bg-gray-300 py-1 px-3 rounded-r-2xl">
          <i
            class="fa-solid fa-magnifying-glass fa-md"
            style={{ color: "#000" }}
          ></i>
        </button>
      </div>

      {/* Profile */}
      <div className="col-span-1 flex justify-center items-center">
        <i class="fa-solid fa-user" style={{ color: "#000000" }}></i>
      </div>
    </div>
  );
};
export default Header;
