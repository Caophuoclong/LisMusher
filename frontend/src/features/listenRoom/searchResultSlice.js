import { createSlice } from "@reduxjs/toolkit";

const searchResult = createSlice({
  name: "Search Result",
  initialState: [],
  reducers: {
    searchDatatResult: (state, action) => {
      state.push(action.payload);
    },
    emptyResult: (state, action) => {
      return [];
    },
  },
});

const { reducer, actions } = searchResult;
export const { searchDatatResult, emptyResult } = actions;
export default reducer;
