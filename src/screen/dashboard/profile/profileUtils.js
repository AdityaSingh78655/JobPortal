import * as yup from "yup";
import {
  ErrorConstants,
  RegexConstants,
} from "../../../constants/StringConstants";
import { NumberConstants } from "../../../constants/NumberConstants";

export const profileValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(ErrorConstants.EMAIL)
    .required(ErrorConstants.EMAIL_REQUIRED),
  fullname: yup
    .string()
    .min(
      3,
      ({ min }) =>
        `${ErrorConstants.NAME_MUST_BE} ${min} ${ErrorConstants.CHARACTERS}`
    )
    .required(ErrorConstants.NAME_IS_REQUIRED)
    .matches(RegexConstants.NAME, ErrorConstants.MUST_BE_CHARACTER),
  mobile_number: yup
    .string()
    .min(
      NumberConstants.VALUE_10,
      ({ min }) =>
        `${ErrorConstants.MOBILE_NO_MUST_BE} ${min} ${ErrorConstants.CHARACTERS}`
    )
    .required(ErrorConstants.MOBILE_NO_REQUIRED)
    .matches(RegexConstants.MOBILE_NUMBER, ErrorConstants.CHARACTER),
});
