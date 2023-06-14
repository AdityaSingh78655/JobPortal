import { StyleSheet } from "react-native";
import { NumberConstants } from "../../constants/NumberConstants";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { ColorConstants } from "../ColorConstants";
import { AlignmentConstants } from "../../constants/StringConstants";

export const ProfileStyle = StyleSheet.create({
  conatiner: {
    flex: NumberConstants.VALUE_1,
  },
  profileMainView: {
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_20),
    paddingTop: dynamicSize(NumberConstants.VALUE_20),
    flex: NumberConstants.VALUE_1,
  },
  radioButtonView: {
    flexDirection: AlignmentConstants.ROW,
    paddingTop: dynamicSize(NumberConstants.VALUE_25),
  },
  radioText: {
    fontSize: normalizeFont(NumberConstants.VALUE_20),
    color: ColorConstants.VIOLET,
    fontWeight: AlignmentConstants.BOLD,
    paddingRight: dynamicSize(NumberConstants.VALUE_20),
  },
  customButtonView: {
    paddingTop: dynamicSize(NumberConstants.VALUE_20),
    paddingBottom: dynamicSize(NumberConstants.VALUE_20),
  },
});
