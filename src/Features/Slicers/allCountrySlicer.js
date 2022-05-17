import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries } from "../Actions/getAllContries";

const initialState = {
  allCountryData: [],
  filteredRegions: [],
  allCountriesLoading: false,
  allCountriesLoaded: false,
  allCountriesFailedToLoad: false,
  hasSearched: false,
};

const getAllCountriesSlicer = createSlice({
  name: "getAllCountriesSlicer",
  initialState,
  reducers: {
    searchCountry: (state, action) => {
      if (action.payload != null) {
        state.filteredRegions = state.filteredRegions.filter((item) => {
          if (item.name.toLowerCase().includes(action.payload)) {
            return item;
          }
        });
      }
    },
    searchCountryByRegion: (state, action) => {
      if (action.payload !== "all") {
        state.filteredRegions = state.allCountryData.filter((item) => {
          if (item.region.includes(action.payload)) {
            return item;
          }
        });
      } else {
        state.filteredRegions = [...state.allCountryData];
      }
    },
  },
  extraReducers: {
    [getAllCountries.pending]: (state) => {
      state.allCountriesLoading = true;
    },
    [getAllCountries.fulfilled]: (state, action) => {
      state.allCountriesLoading = false;
      state.allCountriesLoaded = true;
      state.allCountryData = action.payload;
      state.filteredRegions = action.payload;
    },
    [getAllCountries.rejected]: (state) => {
      state.allCountriesLoaded = false;
      state.allCountriesLoading = false;
      state.allCountriesFailedToLoad = true;
    },
  },
});

export const { searchCountry, searchCountryByRegion } =
  getAllCountriesSlicer.actions;
export default getAllCountriesSlicer.reducer;
