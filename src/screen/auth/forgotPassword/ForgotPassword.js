import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ColorConstants } from "../../../theme/ColorConstants";
import InputBox from "../../../elements/InputBox";
import CustomButton from "../../../elements/CustomButton";
import { AppImages } from "../../../theme/AppImages";
import { useNavigation } from "@react-navigation/native";
import { ForgotPasswordStyle } from "../../../theme/styles/ForgotPasswordStyle";
import { NumberConstants } from "../../../constants/NumberConstants";
import {
  InputBoxConstants,
  StringConstants,
} from "../../../constants/StringConstants";
import { normalizeFont } from "../../../utils/responsive";
import { Formik } from "formik";
import {
  forgetPasswordInitialValue,
  forgetPasswordValidationSchema,
} from "./ForgetPasswordUtils";
import { forgetPassword } from "../../../store/reducer/ForgetPasswordSlice";
import { useDispatch, useSelector } from "react-redux";
import { loaderHide, loaderShown } from "../../../store/reducer/LoaderSlice";
import { toastShown } from "../../../store/reducer/ToastSlice";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const loadingRef = useRef(false);
  const forgetChangePassword = useSelector((state) => state?.forgetPassword);

  useEffect(() => {
    if (forgetChangePassword.isLoading) {
      dispatch(loaderShown());
    } else if (loadingRef.current && !forgetChangePassword.isLoading) {
      const errorMessage = forgetChangePassword?.ErrorMsg;
      console.log(errorMessage, "errorMessageerrorMessage");
      if (forgetChangePassword?.isError) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: true, toastMessage: errorMessage }));
      } else if (forgetChangePassword?.isSuccess) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: false, toastMessage: errorMessage }));
      }
    }
    loadingRef.current = forgetChangePassword.isLoading;
  }, [forgetChangePassword.isLoading, forgetChangePassword?.isSuccess]);
  const postData = async (values) => {
    console.log("values", values);
    const payload = {
      email: values?.email,
      password: values?.password,
    };
    try {
      await Promise.all([dispatch(forgetPassword(payload))]);
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }

    console.log(payload, "jjdhd");
  };

  const onPressHide = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={ForgotPasswordStyle.mainContainer}>
      <View style={ForgotPasswordStyle.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(StringConstants.LOGIN)}
        >
          <Image
            style={ForgotPasswordStyle.headerImage}
            source={AppImages.BACK}
          />
        </TouchableOpacity>
      </View>
      <>
        <Formik
          initialValues={forgetPasswordInitialValue}
          onSubmit={(values) => {
            postData(values);
          }}
          validationSchema={forgetPasswordValidationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            isValid,
            dirty,
            touched,
          }) => (
            <View style={ForgotPasswordStyle.container}>
              <Text style={ForgotPasswordStyle.passwordText}>
                {StringConstants.RESET_PASSWORD}
              </Text>
              <Text style={ForgotPasswordStyle.passwordDescriptionText}>
                {StringConstants.PASSWORD_DESCRIPTION}
              </Text>
              <InputBox
                title={StringConstants.EMAIL_USERNAME}
                placeholder={StringConstants.EXAMPLE_MAIL}
                errors={errors.email}
                value={values.email}
                onChangeText={handleChange(InputBoxConstants.EMAIL)}
                touched={touched?.email}
              />
              <InputBox
                title={StringConstants.PASSWORD}
                placeholder={StringConstants.ENTER_PASSWORD}
                errors={errors.password}
                secureTextEntry={secureTextEntry}
                onPressHide={onPressHide}
                password={true}
                value={values.password}
                onChangeText={handleChange(InputBoxConstants.PASSWORD)}
                touched={touched?.password}
              />
              <CustomButton
                fontSize={normalizeFont(NumberConstants.VALUE_25)}
                backgroundColor={
                  isValid && dirty
                    ? ColorConstants.LIGHT_BLUE
                    : ColorConstants.DARK_GREY
                }
                disabled={!(isValid && dirty)}
                onSubmit={() => handleSubmit(postData)}
                title={StringConstants.SEND_PASSWORD}
              />
            </View>
          )}
        </Formik>
      </>
    </View>
  );
};

export default ForgotPassword;
