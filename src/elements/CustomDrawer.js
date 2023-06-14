import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AppImages } from "../theme/AppImages";
import { customDrawerStyle } from "../theme/styles/CustomElementStyle";

const CustomDrawer = ({ title, onPress }) => {
  return (
    <View style={customDrawerStyle.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={AppImages.MENU} />
      </TouchableOpacity>
      <Text
        style={customDrawerStyle.titleText}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomDrawer;
