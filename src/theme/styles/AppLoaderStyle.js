import { StyleSheet } from "react-native";
import { NumberConstants } from "../../constants/NumberConstants";
import { AlignmentConstants } from "../../constants/StringConstants";
import { height } from "../../utils/responsive";

export const AppLoaderStyle = StyleSheet.create({
  container: {
    flex: NumberConstants.VALUE_1,
    justifyContent: AlignmentConstants.CENTER,
    alignItems: AlignmentConstants.CENTER,
    position: AlignmentConstants.ABSOLUTE,
    alignSelf: AlignmentConstants.CENTER,
    zIndex: NumberConstants.VALUE_1,
    top: height / NumberConstants.VALUE_2,
  },
});
