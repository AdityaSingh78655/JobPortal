import React, { useEffect, useState } from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { AppImages } from "../theme/AppImages";
import { useDispatch, useSelector } from "react-redux";
import { toastHide } from "../store/reducer/ToastSlice";
import { ToastMessageStyle } from "../theme/styles/ToastMessageStyle";
import { NumberConstants } from "../constants/NumberConstants";
import { AlignmentConstants, StringConstants } from "../constants/StringConstants";
import { ColorConstants } from "../theme/ColorConstants";

const ToastMessage = () => {
  const appToast = useSelector((state) => state?.toast);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const backgroundColor =
    appToast?.isError === false
      ? ColorConstants.GREEN
      : ColorConstants.RED;

  useEffect(() => {
    if (appToast.showToast) {
      setIsVisible(true);
      setTimeout(() => {
        dispatch(toastHide());
        setIsVisible(false);
      }, NumberConstants.VALUE_2000);
    }
  }, [appToast.showToast]);
  if (isVisible) {
    return (
      <View
        style={{
          backgroundColor: backgroundColor,
          zIndex: NumberConstants.VALUE_1,
          position: AlignmentConstants.ABSOLUTE,
          width: NumberConstants.VALUE_PERCENT_100,
        }}
      >
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={StringConstants.DARK_CONTENT}
        />
        <View
          style={[
            ToastMessageStyle.toastView,
            {
              backgroundColor: backgroundColor,
              paddingBottom: NumberConstants.VALUE_10,
            },
          ]}
        >
          <Image
            source={
              appToast?.isError === false
                ? AppImages.SUCCESS_TOAST
                : AppImages.ERROR_TOAST
            }
            style={ToastMessageStyle.imageStyle}
          />
          <Text style={ToastMessageStyle.toastMessage}>
            {appToast?.toastMessage}
          </Text>
        </View>
      </View>
    );
  } else return null;
};

export default ToastMessage;
