import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../truck/initialState";

const slice = createSlice({
  name: "favourites",
  initialState: { items: [] },
  reducers: {
    toggleFavourite (state, action) {
      const index = state.items.indexOf(action.payload);
      if (index !== -1) {
        // Якщо транспортний засіб уже в обраному, видаляємо його
        state.items.splice(index, 1);
      } else {
        // Якщо транспортного засобу немає в обраному, додаємо його
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavourite } = slice.actions;
export const favouritesReducer = slice.reducer;
