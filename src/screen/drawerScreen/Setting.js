import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SettingStyle } from "../../theme/styles/CustomElementStyle";
import CustomHeader from "../../elements/CustomHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { profileCandidate } from "../../store/reducer/ProfileSlice";
import { useDispatch } from "react-redux";
import { AppImages } from "../../theme/AppImages";
import { StringConstants } from "../../constants/StringConstants";
import { SettingData } from "../../utils/AppData";
const Setting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileCandidate());
  }, [dispatch]);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {}
    navigation.navigate(StringConstants.LOGIN);
  };

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
        <View style={SettingStyle.flatListMainContainer}>
          <View>
            <Text style={SettingStyle.titleText}>{item?.title}</Text>
            <Text>{item.description}</Text>
          </View>
          <Image source={AppImages.NEXT} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={SettingStyle.mainContainer}>
      <CustomHeader
        onPress={() => navigation.goBack()}
        title={StringConstants.SETTING}
      />
      <FlatList
        data={SettingData}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
      <Button title={StringConstants.LOG_OUT} onPress={removeValue} />
    </View>
  );
};

export default Setting;
