import { createSlice } from "@reduxjs/toolkit";

const listFriend = createSlice({
  name: "listFriend",
  initialState: [],
  reducers: {
    addFriend: (state, action) => {
      const payload = action.payload;
      if (!state.includes(payload)) state.push(action.payload);
    },
    removeFriend: (state, action) => {
      const position = state.indexOf(action.payload);
      state.slice(position);
    },
  },
});
const { reducer, actions } = listFriend;
export const { addFriend, removeFriend } = actions;
export default reducer;
