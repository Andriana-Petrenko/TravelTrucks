import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favourites",
  initialState: { items: [] },
  reducers: {
    toggleFavourite (state, action) {
      const index = state.items.indexOf(action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavourite } = slice.actions;
export const favouritesReducer = slice.reducer;
