import { createSlice } from "@reduxjs/toolkit";

const musicListLink = createSlice({
  name: "musicList",
  initialState: [],
  reducers: {
    addMusicLink: (state, action) => {
      const payload = action.payload;
      if (state.indexOf(payload) === -1) state.push(action.payload);
    },
  },
});
const { reducer, actions } = musicListLink;
export const { addMusicLink } = actions;
export default reducer;
