import { StyleSheet } from "react-native";
import { NumberConstants } from "../../constants/NumberConstants";
import { ColorConstants } from "../ColorConstants";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { AlignmentConstants } from "../../constants/StringConstants";

export const LoginStyle = StyleSheet.create({
  appView: { flex: NumberConstants.VALUE_1 },
  mainContainer: {
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_20),
    flex: dynamicSize(NumberConstants.VALUE_1),
    justifyContent: AlignmentConstants.CENTER,
  },
  pageTitleText: {
    fontSize: normalizeFont(NumberConstants.VALUE_40),
    color: ColorConstants.VIOLET,
    fontWeight: AlignmentConstants.BOLD,
  },
  forgotPasswordView: {
    flexDirection: AlignmentConstants.ROW,
    alignItems: AlignmentConstants.CENTER,
    justifyContent: AlignmentConstants.FLEX_END,
    bottom: dynamicSize(NumberConstants.VALUE_10),
    paddingBottom: dynamicSize(NumberConstants.VALUE_30),
  },
  forgotPasswordText: {
    color: ColorConstants.LIGHT_BLUE,
    fontWeight: NumberConstants.VALUE_STRING_400,
  },
  signupNavigateContainer: {
    flexDirection: AlignmentConstants.ROW,
    paddingTop: dynamicSize(NumberConstants.VALUE_5),
  },
  signupNavigateText: {
    fontWeight: AlignmentConstants.BOLD,
    color: ColorConstants.VIOLET,
  },
});
