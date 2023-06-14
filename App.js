import { SafeAreaView } from "react-native";
import React from "react";
import { LoginStyle } from "./src/theme/styles/LoginStyle";
import MainNavigator from "./src/navigation/MainNavigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/store/store";
import AppLoader from "./src/elements/AppLoader";
import ToastMessage from "./src/elements/ToastMessage";

const App = () => {
  return (
    <Provider store={store}>
      <ToastMessage />
      <SafeAreaView style={LoginStyle.appView}>
        <MainNavigator />
        <AppLoader />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
