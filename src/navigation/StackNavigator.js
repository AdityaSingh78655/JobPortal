import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/auth/login/Login";
import Signup from "../screen/auth/signup/Signup";
import { RouteConstants } from "../constants/StringConstants";
import DrawerNavigator from "./DrawerNavigator";
import ForgotPassword from "../screen/auth/forgotPassword/ForgotPassword";
import TermAndCond from "../screen/drawerScreen/TermAndCond";
import PrivacyAndPolicy from "../screen/drawerScreen/PrivacyAndPolicy";
import RecruiterJobPost from "../screen/dashboard/recuiter/RecruiterJobPosts";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RouteConstants.LOGIN}
        component={Login}
      />
      <Stack.Screen
        name={RouteConstants.SIGNUP}
        component={Signup}
      />
      <Stack.Screen
        name={RouteConstants.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen
        name={RouteConstants.TERM_CONDITION}
        component={TermAndCond}
      />
      <Stack.Screen
        name={RouteConstants.PRIVACY_AND_POLICY}
        component={PrivacyAndPolicy}
      />
       <Stack.Screen
        name={"JobPost"}
        component={RecruiterJobPost}
      />
      <Stack.Screen
        name={RouteConstants.DRAWER_NAVIGATOR}
        component={DrawerNavigator}
      />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
