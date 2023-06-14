import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ColorConstants } from "../../../theme/ColorConstants";
import InputBox from "../../../elements/InputBox";
import CustomButton from "../../../elements/CustomButton";
import { AppImages } from "../../../theme/AppImages";
import { useNavigation } from "@react-navigation/native";
import { ForgotPasswordStyle } from "../../../theme/styles/ForgotPasswordStyle";
import { NumberConstants } from "../../../constants/NumberConstants";
import { Formik } from "formik";
import {
  changePasswordInitialValue,
  changePasswordSchema,
} from "./ChangePasswordUtils";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../store/reducer/ChangePasswordSlice";
import { toastShown } from "../../../store/reducer/ToastSlice";
import {
  InputBoxConstants,
  RouteConstants,
  StringConstants,
  ToastConstants,
} from "../../../constants/StringConstants";
import { normalizeFont } from "../../../utils/responsive";
import { loaderHide, loaderShown } from "../../../store/reducer/LoaderSlice";

const ChangePassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loadingRef = useRef(false);
  const passwordChange = useSelector((state) => state?.changePassword);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureNewTextEntry, setSecureNewTextEntry] = useState(true);
  useEffect(() => {
    if (passwordChange.isLoading) {
      dispatch(loaderShown());
    } else if (loadingRef.current && !passwordChange.isLoading) {
      const errorMessage = passwordChange?.ErrorMsg;
      if (passwordChange?.isError) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: true, toastMessage: errorMessage }));
      } else if (passwordChange?.isSuccess) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: false, toastMessage: errorMessage }));
        navigation.navigate(RouteConstants.HOME);
      }
    }
    loadingRef.current = passwordChange.isLoading;
  }, [passwordChange.isLoading, passwordChange?.isSuccess]);

  const postData = async (values) => {
    const payload = {
      old_password: values?.oldPassword,
      new_password: values?.newPassword,
    };
    try {
      dispatch(changePassword(payload));
    } catch (error) {}
  };

  const onPressHide = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const onPressNewPasswordHide = ()=> {
    setSecureNewTextEntry(!secureNewTextEntry);
  }

  return (
    <View style={ForgotPasswordStyle.mainContainer}>
      <Formik
        initialValues={changePasswordInitialValue}
        onSubmit={(values) => {
          postData(values);
        }}
        validationSchema={changePasswordSchema}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
          dirty,
          handleBlur,
          touched,
        }) => {
          return (
            <>
              <View style={ForgotPasswordStyle.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    style={ForgotPasswordStyle.headerImage}
                    source={AppImages.BACK}
                  />
                </TouchableOpacity>
              </View>
              <View style={ForgotPasswordStyle.container}>
                <Text style={ForgotPasswordStyle.passwordText}>
                  {StringConstants.CHANGE_PASSWORD}
                </Text>
                <Text style={ForgotPasswordStyle.passwordDescriptionText}>
                  {StringConstants.CHANGE_PASSWORD_DES}
                </Text>
                <InputBox
                  title={StringConstants.OLD_PASSWORD}
                  placeholder={StringConstants.CHANGE_PASSWORD_PLACEHOLDER}
                  onBlur={handleBlur(InputBoxConstants.OLD_PASSWORD)}
                  errors={errors.oldPassword}
                  value={values.oldPassword}
                  onChangeText={handleChange(InputBoxConstants.OLD_PASSWORD)}
                  touched={touched?.oldPassword}
                  secureTextEntry={secureTextEntry}
                  onPressHide={onPressHide}
                  password={true}
                  autoCapitalize={InputBoxConstants.NONE}
                />
                <InputBox
                  title={StringConstants.NEW_PASSWORD}
                  placeholder={StringConstants.CHANGE_PASSWORD_NEW_PLACEHOLDER}
                  onBlur={handleBlur(InputBoxConstants.NEW_PASSWORD)}
                  errors={errors.newPassword}
                  value={values.newPassword}
                  onChangeText={handleChange(InputBoxConstants.NEW_PASSWORD)}
                  touched={touched?.newPassword}
                  secureTextEntry={secureNewTextEntry}
                  onPressHide={onPressNewPasswordHide}
                  password={true}
                  autoCapitalize={InputBoxConstants.NONE}
                />
                <CustomButton
                  fontSize={normalizeFont(NumberConstants.VALUE_25)}
                  title={StringConstants.CHANGE_PASSWORD}
                  onSubmit={() => handleSubmit(postData)}
                  backgroundColor={
                    isValid && dirty
                      ? ColorConstants.LIGHT_BLUE
                      : ColorConstants.DARK_GREY
                  }
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default ChangePassword;
