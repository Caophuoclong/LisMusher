import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "../redux/playingCurrentSlice";
import musicReducer from "../redux/musicListInfoSlice";
import musicListReducer from "../redux/musicListLinkSlice";
import roomListReducer from "../redux/listRoomSlice";
import friendListReducer from "../redux/listFriendSlice";
import searchResult from "../redux/searchResultSlice";
import roomCurrent from "../redux/roomCurrentSlice";
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
