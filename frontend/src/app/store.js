import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "../features/listenRoom/playingCurrentSlice";
import musicReducer from "../features/listenRoom/musicListInfoSlice";
import musicListReducer from "../features/listenRoom/musicListLinkSlice";
import roomListReducer from "../features/listenRoom/listRoomSlice";
import friendListReducer from "../features/listenRoom/listFriendSlice";
const rootReducer = {
  music: musicReducer,
  playing: playingReducer,
  musicListLink: musicListReducer,
  roomList: roomListReducer,
  friendList: friendListReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
