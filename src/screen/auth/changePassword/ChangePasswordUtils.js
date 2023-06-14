import * as yup from "yup";
import { NumberConstants } from "../../../constants/NumberConstants";
import {
  ErrorConstants,
  RegexConstants,
} from "../../../constants/StringConstants";

export const changePasswordInitialValue = {
  oldPassword: "",
  newPassword: "",
  disabled: false,
};

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(
      NumberConstants.VALUE_6,
      ({ min }) =>
        `${ErrorConstants.PASSWORD_MUST} ${min} ${ErrorConstants.CHARACTER}`
    )
    .required(ErrorConstants.PASSWORD_REQUIRED)
    .matches(RegexConstants.PASSWORD, ErrorConstants.PASSWORD_MATCHES),
  newPassword: yup
    .string()
    .min(
      NumberConstants.VALUE_6,
      ({ min }) =>
        `${ErrorConstants.PASSWORD_MUST} ${min} ${ErrorConstants.CHARACTER}`
    )
    .required(ErrorConstants.PASSWORD_REQUIRED)
    .matches(RegexConstants.PASSWORD, ErrorConstants.PASSWORD_MATCHES),
});
