import { View, Alert, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AppImages } from "../theme/AppImages";
import openCamera from "../utils/openCamera";
import { askCameraPermission } from "../utils/AskCameraPermission";
import { ImagePickerstyle } from "../theme/styles/imagePickerStyle";
import { StringConstants } from "../constants/StringConstants";

const ImagePickerComponent = () => {
  const [picture, setPictures] = useState();

  const cb = (image) => {
    setPictures(image.path);
  };
  //Image Upload func
  const UploadImage = () => {
    askCameraPermission();
    openCameraOption();
  };

  // Open Media method
  const openCameraOption = () => {
    Alert.alert(StringConstants.CHOOSE, StringConstants.CAMERA_OPTION, [
      {
        text: StringConstants.CAMERA,
        onPress: () => openCamera(0, cb),
        style: StringConstants.CANCLE,
      },
      {
        text: StringConstants.GALLERY,
        onPress: () => openCamera(1, cb),
      },
    ]);
  };

  return (
    <View>
      <Image
        style={ImagePickerstyle.image}
        source={picture === undefined ? AppImages.USER : { uri: picture }}
      />

      <TouchableOpacity
        onPress={() => UploadImage()}
        style={ImagePickerstyle.buttonTouch}
      >
        <Image
          source={AppImages.EDIT_USER}
          style={ImagePickerstyle.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;
