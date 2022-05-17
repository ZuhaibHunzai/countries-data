import { createSlice } from "@reduxjs/toolkit";
import { getRegions } from "../Actions/getRegions";
const initialState = {
  regions: [],
  regionsLoading: false,
  regionsLoaded: false,
  regionssFailedToLoad: false,
};

const regionsSlicer = createSlice({
  name: "regionsSlicer",
  initialState,
  extraReducers: {
    [getRegions.pending]: (state) => {
      state.regionsLoading = true;
    },
    [getRegions.fulfilled]: (state, action) => {
      state.regionsLoading = false;
      state.regionsLoaded = true;
      state.regions = action.payload;
    },
    [getRegions.rejected]: (state) => {
      state.regionsLoaded = false;
      state.regionsLoading = false;
      state.regionssFailedToLoad = true;
    },
  },
});

export default regionsSlicer.reducer;
