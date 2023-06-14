import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CustomButtonStyle } from "../theme/styles/CustomElementStyle";
import { halfWidth } from "../utils/responsive";

const CustomButton = ({
  title,
  backgroundColor,
  fontSize,
  disabled,
  onSubmit,
  width,
  borderRadius,
  modalButton
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onSubmit}
        disabled={disabled}
        style={[
          CustomButtonStyle.mainContainer,
          {
            backgroundColor: backgroundColor,
            width: modalButton ? halfWidth : width,
            borderRadius: borderRadius,
          },
        ]}
      >
        <Text
          style={[CustomButtonStyle.buttonTitle, (fontSize = { fontSize })]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
