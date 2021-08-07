import { createSlice } from "@reduxjs/toolkit";

const musicListLink = createSlice({
  name: "musicList",
  initialState: [],
  reducers: {
    addMusicLink: (state, action) => {
      const payload = action.payload;
      if (!state.includes(payload)) state.push(action.payload);
    },
    removeLink: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});
const { reducer, actions } = musicListLink;
export const { addMusicLink, removeLink } = actions;
export default reducer;
