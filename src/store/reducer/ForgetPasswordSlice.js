import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";
import { ApiUrl } from "../../constants/StringConstants";

export const forgetPassword = createAsyncThunk(
  "forgetPassword",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.post(
        "/forget/password/",
        payload
      );
      console.log(response, "forgetPasswordResponse");
      return response;
    } catch (error) {}
  }
);

const ForgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        if (action?.payload?.status === 200) {
          state.isLoading = false;
          state.data = action.payload;
          state.isError = false;
          state.isSuccess = true;
          state.ErrorMsg = action?.payload?.data?.message;
        } else {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.ErrorMsg = action?.payload?.email[0];
        }
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message;
      });
  },
});

export const selectCandidate = (state) => state.forgetPassword.data;
export const selectCandidateStatus = (state) => state.forgetPassword.status;
export const selectCandidateError = (state) => state.forgetPassword.error;

export default ForgetPasswordSlice.reducer;
