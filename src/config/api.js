const GOOGLE_API_KEY = "AIzaSyByyJAp8jqjwq7cmR0txkrJ5OU3n95dc6A";

export const YOUTUBE_MOST_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
