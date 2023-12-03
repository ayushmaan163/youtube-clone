import { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../config/api";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="flex flex-wrap ">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};
export default VideoContainer;
