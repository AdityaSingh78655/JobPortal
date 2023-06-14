import * as yup from "yup";
import { NumberConstants } from "../../../constants/NumberConstants";
import {
  ErrorConstants,
  RegexConstants,
} from "../../../constants/StringConstants";

export const loginInitialValue = {
  user_id: "",
  password: "",
  disabled: false,
};

export const loginValidationSchema = yup.object().shape({
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
