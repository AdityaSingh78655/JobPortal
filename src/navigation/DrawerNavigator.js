import React from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import JobSeeker from "../screen/dashboard/jobSeeker/JobSeeker";
import Profile from "../screen/dashboard/profile/Profile";
import RecuiterDashBoard from "../screen/dashboard/recuiter/RecuiterDashBoard";
import { Image, Text, View } from "react-native";
import { AppImages } from "../theme/AppImages";
import { DrawerStyle } from "../theme/styles/CustomElementStyle";
import Setting from "../screen/drawerScreen/Setting";
import ChangePassword from "../screen/auth/changePassword/ChangePassword";
import { RouteConstants, StringConstants } from "../constants/StringConstants";
import { NumberConstants } from "../constants/NumberConstants";
import RecruiterProfile from "../screen/dashboard/recruiterProfile/RecruiterProfile";
import { useSelector } from "react-redux";
const Drawer = createDrawerNavigator();

const CustomDrawerHeader = () => {

//   const loginData = useSelector((state) => state?.login);
// console.log(loginData,'loginData211');

  return (
    <View style={DrawerStyle.drawerHeader}>
      <Image source={AppImages.USER} style={DrawerStyle.profilePicture} />
      <Text style={DrawerStyle.drawerNavName}>
        {StringConstants.HELLO_TEAM}
      </Text>
    </View>
  );
};

const DrawerNavigator = ({ route }) => {
  const ProfileType = route?.params?.profileRole;

  return (
    <Drawer.Navigator
    screenOptions={{headerShown:false}}
      initialRouteName={
        ProfileType === 1
          ? RouteConstants.JOB_SEEKER
          : RouteConstants.RECRUITER_DASHBOARD
      }
      drawerContent={(props) => (
        <View>
          <CustomDrawerHeader />
          <DrawerItemList {...props} />
        </View>
      )}
    >
      <Drawer.Screen
        name={RouteConstants.HOME}
        component={
          ProfileType == NumberConstants.VALUE_1 ? JobSeeker : RecuiterDashBoard
        }
      />
      <Drawer.Screen
        name={RouteConstants.PROFILE}
        component={  ProfileType == NumberConstants.VALUE_1 ? Profile : RecruiterProfile}
      />
      <Drawer.Screen
        name={RouteConstants.SETTING}
        component={Setting}
      />
      <Drawer.Screen
        name={RouteConstants.CHANGE_PASSWORD}
        component={ChangePassword}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
