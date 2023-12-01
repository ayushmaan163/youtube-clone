const Header = () => {
  return (
    <div className="grid grid-flow-col shadow-lg py-4 px-2">
      {/* Menu & Logo */}
      <div className="flex items-center gap-5 ml-3 col-span-1">
        <i class="fa-solid fa-bars fa-lg" style={{ color: "#000000" }}></i>

        <div className="flex gap-1 items-center">
          <i
            class="fa-brands fa-youtube fa-2xl"
            style={{ color: "#ff0000" }}
          ></i>
          <span className="text-2xl font-bold" style={{ fontFamily: "Oswald" }}>
            YouTube
          </span>
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
      <div className="col-span-1 flex justify-center items-center bg-gray-300 border-black rounded-xl border-2">
        <i class="fa-solid fa-user" style={{ color: "#000000" }}></i>
      </div>
    </div>
  );
};
export default Header;
