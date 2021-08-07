import axios from "axios";

const api_key = "AIzaSyAjWAtCY71ZEw8__goCvT7YW5pmK_atbhM";

const searchWithKeyWord = async (keyword) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${api_key}`;
  const response = await axios.get(url);
  return response;
};

export default searchWithKeyWord;
