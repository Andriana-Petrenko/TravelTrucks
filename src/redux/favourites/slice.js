import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../truck/initialState";

const slice = createSlice({
  name: "favourites",
  initialState: initialState.favourites,
  reducers: {
    toggleFavourite (state, action) {
      const index = state.favourites.indexOf(action.payload);
      if (index !== -1) {
        // Якщо транспортний засіб уже в обраному, видаляємо його
        state.favourites.splice(index, 1);
      } else {
        // Якщо транспортного засобу немає в обраному, додаємо його
        state.favourites.push(action.payload);
      }
    },
  },
});

export const { toggleFavourite } = slice.actions;
export const favouritesReducer = slice.reducer;
