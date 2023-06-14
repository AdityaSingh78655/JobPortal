import { View } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import CustomHeader from "../../elements/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { LoginStyle } from "../../theme/styles/LoginStyle";
import { StringConstants, WebViewUrl } from "../../constants/StringConstants";

const PrivacyAndPolicy = () => {
  const navigation = useNavigation();
  return (
    <View style={LoginStyle.appView}>
      <CustomHeader
        title={StringConstants.PRIVACY_POLICY}
        onPress={() => navigation.goBack()}
      />
      <WebView
        source={{
          uri: WebViewUrl.PRIVACY_POLICY,
        }}
      />
    </View>
  );
};

export default PrivacyAndPolicy;
