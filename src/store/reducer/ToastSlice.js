import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError:true,
  toastMessage:'', 
  showToast:false

};

const ToastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toastShown: (state,{payload}) => {
      state.isError = payload.isError;
      state.toastMessage = payload.toastMessage;
      state.showToast= true;
    },
    toastHide: (state) => {
        state.showToast= false;
      },
  },
});

export const { toastShown,toastHide } = ToastSlice.actions;
export default ToastSlice.reducer;
