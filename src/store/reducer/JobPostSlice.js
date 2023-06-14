import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";
import { ApiUrl } from "../../constants/StringConstants";

export const jobPostRecruiter = createAsyncThunk(
  "jobPost/recruiter",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.post(
        ApiUrl.RECRUITER_JOB,
        payload
      );
      return response;
    } catch (error) {}
  }
);

const JobPostSlice = createSlice({
  name: "jobPost",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
    ErrorMsg: "",
    RessMsg: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(jobPostRecruiter.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(jobPostRecruiter.fulfilled, (state, action) => {
        if (action.payload?.status === 201) {
          state.isLoading = false;
          state.data = action.payload;
          state.isError = false;
          state.isSuccess = true;
          state.RessMsg = action?.payload?.data?.msg;
        } else {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.ErrorMsg =  Object.values(action?.payload || {})
          .flatMap((messages) => messages)
          .join('\n');
        }
      })
      .addCase(jobPostRecruiter.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message;
      });
  },
});

export const selectJobPost = (state) => state.jobPost.data;
export const selectJobPostStatus = (state) => state.jobPost.status;
export const selectJobPostError = (state) => state.jobPost.error;

export default JobPostSlice.reducer;
