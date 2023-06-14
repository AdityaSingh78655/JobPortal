import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { InputBoxStyle } from "../theme/styles/CustomElementStyle";
import {
  AlignmentConstants,
  StringConstants,
} from "../constants/StringConstants";

const InputBox = ({
  title,
  placeholder,
  secureTextEntry,
  onPressHide,
  password,
  signUp,
  touched,
  hintTitle,
  editable,
  mobile,
  errors,
  keyboardType,
  onChangeText,
  onBlur,
  maxLength,
  autoCapitalize,
  value,
}) => {
  return (
    <View style={InputBoxStyle.mainContainer}>
      <Text style={InputBoxStyle.inputTitle}>{title}</Text>

      <View
        style={[
          InputBoxStyle.textInputView,
          password
            ? {
                justifyContent: AlignmentConstants.FLEX_END,
                flexDirection: AlignmentConstants.ROW,
              }
            : {
                flexDirection: AlignmentConstants.ROW_REVERSE,
                justifyContent: AlignmentConstants.FLEX_END,
              },
        ]}
      >
        <TextInput
          style={InputBoxStyle.textInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onBlur={onBlur}
          onChangeText={onChangeText}
          maxLength={maxLength}
          editable={editable}
          touched={touched}
          autoCapitalize={autoCapitalize}
          value={value}
        />
        {password && (
          <TouchableOpacity
            onPress={onPressHide}
            style={InputBoxStyle.passwordShowTouch}
          >
            <Text style={InputBoxStyle.showPasswordText}>
              {secureTextEntry === true
                ? StringConstants.SHOW
                : StringConstants.HIDE}
            </Text>
          </TouchableOpacity>
        )}
        {mobile && (
          <View style={InputBoxStyle.passwordShowTouch}>
            <Text style={InputBoxStyle.mobileNumberText}>
              {StringConstants.COUNTRY_CODE}
            </Text>
          </View>
        )}
      </View>
      {signUp && (
        <View onPress={onPressHide} style={InputBoxStyle.passwordShowTouch}>
          <Text style={InputBoxStyle.hintText}>{hintTitle}</Text>
        </View>
      )}
      {errors && touched && (
        <Text style={InputBoxStyle.errorMessage}>{errors}</Text>
      )}
    </View>
  );
};

export default InputBox;
