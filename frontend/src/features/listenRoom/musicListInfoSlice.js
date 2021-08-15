import { createSlice } from "@reduxjs/toolkit";

const musicList = createSlice({
  name: "musicList",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      const payload = action.payload;
      if (!state.includes(payload)) {
        state.push(payload);
      }
    },
    removeSong: (state, action) => {
      const payload = action.payload;
      state.forEach((value, pos) => {
        if (value.id === payload) {
          state.splice(pos, 1);
        }
      });
    },
  },
});
const { reducer, actions } = musicList;
export const { addSong, removeSong } = actions;
export default reducer;
