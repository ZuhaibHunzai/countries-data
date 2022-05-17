import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCountries = createAsyncThunk("getAllCountries", async () => {
  try {
    const countryData = await axios.get("https://restcountries.com/v2/all");
    return countryData.data;
  } catch (error) {
    throw error;
  }
});
