import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "../features/listenRoom/playingCurrentSlice";
import musicReducer from "../features/listenRoom/musicListInfoSlice";
import musicListReducer from "../features/listenRoom/musicListLinkSlice";
const rootReducer = {
  music: musicReducer,
  playing: playingReducer,
  musicListLink: musicListReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
