import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducer/LoginSlice";
import profileSlice from "./reducer/ProfileSlice";
import candidateSlice from "./reducer/SignupSlice";
import SignupRecruiterSlice from "./reducer/signUpRecruiter";
import LoaderSlice from "./reducer/LoaderSlice";
import ToastSlice from "./reducer/ToastSlice";
import ChangePasswordSlice from "./reducer/ChangePasswordSlice";
import editSlice from "./reducer/UpdateUserSlice";
import ProfileRecruiterSlice from "./reducer/ProfileRecruiterSlice";
import UpdateRecruiterSlice from "./reducer/UpdateRecruiterSlice";
import ForgetPasswordSlice from "./reducer/ForgetPasswordSlice";
import JobPostSlice from "./reducer/JobPostSlice";
import RecruiterJobGetSlice from "./reducer/RecruiterJobGetSlice";
import CandidateJobsSlice from "./reducer/CandidateJobsSlice";

const store = configureStore({
  reducer: {
    candidate: candidateSlice,
    login: loginSlice,
    profile: profileSlice,
    recruiterProfile: ProfileRecruiterSlice,
    recruiter: SignupRecruiterSlice,
    loader: LoaderSlice,
    toast: ToastSlice,
    changePassword: ChangePasswordSlice,
    profileUpdate: editSlice,
    updateRecruiter: UpdateRecruiterSlice,
    forgetPassword:ForgetPasswordSlice,
    jobPost: JobPostSlice,
    recruiterPosts: RecruiterJobGetSlice,
    candidateJob: CandidateJobsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
