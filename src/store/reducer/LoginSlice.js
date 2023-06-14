import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstanceAuth from "../../network/axiosWithAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiUrl } from "../../constants/StringConstants";

export const loginCandidate = createAsyncThunk(
  "candidate/login",
  async (payload) => {
    try {
      const response = await axiosInstanceAuth.post(
        ApiUrl.CANDIDATE_LOGIN,
        payload
      );
      console.log(response,'jsss');
      return response;
      
    } catch (error) {
      console.log(error,'eooss');
    }
  }
);
const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    isSuccess: false,
    token: "",
    refresh:'',
  },
  reducers: {
    loginUser: (state, action) => {
      state.data = action.payload;
    },
    logOut:(state)=>{
      state.token = null
    },
    updateToken:(state, action)=>{
      state.token = action.payload?.token;
      state.refresh= action.payload?.refresh;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginCandidate.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.token = "";
      })
      .addCase(loginCandidate.fulfilled, (state, action) => {
        if (action.payload?.status === 200) {
          state.isLoading = false;
          state.data = action.payload?.data?.role;
          state.isError = false;
          state.isSuccess = true;
          state.ErrorMsg = action?.payload?.data?.msg;
          state.token = action?.payload?.data?.access;
          state.refresh = action?.payload?.data?.refresh;
          AsyncStorage.setItem(
            "token",
            JSON.stringify(action?.payload?.data?.access)
          );
        } else {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.token = "";
          console.log(action?.payload,'responsedataof');
          state.ErrorMsg =  Object.values(action?.payload || {})
          .flatMap((messages) => messages)
          .join('\n');
        }
      })
      .addCase(loginCandidate.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.ErrorMsg = action?.payload?.data?.msg;
        state.token = "";
        AsyncStorage.removeItem("token");
      });
  },
});

export const selectCandidate = (state) => state.candidate.data;
export const selectCandidateStatus = (state) => state.candidate.status;
export const selectCandidateError = (state) => state.candidate.error;
export const { loginUser,logOut,updateToken } = loginSlice.actions;
export default loginSlice.reducer;
