import subscriptionIcon from "../assets/subscription-icon-2.png";
import homeIcon from "../assets/home-icon.png";
// import exploreIcon from "../assets/explore-icon.png";
import trendingIcon from "../assets/trending-icon.png";
import musicIcon from "../assets/music-icon.png";
import movieIcon from "../assets/movies-icon.png";
import gamingIcon from "../assets/games-icon.png";
import newsIcon from "../assets/news-icon.png";
import shortsIcon from "../assets/shorts-icon.webp";
import liveIcon from "../assets/live-icon2.png";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  // if(!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <div className="w-48 shadow-lg pl-4 h-auto absolute z-30 bg-white pb-2">
      <div className="flex flex-col gap-3 pt-5">
        <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={homeIcon} alt="home-icon" className="w-5" />
          <h1 className="font-bold">Home</h1>
        </div>

        <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={shortsIcon} alt="shorts-icon" className="w-5" />
          <h1 className="font-bold">Shorts</h1>
        </div>

        <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={liveIcon} alt="live-icon" className="w-5" />
          <h1 className="font-bold">Live</h1>
        </div>

        <div className=" flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
          <img src={subscriptionIcon} alt="subscription-icon" className="w-5" />
          <h1 className="font-bold">Subscriptions</h1>
        </div>

        <div className="h-0.5 flex justify-center items-center bg-gray-600 w-5/6"></div>

        <div className="">
          <div className="flex justify-start items-center gap-5 pb-3">
            {/* <img src={exploreIcon} alt="explore-icon" className="w-5" /> */}
            <h1 className="font-bold ">Explore</h1>
          </div>

          <div>
            <ul className="flex flex-col gap-1.5">
              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img src={trendingIcon} alt="trending-icon" className="w-5" />
                <li>Trending</li>
              </div>

              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img src={musicIcon} alt="music-icon" className="w-5" />
                <li>Music</li>
              </div>

              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img src={movieIcon} alt="movie-icon" className="w-5" />
                <li>Movies</li>
              </div>

              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img src={gamingIcon} alt="gaming-icon" className="w-5" />
                <li>Gaming</li>
              </div>

              <div className="flex justify-start items-center gap-5 hover:bg-gray-300 hover:border hover:rounded-lg hover:w-40 cursor-pointer p-2">
                <img src={newsIcon} alt="news-icon" className="w-5" />
                <li>News</li>
              </div>
            </ul>
          </div>
        </div>

        {/* <div className="h-0.5 flex justify-center items-center bg-gray-600 w-5/6"></div> */}
      </div>
    </div>
  );
};
export default SideBar;
