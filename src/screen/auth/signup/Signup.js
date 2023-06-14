import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import InputBox from "../../../elements/InputBox";
import CustomButton from "../../../elements/CustomButton";
import { ColorConstants } from "../../../theme/ColorConstants";
import { InputBoxStyle } from "../../../theme/styles/CustomElementStyle";
import { SignUpInitialValue, SignUpValidationSchema } from "./SignupUtils";
import { Formik } from "formik";
import { SignupStyle } from "../../../theme/styles/SignupStyle";
import {
  InputBoxConstants,
  RouteConstants,
  StringConstants,
} from "../../../constants/StringConstants";
import { NumberConstants } from "../../../constants/NumberConstants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signupCandidate } from "../../../store/reducer/SignupSlice";
import { toastShown } from "../../../store/reducer/ToastSlice";
import { loaderHide, loaderShown } from "../../../store/reducer/LoaderSlice";
import { data, userData } from "../../../utils/AppData";
import { width } from "../../../utils/responsive";

const Signup = ({ role, id }) => {
  const [selectedWorkStatus, setSelectedWorkStatus] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [userType, setUserType] = useState(1);
  const navigation = useNavigation();
  const loadingRef = useRef(false);
  role = userType;

  const dispatch = useDispatch();

  const candidate = useSelector((state) => state?.candidate);
  useEffect(() => {
    if (candidate.isLoading) {
      dispatch(loaderShown());
    } else if (loadingRef.current && !candidate.isLoading) {
      const errorMessage = candidate?.ErrorMsg;
      if (candidate?.isError) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: true, toastMessage: errorMessage }));
      } else if (candidate?.isSuccess) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: false, toastMessage: errorMessage }));
        navigation.navigate(RouteConstants.LOGIN);
      }
    }
    loadingRef.current = candidate.isLoading;
  }, [candidate.isLoading, candidate?.isSuccess]);

  const recruiterPostData = (values) => {
    const payload = {
      fullname: values?.fullName,
      email: values?.email,
      mobile_number: values?.mobileNumber,
      password: values?.password,
      role: role,
    };
console.log(payload,'k');
    dispatch(signupCandidate(payload));
  };

  const signupProfile = (item) => {
    setUserType(item);
  };

  const postData = (values) => {
    const payload = {
      fullname: values?.fullName,
      email: values?.email,
      mobile_number: values?.mobileNumber,
      work_status: selectedWorkStatus,
      password: values?.password,
      role: role,
    };
    dispatch(signupCandidate(payload));
  };
  const onPressHide = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <View style={SignupStyle.mainContainer}>
      <Formik
        initialValues={SignUpInitialValue}
        onSubmit={
          role == 1
            ? (values) => postData(values)
            : (values) => recruiterPostData(values)
        }
        validationSchema={SignUpValidationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={SignupStyle.container}>
              {userData.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => signupProfile(item.id)}
                    style={[
                      userType === item.id
                        ? SignupStyle.selectedHeader
                        : SignupStyle.unSelectedHeader,
                      { width: (width - 40) / 2 - 10 },
                    ]}
                  >
                    <Text style={SignupStyle.userTypeHeader}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={SignupStyle.headerText}>
              {userType === 1
                ? StringConstants.FIND_A_JOB
                : StringConstants.FIND_EMP}
            </Text>
            <View style={SignupStyle.inputBoxView}>
              <InputBox
                title={StringConstants.FULL_NAME}
                onBlur={handleBlur(InputBoxConstants.FULLNAME)}
                placeholder={StringConstants.FULL_NAME_PLACEHOLDER}
                errors={errors.fullName}
                value={values.fullName}
                onChangeText={handleChange(InputBoxConstants.FULLNAME)}
                touched={touched?.fullName}
              />
            </View>
            <InputBox
              title={StringConstants.EMAIL_ID}
              placeholder={StringConstants.EMAIL_PLACEHOLDER}
              signUp={true}
              hintTitle={StringConstants.EMAIL_TITLE_HINT}
              onBlur={handleBlur(InputBoxConstants.EMAIL)}
              errors={errors.email}
              value={values.email}
              onChangeText={handleChange(InputBoxConstants.EMAIL)}
              touched={touched?.email}
              autoCapitalize={InputBoxConstants.NONE}
            />
            <InputBox
              title={StringConstants.PASSWORD}
              placeholder={StringConstants.PASSWORD_PLACEHOLDER}
              signUp={true}
              hintTitle={StringConstants.PASSWORD_HINT}
              onBlur={handleBlur(InputBoxConstants.PASSWORD)}
              errors={errors.password}
              value={values.password}
              onChangeText={handleChange(InputBoxConstants.PASSWORD)}
              touched={touched?.password}
              secureTextEntry={secureTextEntry}
                onPressHide={onPressHide}
                password={true}
            />
            <InputBox
              title={StringConstants.MOBILE_NUMBER}
              placeholder={StringConstants.MOBILE_NUMBER}
              signUp={true}
              hintTitle={StringConstants.MOBILE_HINT}
              mobile={true}
              keyboardType={"number-pad"}
              onBlur={handleBlur(InputBoxConstants.MOBILENUMBER)}
              errors={errors.mobileNumber}
              value={values.mobileNumber}
              onChangeText={handleChange(InputBoxConstants.MOBILENUMBER)}
              maxLength={NumberConstants.VALUE_10}
              touched={touched.mobileNumber}
            />
            {userType === NumberConstants.VALUE_1 && (
              <>
                <Text
                  style={[InputBoxStyle.inputTitle, SignupStyle.resumeText]}
                >
                  {StringConstants.WORK_STATUS}
                </Text>
                <View style={SignupStyle.workStatusContainer}>
                  {data.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        SignupStyle.workStatusTouch,
                        { width: (width - 40) / 2 - 10 },
                        selectedWorkStatus == item.id
                          ? { borderColor: ColorConstants.VIOLET }
                          : { borderColor: ColorConstants.LIGHT_GREY },
                      ]}
                      onPress={() => setSelectedWorkStatus(item.id)}
                    >
                      <Image
                        source={item.icon}
                        style={SignupStyle.workStatusIcon}
                      />
                      <View style={SignupStyle.workStatusView}>
                        <Text style={SignupStyle.workStatusHeading}>
                          {item.title}
                        </Text>
                        <Text style={SignupStyle.workStatusText}>
                          {item.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
            <View style={SignupStyle.conditionsView}>
              <Text style={SignupStyle.conditionText}>
                {StringConstants.TC_TEXT}
                <Text
                  onPress={() =>
                    navigation.navigate(RouteConstants.TERM_CONDITION)
                  }
                  style={SignupStyle.conditionTouchable}
                >
                  {StringConstants.T_C}
                </Text>
                {StringConstants.AND}
                <Text
                  onPress={() =>
                    navigation.navigate(RouteConstants.PRIVACY_AND_POLICY)
                  }
                  style={SignupStyle.conditionTouchable}
                >
                  {StringConstants.PRIVACY_POLICY}
                </Text>
                {StringConstants.OF_NAUKARI}
              </Text>
            </View>
            <CustomButton
              onSubmit={() =>
                role === NumberConstants.VALUE_1
                  ? handleSubmit(postData)
                  : handleSubmit(recruiterPostData)
              }
              borderRadius={NumberConstants.VALUE_20}
              fontSize={NumberConstants.VALUE_22}
              title={StringConstants.REGISTER_NOW}
              width={StringConstants.VALUE_PERCENT_55}
              backgroundColor={
                isValid && dirty
                  ? ColorConstants.LIGHT_BLUE
                  : ColorConstants.DARK_GREY
              }
            />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default Signup;
