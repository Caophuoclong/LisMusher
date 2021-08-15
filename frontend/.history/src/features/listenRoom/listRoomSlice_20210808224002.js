import { createSlice } from "@reduxjs/toolkit";

const listRoom = createSlice({
  name: "listRoom",
  initialState: [],
  reducers: {
    addRoom: (state, action) => {
      const payload = action.payload;
      if (state.indexOf(payload) === -1) state.push(action.payload);
    },
    removeRoom: (state, action) => {
      const position = state.indexOf(action.payload);
      state.slice(position);
    },
  },
});
const { reducer, actions } = listRoom;
export const { addRoom, removeRoom } = actions;
export default reducer;
