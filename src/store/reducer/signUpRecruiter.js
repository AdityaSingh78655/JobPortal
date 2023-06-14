import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";

export const signUpRecruiter = createAsyncThunk(
  "recruiter/signup/",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.post(
        "/recruiter/signup/",
        payload
      );
      console.log(response.data, "signUpRecruiterResponse");
      return response.data;
    } catch (error) {}
  }
);

const SignupRecruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpRecruiter.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(signUpRecruiter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(signUpRecruiter.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

export const selectCandidate = (state) => state.recruiter.data;
export const selectCandidateStatus = (state) => state.recruiter.status;
export const selectCandidateError = (state) => state.recruiter.error;

export default SignupRecruiterSlice.reducer;
