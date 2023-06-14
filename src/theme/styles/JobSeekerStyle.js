import { StyleSheet } from "react-native";
import { ColorConstants } from "../ColorConstants";
import { NumberConstants } from "../../constants/NumberConstants";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { AlignmentConstants } from "../../constants/StringConstants";

export const JobSeekerStyle = StyleSheet.create({
  renderItemMainView: {
    borderWidth: dynamicSize(NumberConstants.VALUE_1),
    padding: dynamicSize(NumberConstants.VALUE_10),
    margin: dynamicSize(NumberConstants.VALUE_10),
    borderRadius: dynamicSize(NumberConstants.VALUE_10),
    backgroundColor: ColorConstants.BACKGROUND_COLOR,
    flexDirection: AlignmentConstants.ROW,
    justifyContent: AlignmentConstants.SPACE_BETWEEN,
  },
  headingText: {
    fontSize: normalizeFont(NumberConstants.VALUE_20),
    fontWeight: AlignmentConstants.BOLD,
    color: ColorConstants.VIOLET,
  },
  touchableButton: {
    backgroundColor: ColorConstants.VIOLET,
    width: dynamicSize(NumberConstants.VALUE_90),
    alignItems: AlignmentConstants.CENTER,
    height: dynamicSize(NumberConstants.VALUE_30),
    padding: dynamicSize(NumberConstants.VALUE_5),
    marginTop: dynamicSize(NumberConstants.VALUE_8),
    borderRadius: dynamicSize(NumberConstants.VALUE_10),
  },
  imageStyle: {
    width: dynamicSize(NumberConstants.VALUE_30),
    height: dynamicSize(NumberConstants.VALUE_30),
  },
  mainView: {
    flex: dynamicSize(NumberConstants.VALUE_1),
    paddingHorizontal:dynamicSize(NumberConstants.VALUE_20),
    paddingTop: dynamicSize(NumberConstants.VALUE_20),
  },
  headingMainText: {
    marginLeft: dynamicSize(NumberConstants.VALUE_10),
    fontSize: normalizeFont(NumberConstants.VALUE_25),
    fontWeight: NumberConstants.VALUE_STRING_700,
    color: ColorConstants.VIOLET,
    alignSelf:AlignmentConstants.CENTER,
  },
  textInputView: {
    flexDirection: AlignmentConstants.ROW,
    borderWidth: dynamicSize(NumberConstants.VALUE_1),
    borderRadius: dynamicSize(NumberConstants.VALUE_10),
    marginTop: dynamicSize(NumberConstants.VALUE_20),
    justifyContent: AlignmentConstants.SPACE_BETWEEN,
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_5),
  },
  searchImage: {
    height: dynamicSize(NumberConstants.VALUE_25),
    width: dynamicSize(NumberConstants.VALUE_25),
    marginVertical: dynamicSize(NumberConstants.VALUE_10),
    marginRight: dynamicSize(NumberConstants.VALUE_10),
  },
  flatListStyle: {
    marginTop: dynamicSize(NumberConstants.VALUE_20),
  },
  textInputStyle: {
    paddingLeft: dynamicSize(NumberConstants.VALUE_10),
    width: dynamicSize(NumberConstants.VALUE_230),
  },
  cardText: { fontWeight: AlignmentConstants.BOLD, color: ColorConstants.WHITE }
});
