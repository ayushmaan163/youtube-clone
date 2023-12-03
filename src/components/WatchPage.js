import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/SideBarSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [params] = useSearchParams();
  // console.log(params.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="m-5 ">
      {/* Video Player, description, comments */}
      <div className="col-span-7">
        <iframe
          width="700"
          height="400"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-xl"
        ></iframe>
      </div>

      {/* Suggestions */}
      <div className=""></div>
    </div>
  );
};
export default WatchPage;
