import { createSlice } from "@reduxjs/toolkit";

const socket = createSlice({
  name: "socket",
  initialState: "",
  reducers: {
    setSocket: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = socket;
export const { setSocket } = actions;
export default reducer;
