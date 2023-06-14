import { StyleSheet } from "react-native";
import { ColorConstants } from "../ColorConstants";
import { NumberConstants } from "../../constants/NumberConstants";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { AlignmentConstants } from "../../constants/StringConstants";

export const InputBoxStyle = StyleSheet.create({
  hintText: { color: ColorConstants.LIGHT_GREY },
  errorMessage: {
    color: ColorConstants.RED,
    fontSize: normalizeFont(NumberConstants.VALUE_15),
    height: dynamicSize(NumberConstants.VALUE_20),
  },
  mainContainer: {
    paddingTop: dynamicSize(NumberConstants.VALUE_25),
    height: dynamicSize(NumberConstants.VALUE_120),
  },
  inputTitle: {
    fontSize: normalizeFont(NumberConstants.VALUE_18),
    paddingBottom: dynamicSize(NumberConstants.VALUE_8),
    color: ColorConstants.VIOLET,
    fontWeight: NumberConstants.VALUE_STRING_600,
    paddingVertical: dynamicSize(NumberConstants.VALUE_5),
  },
  textInputView: {
    alignItems: AlignmentConstants.CENTER,
    borderWidth: dynamicSize(NumberConstants.VALUE_1),
    paddingVertical: dynamicSize(NumberConstants.VALUE_5),
    borderColor: ColorConstants.LIGHT_GREY,
  },
  textInput: {
    flex: dynamicSize(NumberConstants.VALUE_1),
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_10),
    paddingVertical: dynamicSize(NumberConstants.VALUE_5),
  },
  passwordShowTouch: { paddingRight: dynamicSize(NumberConstants.VALUE_10) },
  showPasswordText: {
    color: ColorConstants.LIGHT_BLUE,
    fontWeight: NumberConstants.VALUE_STRING_600,
  },
  mobileNumberText: {
    paddingLeft: dynamicSize(NumberConstants.VALUE_5),
    color: ColorConstants.BLACK,
  },
});

export const CustomButtonStyle = StyleSheet.create({
  mainContainer: { alignItems: AlignmentConstants.CENTER },
  buttonTitle: {
    color: ColorConstants.WHITE,
    fontWeight: AlignmentConstants.BOLD,
    paddingVertical: dynamicSize(NumberConstants.VALUE_2),
  },
});

export const SettingStyle = StyleSheet.create({
  mainContainer: {
    flex: NumberConstants.VALUE_1,
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_20),
    paddingBottom: dynamicSize(NumberConstants.VALUE_20),
  },
  container: {
    flexDirection: AlignmentConstants.ROW,
    alignItems: AlignmentConstants.CENTER,
    paddingVertical: dynamicSize(NumberConstants.VALUE_10),
  },
  flatListMainContainer: {
    paddingVertical: dynamicSize(NumberConstants.VALUE_10),
    borderBottomWidth: dynamicSize(NumberConstants.VALUE_1),
    flexDirection: AlignmentConstants.ROW,
    alignItems: AlignmentConstants.CENTER,
    justifyContent: AlignmentConstants.SPACE_BETWEEN,
  },
  titleText: {
    fontSize: normalizeFont(NumberConstants.VALUE_20),
    paddingBottom: dynamicSize(NumberConstants.VALUE_5),
  },
  headerTitleText: {
    paddingLeft: dynamicSize(NumberConstants.VALUE_10),
    fontSize: normalizeFont(NumberConstants.VALUE_22),
    fontWeight: NumberConstants.VALUE_STRING_600,
    color: ColorConstants.VIOLET,
  },
});

export const DrawerStyle = StyleSheet.create({
  drawerHeader: {
    alignItems: AlignmentConstants.CENTER,
    justifyContent: AlignmentConstants.CENTER,
    height: dynamicSize(NumberConstants.VALUE_180),
  },
  profilePicture: {
    width: dynamicSize(NumberConstants.VALUE_100),
    height: dynamicSize(NumberConstants.VALUE_100),
    borderRadius: dynamicSize(NumberConstants.VALUE_50),
  },
  drawerNavName: {
    paddingTop: dynamicSize(NumberConstants.VALUE_5),
    fontSize: normalizeFont(NumberConstants.VALUE_18),
    color: ColorConstants.VIOLET,
    fontWeight: NumberConstants.VALUE_STRING_600,
  },
  drawerNavDesignation: {
    fontSize: normalizeFont(NumberConstants.VALUE_15),
    color: ColorConstants.VIOLET,
  },
});

export const customDrawerStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: AlignmentConstants.ROW,
    paddingBottom: dynamicSize(NumberConstants.VALUE_10),
  },
  titleText: {
    marginLeft: dynamicSize(NumberConstants.VALUE_10),
    fontSize: normalizeFont(NumberConstants.VALUE_25),
    fontWeight: NumberConstants.VALUE_STRING_700,
    color: ColorConstants.VIOLET,
    alignSelf: AlignmentConstants.CENTER,
  },
});
