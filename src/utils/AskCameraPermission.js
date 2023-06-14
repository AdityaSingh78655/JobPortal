import { Platform } from "react-native";
import { request, PERMISSIONS } from "react-native-permissions";

export const askCameraPermission = () => {
  request(
    Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
  );
};
