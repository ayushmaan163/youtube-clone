import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/SideBarSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [params] = useSearchParams();
  // console.log(params.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="m-8">
      {/* Video Player */}
      <div className="col-span-7 flex flex-col">
        <iframe
          width="100%"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl"
        ></iframe>

        {/* Description */}
        {/* <div>Description</div> */}

        {/* Comments */}
        <div className="m-4 p-2">
          <CommentsContainer />
        </div>
      </div>

      {/* Suggestions */}
      {/* <div className="">Suggestions</div> */}
    </div>
  );
};
export default WatchPage;
