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

// import axios from "axios";

// const BASE_URL = "http://localhost:8080";
// const client = axios.create({ baseURL: BASE_URL });

// export const authUserAPI = async (payload) => {
//   const res = await client.post("/api/auth/auth-user", payload);
//   return res;
// };
