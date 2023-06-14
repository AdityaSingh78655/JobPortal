import { View, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../../elements/CustomButton";
import { ColorConstants } from "../../../theme/ColorConstants";
import { NumberConstants } from "../../../constants/NumberConstants";
import { StringConstants } from "../../../constants/StringConstants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CustomDrawer from "../../../elements/CustomDrawer";
import InputBox from "../../../elements/InputBox";
import { normalizeFont } from "../../../utils/responsive";
import { ProfileStyle } from "../../../theme/styles/ProfileStyle";
import { loaderHide, loaderShown } from "../../../store/reducer/LoaderSlice";
import { toastShown } from "../../../store/reducer/ToastSlice";
import { jobPostRecruiter } from "../../../store/reducer/JobPostSlice";

const RecruiterJobPost = ({route}) => {
  const [inputTitile, setTitle] = useState("");
  const [inputCompany, setCompany] = useState("");
  const [inputLocation, setLocation] = useState("");
  const [inputSalary, setSalary] = useState("");
  const [inputExperience, setExperience] = useState("");
  const [inputSkills, setSkills] = useState("");
  const isEditPost = route?.params?.isEdit
  const editItem = route?.params?.jobItemData
  console.log(editItem,'fikjmg');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loadingRef = useRef(false);

  const jobPost = useSelector((state) => state?.jobPost);
  useEffect(() => {
    if (jobPost.isLoading) {
      dispatch(loaderShown());
    } else if (loadingRef.current && !jobPost.isLoading) {
      if (jobPost?.isError) {
        dispatch(loaderHide());
        dispatch(
          toastShown({ isError: true, toastMessage: jobPost?.ErrorMsg })
        );
      } else if (jobPost?.isSuccess) {
        dispatch(loaderHide());
        dispatch(
          toastShown({ isError: false, toastMessage: jobPost?.RessMsg })
        );
        navigation.goBack()
      }
    }
    loadingRef.current = jobPost.isLoading;
  }, [jobPost.isLoading, jobPost?.isSuccess]);

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  const handleSave = () => {
    const payload = {
      title: inputTitile,
      company: inputCompany,
      location: inputLocation,
      salary: inputSalary,
      experience_required: inputExperience,
      skills_required: inputSkills,
    };
    dispatch(jobPostRecruiter(payload));
  };
  return (
    <View style={ProfileStyle.profileMainView}>
      <CustomDrawer onPress={handleOpenDrawer} title={"Post Job"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputBox
          title={StringConstants.JOB_TITLE}
          placeholder={StringConstants.JOB_PLACEHOLDER}
          value={isEditPost ? editItem?.title : inputTitile}
          onChangeText={(text) => setTitle(text)}
        />
        <InputBox
          title={StringConstants.COMPANY_NAME}
          placeholder={StringConstants.COMPANY_PLACEHOLDER}
          value={inputCompany}
          onChangeText={(text) => setCompany(text)}
        />
        <InputBox
          title={StringConstants.LOCATION}
          placeholder={StringConstants.LOCATION}
          value={ inputLocation}
          onChangeText={(text) => setLocation(text)}
        />
        <InputBox
          title={StringConstants.SALARY}
          placeholder={StringConstants.SALARY}
          value={inputSalary}
          onChangeText={(text) => setSalary(text)}
        />
        <InputBox
          title={StringConstants.EXPERIENCE}
          placeholder={StringConstants.EXPERIENCE}
          value={inputExperience}
          onChangeText={(text) => setExperience(text)}
        />
        <InputBox
          title={StringConstants.SKILLS}
          placeholder={StringConstants.SKILLS}
          value={inputSkills}
          onChangeText={(text) => setSkills(text)}
        />
          <CustomButton
            onSubmit={handleSave}
            backgroundColor={ColorConstants.LIGHT_BLUE}
            fontSize={normalizeFont(NumberConstants.VALUE_20)}
            title={StringConstants.POST_JOBS}
          />
      </ScrollView>
    </View>
  );
};

export default RecruiterJobPost;
