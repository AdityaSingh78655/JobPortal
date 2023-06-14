import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const LoaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loaderShown: (state) => {
      state.loader = true;
    },
    loaderHide: (state) => {
      state.loader = false;
    },
  },
});

export const { loaderShown, loaderHide } = LoaderSlice.actions;
export default LoaderSlice.reducer;
