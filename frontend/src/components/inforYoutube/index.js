import getInfoVideo from "../../axiosClient/axiosClient";
const api_key = "AIzaSyDXKvZjPxqrtMsHduX_Ioygsb9Db_JW3sE";

const getTitle = (id) => {
  const info = getInfoVideo(id, api_key);
  return info;
};
const getId = (url) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};
const progressYoutubeInfo = async (url) => {
  const id = getId(url);
  const img_url = `https://img.youtube.com/vi/${id}/0.jpg`;
  const title = await getTitle(id, api_key);
  return { title, img_url };
};

const ended = async (musicList) => {
  let arrayMusic = [];
  musicList.forEach(async (value, pos) => {
    const res = await progressYoutubeInfo(value);
    const title = res.title.data.items[0].snippet.title;
    const img_url = res.img_url;
    const obj = { url: value, title, img_url };
    arrayMusic.push(obj);
  });
  return arrayMusic;
};
export { getId, getTitle };
export default ended;
