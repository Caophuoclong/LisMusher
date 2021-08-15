import { createSlice } from "@reduxjs/toolkit";

const musicListLink = createSlice({
  name: "musicList",
  initialState: [],
  reducers: {
    addListLink: (state, action) => {
      const payload = action.payload;
      return payload;
    },
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
export const { addMusicLink, removeLink, addListLink } = actions;
export default reducer;
