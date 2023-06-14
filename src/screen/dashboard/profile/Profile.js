import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ImagePickerComponent from "../../../elements/ImagePickerComponent";
import { SignupStyle } from "../../../theme/styles/SignupStyle";
import InputBox from "../../../elements/InputBox";
import RadioForm from "react-native-simple-radio-button";
import {
  InputBoxConstants,
  RouteConstants,
  StringConstants,
} from "../../../constants/StringConstants";
import CustomButton from "../../../elements/CustomButton";
import { ColorConstants } from "../../../theme/ColorConstants";
import { useNavigation } from "@react-navigation/native";
import { NumberConstants } from "../../../constants/NumberConstants";
import { InputBoxStyle } from "../../../theme/styles/CustomElementStyle";
import DocumentPicker from "react-native-document-picker";
import { useDispatch, useSelector } from "react-redux";
import { profileCandidate } from "../../../store/reducer/ProfileSlice";
import { Formik } from "formik";
import { profileValidationSchema } from "./profileUtils";
import { editCandidate } from "../../../store/reducer/UpdateUserSlice";
import { loaderHide, loaderShown } from "../../../store/reducer/LoaderSlice";
import { toastShown } from "../../../store/reducer/ToastSlice";
import CustomDrawer from "../../../elements/CustomDrawer";
import { ProfileStyle } from "../../../theme/styles/ProfileStyle";
import { dynamicSize, normalizeFont } from "../../../utils/responsive";

const Profile = () => {
  const navigation = useNavigation();
  const loadingRef = useRef(false);
  const profileUpdateLoading = useRef(false);
  const [fileResponse, setFileResponse] = useState([]);
  const [value, setValue] = useState('');
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileCandidate());
  }, [dispatch]);
  const profileData = useSelector((state) => state?.profile);
  const profileUpdate = useSelector((state) => state?.profileUpdate);
  //Get profile Details
  useEffect(() => {
    if (profileData.isLoading) {
      dispatch(loaderShown());
    } else if (loadingRef.current && !profileData.isLoading) {
      const errorMessage = profileData?.ErrorMsg
      if (profileData?.isError) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: true, toastMessage: errorMessage }));
      } else if (profileData?.isSuccess) {
        dispatch(loaderHide());
        setData(profileData?.data?.data?.data);
      }
    }
    loadingRef.current = profileData.isLoading;
  }, [profileData.isLoading, profileData?.isSuccess]);

//Update Profile
  useEffect(() => {
    if (profileUpdate.isLoading) {
      dispatch(loaderShown());
    } else if (profileUpdateLoading.current && !profileUpdate.isLoading) {
      if (profileUpdate?.isError) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: true, toastMessage: profileUpdate?.ErrorMsg }));
      } else if (profileUpdate?.isSuccess) {
        dispatch(loaderHide());
    dispatch(toastShown({ isError: false, toastMessage: profileUpdate?.ErrorMsg }));
        navigation.navigate(RouteConstants.HOME);
      }
    }
    profileUpdateLoading.current = profileUpdate.isLoading;
  }, [profileUpdate.isLoading, profileUpdate?.isSuccess]);

  const profileInitialValue = {
    fullname: data ? data?.fullname : "",
    email: data ? data?.email : value?.email,
    gender: data ? data?.gender : value?.gender,
    mobile_number: data ? data?.mobile_number : value?.mobile_number,
    resume: data ? data?.resume : value?.resume,
    skills: data ? data?.skills : value?.skills,
    work_status: data ? data?.work_status : value?.work_status,
    address: data ? data?.address : value?.address,
  };

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  const Gender = [
    { label: StringConstants.MALE, value: NumberConstants.VALUE_1 },
    { label: StringConstants.FEMALE, value: NumberConstants.VALUE_2 },
  ];

  const updateUser = (values) => {
    const payload = {
      fullname: values?.fullname,
      email: values?.email,
      mobile_number: values?.mobile_number,
      skills: values?.skills,
      address: values?.address,
      gender: value,
    };
    dispatch(editCandidate(payload));
  };
  
  if (!profileData.isLoading && data !== "") {
    return (
      <View style={ProfileStyle.conatiner}>
        <Formik
          initialValues={profileInitialValue}
          onSubmit={(values) => updateUser(values)}
          validationSchema={profileValidationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            handleBlur,
            touched,
          }) => {
            return (
              <View style={ProfileStyle.profileMainView}>
                <CustomDrawer onPress={handleOpenDrawer} title={"Profile"} />
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View>
                    <ImagePickerComponent />
                  </View>
                  <InputBox
                    title={StringConstants.FULL_NAME}
                    placeholder={StringConstants.FULL_NAME_PLACEHOLDER}
                    onBlur={handleBlur(InputBoxConstants.FULL_NAME)}
                    errors={errors.fullname}
                    onChangeText={handleChange(InputBoxConstants.FULL_NAME)}
                    touched={touched?.fullname}
                    value={values?.fullname}
                  />
                  <InputBox
                    title={StringConstants.EMAIL_ID}
                    placeholder={StringConstants.EMAIL_PLACEHOLDER}
                    onBlur={handleBlur(InputBoxConstants.EMAIL)}
                    errors={errors.email}
                    value={values?.email}
                    onChangeText={handleChange(InputBoxConstants.EMAIL)}
                    touched={touched?.email}
                  />
                  <InputBox
                    title={StringConstants.MOBILE_NUMBER}
                    placeholder={StringConstants.MOBILE_NUMBER}
                    onBlur={handleBlur(InputBoxConstants.MOBILE_NUMBER)}
                    errors={errors.mobile_number}
                    value={values?.mobile_number}
                    onChangeText={handleChange(InputBoxConstants.MOBILE_NUMBER)}
                    touched={touched?.mobile_number}
                  />
                  <InputBox
                    title={StringConstants.SKILLS}
                    placeholder={StringConstants.ADD_ADDRESS}
                    onBlur={handleBlur(InputBoxConstants.SKILLS)}
                    errors={errors.skills}
                    value={values?.skills}
                    onChangeText={handleChange(InputBoxConstants.SKILLS)}
                    touched={touched?.skills}
                  />
                  <InputBox
                    title={StringConstants.ADDRESS}
                    placeholder={StringConstants.ADDRESS}
                    onBlur={handleBlur(InputBoxConstants.ADDRESS)}
                    errors={errors.address}
                    value={values?.address}
                    onChangeText={handleChange(InputBoxConstants.ADDRESS)}
                    touched={touched?.address}
                  />
                  <View style={ProfileStyle.radioButtonView}>
                    <Text style={ProfileStyle.radioText}>
                      {StringConstants.GENDER}
                    </Text>
                    <RadioForm
                      radio_props={Gender}
                      buttonColor={ColorConstants.BLACK}
                      labelColor={ColorConstants.BLACK}
                      initial={values?.gender ? values?.gender - 1 : -1}
                      onPress={(value) => setValue(value)}
                      labelHorizontal={false}
                      formHorizontal
                    />
                  </View>
                  <Text
                    style={[InputBoxStyle.inputTitle, SignupStyle.resumeText]}
                  >
                    {StringConstants.RESUME}
                  </Text>
                  <View style={SignupStyle.resumeMainContainer}>
                    <View style={SignupStyle.resumeView}>
                      <CustomButton
                        width={dynamicSize(NumberConstants.VALUE_130)}
                        onSubmit={handleDocumentSelection}
                        fontSize={normalizeFont(NumberConstants.VALUE_15)}
                        backgroundColor={ColorConstants.ORANGE}
                        title={StringConstants.UPLOAD_RESUME}
                        borderRadius={dynamicSize(NumberConstants.VALUE_20)}
                      />
                      <Text style={SignupStyle.documentUploadText}>
                        {StringConstants.DOCUMENT_TYPE_TEXT}
                      </Text>
                    </View>
                    {fileResponse.map((file, { index }) => (
                      <Text
                        key={index.toString()}
                        numberOfLines={NumberConstants.VALUE_1}
                        ellipsizeMode={StringConstants.MIDDLE}
                      >
                        {file?.name}
                      </Text>
                    ))}
                  </View>
                  <View style={ProfileStyle.customButtonView}>
                    <CustomButton
                      backgroundColor={ColorConstants.LIGHT_BLUE}
                      fontSize={normalizeFont(NumberConstants.VALUE_25)}
                      title={StringConstants.SAVE}
                      onSubmit={() => handleSubmit(updateUser)}
                    />
                  </View>
                </ScrollView>
              </View>
            );
          }}
        </Formik>
      </View>
    );
  } else {
    return null;
  }
};

export default Profile;
