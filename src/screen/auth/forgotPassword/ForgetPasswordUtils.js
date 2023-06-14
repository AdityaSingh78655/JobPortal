import * as yup from "yup";
import { ErrorConstants, RegexConstants } from "../../../constants/StringConstants";
import { NumberConstants } from "../../../constants/NumberConstants";

export const forgetPasswordInitialValue = {
  email: "",
  password: "",
};

export const forgetPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(ErrorConstants.EMAIL)
    .required(ErrorConstants.EMAIL_REQUIRED),
  password: yup
    .string()
    .min(
      NumberConstants.VALUE_6,
      ({ min }) =>
        `${ErrorConstants.PASSWORD_MUST} ${min} ${ErrorConstants.CHARACTER}`
    )
    .required(ErrorConstants.PASSWORD_REQUIRED)
    .matches(RegexConstants.PASSWORD, ErrorConstants.PASSWORD_MATCHES),
});
