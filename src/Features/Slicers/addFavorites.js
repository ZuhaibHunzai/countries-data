import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  hasChoosedCountry: false,
  hasRemovedCountry: false,
};
const addFavorites = createSlice({
  name: "addFavorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      state.hasChoosedCountry = true;
      state.like = true;
    },
    removeFromFavorites: (state, action) => {
      state.favorites.pop(action.payload);
      state.hasChoosedCountry = false;
      state.hasRemovedCountry = true;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = addFavorites.actions;
export default addFavorites.reducer;
