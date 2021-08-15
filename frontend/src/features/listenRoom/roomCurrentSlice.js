import { createSlice } from "@reduxjs/toolkit";

const roomCurrent = createSlice({
  name: "roomCurrent",
  initialState: "",
  reducers: {
    setRoomCurrent: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = roomCurrent;
export const { setRoomCurrent } = actions;
export default reducer;
