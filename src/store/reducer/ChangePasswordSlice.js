import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";
import { ApiUrl } from "../../constants/StringConstants";

export const changePassword = createAsyncThunk(
  "changePassword",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.post(
        ApiUrl.CHANGE_PASSWORD,
        payload
      );
      console.log(response, "changePasswordResponse");
      return response;
    } catch (error) {}
  }
);

const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        if (action?.payload?.status === 200) {
          
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
          // console.log(action?.payload?.error?.old_password[0],'fhndsffds');
        }
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message;
      });
  },
});

export const selectCandidate = (state) => state.changePassword.data;
export const selectCandidateStatus = (state) => state.changePassword.status;
export const selectCandidateError = (state) => state.changePassword.error;

export default changePasswordSlice.reducer;
