import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "../features/listenRoom/playingCurrentSlice";
import musicReducer from "../features/listenRoom/musicListInfoSlice";
import musicListReducer from "../features/listenRoom/musicListLinkSlice";
import roomListReducer from "../features/listenRoom/listRoomSlice";
import friendListReducer from "../features/listenRoom/listFriendSlice";
import searchResult from "../features/listenRoom/searchResultSlice";
import roomCurrent from "../features/listenRoom/roomCurrentSlice";
const rootReducer = {
  music: musicReducer,
  playing: playingReducer,
  musicListLink: musicListReducer,
  roomList: roomListReducer,
  friendList: friendListReducer,
  searchResult: searchResult,
  roomCurrent: roomCurrent,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
