import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRegions = createAsyncThunk("getRegions", async (payload) => {
  try {
    const regions = await axios.get(
      `https://restcountries.com/v2/continent/${payload}`
    );
    return regions.data;
  } catch (error) {
    throw error;
  }
});
