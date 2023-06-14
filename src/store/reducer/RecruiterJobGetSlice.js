import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";
import { ApiUrl } from "../../constants/StringConstants";

export const recruiterJobs = createAsyncThunk("user/details", async () => {
  try {
    const response = await axiosInstanceAuth.get(ApiUrl.RECRUITER_JOB);
    return response;
  } catch (error) {}
});

const RecruiterJobSlice = createSlice({
  name: "recruiterJob",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recruiterJobs.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(recruiterJobs.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.data = action.payload;
          state.isError = false;
          state.isSuccess = true;
          state.ErrorMsg = action?.payload?.data?.msg;
        } else {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.ErrorMsg =  Object.values(action?.payload || {})
          .flatMap((messages) => messages)
          .join('\n');
        }
      })
      .addCase(recruiterJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message;
      });
  },
});

export default RecruiterJobSlice.reducer;
