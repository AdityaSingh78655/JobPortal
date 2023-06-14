import { NumberConstants } from "../../constants/NumberConstants";
import { AlignmentConstants } from "../../constants/StringConstants";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { ColorConstants } from "../ColorConstants";

export const ForgotPasswordStyle = {
  mainContainer: {
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_20),
    flex: dynamicSize(NumberConstants.VALUE_1),
  },
  headerContainer: { flex: dynamicSize(NumberConstants.VALUE_FRAC_1) },
  headerImage: {
    height: dynamicSize(NumberConstants.VALUE_40),
    width: dynamicSize(NumberConstants.VALUE_40),
  },
  container: {
    justifyContent: AlignmentConstants.CENTER,
    flex: dynamicSize(NumberConstants.VALUE_FRAC_7),
  },
  passwordText: {
    fontWeight: AlignmentConstants.BOLD,
    fontSize: normalizeFont(NumberConstants.VALUE_35),
    color: ColorConstants.VIOLET,
  },
  passwordDescriptionText: {
    fontSize: normalizeFont(NumberConstants.VALUE_18),
    paddingTop: dynamicSize(NumberConstants.VALUE_20),
  },
};
