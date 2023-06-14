import { StyleSheet } from "react-native";

import { NumberConstants } from "../../constants/NumberConstants";
import { dynamicSize, normalizeFont } from "../../utils/responsive";
import { AlignmentConstants } from "../../constants/StringConstants";

export const ToastMessageStyle = StyleSheet.create({
  imageStyle: {
    marginRight: dynamicSize(NumberConstants.VALUE_5),
    height: dynamicSize(NumberConstants.VALUE_30),
    width: dynamicSize(NumberConstants.VALUE_30),
  },
  toastMessage: {
    fontSize: normalizeFont(NumberConstants.VALUE_18),
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_10),
    paddingTop: dynamicSize(NumberConstants.VALUE_3),
  },
  toastView: {
    paddingTop: dynamicSize(NumberConstants.VALUE_60),
    paddingHorizontal: dynamicSize(NumberConstants.VALUE_30),
    position: AlignmentConstants.RELATIVE,
    flexDirection: AlignmentConstants.ROW,
    paddingBottom: dynamicSize(NumberConstants.VALUE_5),
  },
});
