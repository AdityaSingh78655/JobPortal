import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
import { AppLoaderStyle } from "../theme/styles/AppLoaderStyle";
import { ColorConstants } from "../theme/ColorConstants";
import { StringConstants } from "../constants/StringConstants";

const AppLoader = () => {
  const appLoader = useSelector((state) => state?.loader?.loader);
  useEffect(() => {}, [appLoader]);
  if (appLoader) {
    return (
      <View style={AppLoaderStyle.container}>
        <ActivityIndicator
          size={StringConstants.LARGE}
          color={ColorConstants.VIOLET}
        />
      </View>
    );
  } else {
    return null;
  }
};

export default AppLoader;
