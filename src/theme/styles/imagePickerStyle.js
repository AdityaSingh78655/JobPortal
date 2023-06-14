import { StyleSheet } from "react-native";
import { NumberConstants } from "../../constants/NumberConstants";
import { dynamicSize } from "../../utils/responsive";
import { ColorConstants } from "../ColorConstants";
import { AlignmentConstants } from "../../constants/StringConstants";

export const ImagePickerstyle = StyleSheet.create({
  image: {
    width: dynamicSize(NumberConstants.VALUE_100),
    height: dynamicSize(NumberConstants.VALUE_100),
    backgroundColor: ColorConstants.VIOLET,
    borderRadius: dynamicSize(NumberConstants.VALUE_90),
    alignSelf: AlignmentConstants.CENTER,
  },
  buttonTouch: {
    alignSelf: AlignmentConstants.CENTER,
    left: dynamicSize(NumberConstants.VALUE_20),
    bottom: dynamicSize(NumberConstants.VALUE_20),
  },
  buttonImage: {
    tintColor: ColorConstants.BLACK,
    width: dynamicSize(NumberConstants.VALUE_30),
    height: dynamicSize(NumberConstants.VALUE_30),
  },
});
