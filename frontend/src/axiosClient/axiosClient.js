import axios from "axios";
const getInfoVideo = async (id, api_key) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${api_key}&part=snippet`;
  const response = await axios.get(url);
  return response;
};

export default getInfoVideo;
