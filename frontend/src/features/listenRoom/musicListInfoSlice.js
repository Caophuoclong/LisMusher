import { createSlice } from "@reduxjs/toolkit";

const musicList = createSlice({
  name: "musicList",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      const payload = action.payload;
      if (state.indexOf(payload) === -1) state.push(action.payload);
    },
    removeSong: (state, action) => {},
  },
});
const { reducer, actions } = musicList;
export const { addSong, removeSong } = actions;
export default reducer;
