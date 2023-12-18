const VideoCard = ({ info }) => {
  // const { snippet, statistics } = info;

  return (
    <div className="w-72 p-2 m-3 shadow-lg rounded-md">
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-md"
      />

      <div className="font-bold py-2 flex flex-wrap">
        {info?.snippet?.title}
      </div>

      <div>{info?.snippet?.channelTitle}</div>

      <div>{info?.statistics?.viewCount} views</div>
    </div>
  );
};
export default VideoCard;
