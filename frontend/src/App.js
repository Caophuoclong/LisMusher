import "./App.scss";
import ListenRoom from "./features/listenRoom";
import { useDispatch } from "react-redux";
import music from "./features/listenRoom/music";
import { useEffect } from "react";
import { addSong } from "./features/listenRoom/musicListInfoSlice";
import { addMusicLink } from "./features/listenRoom/musicListLinkSlice";
import { getId, getTitle } from "./components/inforYoutube";
function App() {
  const musicList = music.musicList;
  const dispatch = useDispatch();
  useEffect(() => {
    musicList.forEach(async (value) => {
      const id = getId(value);
      console.log(id);
      const res = await getTitle(id);
      const title = res.data.items[0].snippet.title;
      const img_url = `https://img.youtube.com/vi/${id}/0.jpg`;
      const action = addSong({ id, url: value, img_url, title });
      const action1 = addMusicLink(value);
      dispatch(action);
      dispatch(action1);
    });
  }, [dispatch, musicList]);
  return (
    <div className="App">
      <ListenRoom />
    </div>
  );
}
export default App;
