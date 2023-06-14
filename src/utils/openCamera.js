import ImagePicker from "react-native-image-crop-picker";

const openCamera = (index, cb) => {
  const myAction =
    index === 1 ? ImagePicker.openPicker : ImagePicker.openCamera;
  const options = {
    width: 1000,
    height: 950,
    cropping: true,
    compressImageQuality: 0.5,
  };
  myAction(options)
    .then((image) => {
      cb(image);
    })
    .catch((error) => {});
};
export default openCamera;
