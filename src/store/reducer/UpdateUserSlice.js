import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";
import { ApiUrl } from "../../constants/StringConstants";

export const editCandidate = createAsyncThunk(
  "candidate/edit",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.patch(
        ApiUrl.CANDIDATE_EDIT_PROFILE,
        payload
      );
  
      return response;
    } catch (error) {}
  }
);

const editSlice = createSlice({
  name: "candidate",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
    resMsg:'',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editCandidate.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(editCandidate.fulfilled, (state, action) => {
        console.log(action?.payload?.data?.msg,'giojmbgidbjn');
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
      .addCase(editCandidate.rejected, (state, action) => {
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

export default editSlice.reducer;
