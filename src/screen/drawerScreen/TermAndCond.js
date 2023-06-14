import { View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import CustomHeader from "../../elements/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { LoginStyle } from "../../theme/styles/LoginStyle";
import { StringConstants, WebViewUrl } from "../../constants/StringConstants";

const TermAndCond = () => {
  const navigation = useNavigation();
  return (
    <View style={LoginStyle.appView}>
      <CustomHeader
        title={StringConstants.TERM_CON}
        onPress={() => navigation.goBack()}
      />
      <WebView
        source={{
          uri: WebViewUrl.TERM_CONDITION,
        }}
      />
    </View>
  );
};

export default TermAndCond;
