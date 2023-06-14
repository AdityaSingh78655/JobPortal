import { StyleSheet } from "react-native";
import { NumberConstants } from "../../constants/NumberConstants";
import { ColorConstants } from "../ColorConstants";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { AlignmentConstants } from "../../constants/StringConstants";

export const SignupStyle = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_20),
    justifyContent: AlignmentConstants.CENTER,
    marginBottom: dynamicSize(NumberConstants.VALUE_2),
  },
  headerText: {
    fontSize: normalizeFont(NumberConstants.VALUE_23),
    fontWeight: AlignmentConstants.BOLD,
    paddingTop: dynamicSize(NumberConstants.VALUE_25),
    color: ColorConstants.BLACK,
  },
  inputBoxView: { top: dynamicSize(NumberConstants.VALUE_10) },
  workStatusTouch: {
    flexDirection: AlignmentConstants.ROW,
    borderWidth: dynamicSize(NumberConstants.VALUE_1),
    borderTopLeftRadius: dynamicSize(NumberConstants.VALUE_20),
    borderBottomRightRadius: dynamicSize(NumberConstants.VALUE_20),
    borderBottomLeftRadius: dynamicSize(NumberConstants.VALUE_10),
    borderTopRightRadius: dynamicSize(NumberConstants.VALUE_10),
    marginHorizontal: dynamicSize(NumberConstants.VALUE_5),
    padding: dynamicSize(NumberConstants.VALUE_5),
    borderColor: ColorConstants.LIGHT_GREY,
  },
  workStatusIcon: {
    height: dynamicSize(NumberConstants.VALUE_25),
    width: dynamicSize(NumberConstants.VALUE_25),
  },
  workStatusHeading: {
    fontSize: normalizeFont(NumberConstants.VALUE_15),
    fontWeight: NumberConstants.VALUE_STRING_600,
    color: ColorConstants.LIGHT_BLUE,
  },
  workStatusText: {
    width: dynamicSize(NumberConstants.VALUE_115),
    fontSize: normalizeFont(NumberConstants.VALUE_11),
    color: ColorConstants.DARK_GREY,
  },
  resumeView: {
    borderWidth: dynamicSize(NumberConstants.VALUE_1),
    borderRadius: dynamicSize(NumberConstants.VALUE_20),
    width: NumberConstants.VALUE_PERCENT_90,
    flexDirection: AlignmentConstants.ROW,
    borderColor: ColorConstants.LIGHT_GREY,
  },
  resumeMainContainer: { height: dynamicSize(NumberConstants.VALUE_50) },
  documentUploadText: {
    fontSize: normalizeFont(NumberConstants.VALUE_10),
    paddingTop: dynamicSize(NumberConstants.VALUE_4),
  },
  conditionsView: {
    paddingTop: dynamicSize(NumberConstants.VALUE_10),
  },
  conditionText: {
    fontSize: normalizeFont(NumberConstants.VALUE_12),
    marginBottom: dynamicSize(NumberConstants.VALUE_10),
  },
  conditionTouchable: {
    fontSize: normalizeFont(NumberConstants.VALUE_12),
    color: ColorConstants.LIGHT_BLUE,
  },
  resumeText: { paddingTop: dynamicSize(NumberConstants.VALUE_30) },
  container: {
    flexDirection: AlignmentConstants.ROW,
    height: dynamicSize(NumberConstants.VALUE_40),
  },
  selectedHeader: {
    borderBottomWidth: dynamicSize(NumberConstants.VALUE_2),
    borderColor: ColorConstants.VIOLET,
  },
  unSelectedHeader: { borderBottomWidth: dynamicSize(NumberConstants.VALUE_0) },
  userTypeHeader: {
    color: ColorConstants.VIOLET,
    fontWeight: AlignmentConstants.BOLD,
    fontSize: normalizeFont(NumberConstants.VALUE_20),
    alignSelf: AlignmentConstants.CENTER,
    paddingVertical: dynamicSize(NumberConstants.VALUE_7),
  },
  workStatusView: { paddingLeft: dynamicSize(NumberConstants.VALUE_5) },
  workStatusContainer: { flexDirection: AlignmentConstants.ROW},
});
