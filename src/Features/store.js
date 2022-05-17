import { configureStore } from "@reduxjs/toolkit";
import addFavorites from "./Slicers/addFavorites";
import getAllCountriesSlicer from "./Slicers/allCountrySlicer";
import countryDetailsSlicer from "./Slicers/countryDetails";
export const store = configureStore({
  reducer: { addFavorites, getAllCountriesSlicer, countryDetailsSlicer },
});
