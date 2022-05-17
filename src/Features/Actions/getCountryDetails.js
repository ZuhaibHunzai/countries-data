import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCountrydetails = createAsyncThunk(
  "getCountryDetails",
  async (payload) => {
    try {
      const countryDetails = await axios.get(
        `https://restcountries.com/v2/name/${payload}`
      );
      console.log(countryDetails, "sjdkhfskfh");
      return countryDetails.data;
    } catch (error) {
      throw error;
    }
  }
);
