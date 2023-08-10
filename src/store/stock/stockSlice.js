import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import stockService from "./stockService";
const initialState = {
  isFound: null,
  stocks: [],
  usedPrinciple: null,
};

// get profile by username
export const predict = createAsyncThunk(
  "stock/predict",
  async (username, thunkAPI) => {
    try {
      const response = await stockService.predict(username.toLowerCase());
      console.log(response);
      if (response.success) return response;
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStockState: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(predict.pending, (state) => {})
      .addCase(predict.fulfilled, (state, action) => {
       state.isFound = true;
       state.stocks = action.payload.stocks;
       state.usedPrinciple = action.payload.usedPrinciple
      })
      .addCase(predict.rejected, (state, action) => {
       
      });
  },
});

export const { setProfileState } = stockSlice.actions;
export default stockSlice.reducer;
