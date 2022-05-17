import { getCountrydetails } from "../Actions/getCountryDetails";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountry: [],
  isCountryLoading: false,
  isCountryLoaded: false,
  isCountryLoadedFailed: false,
};

const countryDetailsSlicer = createSlice({
  name: "countryDetailsSlicer",
  initialState,
  extraReducers: {
    [getCountrydetails.pending]: (state) => {
      state.isCountryLoading = true;
    },
    [getCountrydetails.fulfilled]: (state, action) => {
      state.isCountryLoading = false;
      state.isCountryLoaded = true;
      state.selectedCountry = action.payload;
    },
    [getCountrydetails.rejected]: (state) => {
      state.isCountryLoaded = false;
      state.isCountryLoading = false;
      state.isCountryLoadedFailed = true;
    },
  },
});

export default countryDetailsSlicer.reducer;
