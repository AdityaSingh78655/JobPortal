import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";
import { ApiUrl } from "../../constants/StringConstants";

export const signupCandidate = createAsyncThunk(
  "candidate/signup",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.post(
        ApiUrl.CANDIDATE_SIGNUP,
        payload
      );
      console.log(response, "signupCandidateResponse");
      return response;
    } catch (error) {}
  }
);

const candidateSlice = createSlice({
  name: "candidate",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
    ErrorMsg: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupCandidate.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(signupCandidate.fulfilled, (state, action) => {
        if (action.payload?.status === 201) {
          state.isLoading = false;
          state.data = action.payload;
          state.isError = false;
          state.isSuccess = true;
          state.ErrorMsg = action?.payload?.data?.msg;
        } else {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          console.log(action?.payload,'iughuebn');
          state.ErrorMsg = Object.values(action?.payload || {})
          .flatMap((messages) => messages)
          .join('\n');
        }
      })
      .addCase(signupCandidate.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message;
      });
  },
});

export const selectCandidate = (state) => state.candidate.data;
export const selectCandidateStatus = (state) => state.candidate.status;
export const selectCandidateError = (state) => state.candidate.error;

export default candidateSlice.reducer;
