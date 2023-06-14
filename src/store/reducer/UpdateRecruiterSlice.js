import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";

export const editRecruiter = createAsyncThunk(
  "recruiter/edit",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.patch(
        "/recruiter/edit/profile/",
        payload
      );
      console.log(response?.data, "jasjjhda");
      return response?.data;
    } catch (error) {}
  }
);

const UpdateRecruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editRecruiter.pending, (state) => {
        console.log("pending");
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(editRecruiter.fulfilled, (state, action) => {
        console.log(action, "action.payload?.status");
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.data = action.payload;
          state.isError = false;
          state.isSuccess = true;
          state.ErrorMsg = action?.payload;
          console.log(action?.payload, "successmessage");
        } else {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.ErrorMsg = action?.payload?.msg;
          console.log(action?.payload, "errormessgae");
        }
      })
      .addCase(editRecruiter.rejected, (state, action) => {
        console.log("rejected");
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message;
        console.log(action?.error, "updatedError");
      });
  },
});

export const selectRecruiter = (state) => state.recruiter.data;
export const selectRecruiterStatus = (state) => state.recruiter.status;
export const selectRecruiterError = (state) => state.recruiter.error;

export default UpdateRecruiterSlice.reducer;
