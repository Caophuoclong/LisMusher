import { createSlice } from "@reduxjs/toolkit";

const playing = createSlice({
  name: "playingCurrent",
  initialState: window.localStorage.getItem("current-song")
    ? window.localStorage.getItem("current-song")
    : "",
  reducers: {
    setPlayingCurrent: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = playing;
export const { setPlayingCurrent } = actions;
export default reducer;
