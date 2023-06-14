import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ForgotPasswordStyle } from "../theme/styles/ForgotPasswordStyle";
import { SettingStyle } from "../theme/styles/CustomElementStyle";
import { AppImages } from "../theme/AppImages";

const CustomHeader = ({title, onPress}) => {
  return (
    <View style={[SettingStyle.container]}>
      <TouchableOpacity
      onPress={onPress}
      >
        <Image
          style={ForgotPasswordStyle.headerImage}
          source={AppImages.BACK}
        />
      </TouchableOpacity>
      <Text
        style={SettingStyle.headerTitleText}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
