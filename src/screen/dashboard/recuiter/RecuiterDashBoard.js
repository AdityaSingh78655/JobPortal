import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { JobSeekerStyle } from "../../../theme/styles/JobSeekerStyle";
import { AppImages } from "../../../theme/AppImages";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RecuriterDashboardStyle } from "../../../theme/styles/RecuriterDashboardStyle";
import { StringConstants } from "../../../constants/StringConstants";
import { useDispatch, useSelector } from "react-redux";
import { loaderHide, loaderShown } from "../../../store/reducer/LoaderSlice";
import { toastShown } from "../../../store/reducer/ToastSlice";
import { recruiterJobs } from "../../../store/reducer/RecruiterJobGetSlice";

const RecuiterDashBoard = ({ modalButton }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getloadingRef = useRef(false);
  const recruiterJobDetail = useSelector((state) => state?.recruiterPosts);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(data);

  useFocusEffect(
    useCallback(() => {
      dispatch(loaderShown());
      dispatch(recruiterJobs());
    }, [dispatch])
  );
  useEffect(() => {
    if (recruiterJobDetail.isLoading) {
      dispatch(loaderShown());
    } else if (getloadingRef.current && !recruiterJobDetail.isLoading) {
      const errorMessage = recruiterJobDetail?.ErrorMsg;
      if (recruiterJobDetail?.isError) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: true, toastMessage: errorMessage }));
      } else if (recruiterJobDetail?.isSuccess) {
        setFilteredJobs(recruiterJobDetail?.data?.data?.data);
        dispatch(loaderHide());
        setData(recruiterJobDetail?.data?.data?.data);
      }
    }
    getloadingRef.current = recruiterJobDetail.isLoading;
  }, [recruiterJobDetail.isLoading, recruiterJobDetail?.isSuccess]);

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((data) =>
      data.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const renderItems = ({ item }) => {
    console.log(item, "tiojgdfjbnv");
    return (
      <View style={JobSeekerStyle.renderItemMainView}>
        <View>
          <Text style={JobSeekerStyle.headingText}>{item.title}</Text>
          <Text>
            {StringConstants.COMPANY} : {item.company}
          </Text>
          <Text>
            {StringConstants.LOCATION} : {item.location}
          </Text>
          <Text>
            {StringConstants.SALARY} : {item.salary}
          </Text>
          <Text>
            {StringConstants.EXPERIENCE} : {item.experience_required}
          </Text>
          <TouchableOpacity
            style={JobSeekerStyle.touchableButton}
            onPress={() =>
              navigation.navigate("JobPost", {
                jobItemData: item,
                isEdit: true,
              })
            }
          >
            <Text style={RecuriterDashboardStyle.editPostText}>
              {StringConstants.EDIT_POST}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={JobSeekerStyle.mainView}>
      <View style={RecuriterDashboardStyle.container}>
        <TouchableOpacity onPress={handleOpenDrawer}>
          <Image source={AppImages.MENU} />
        </TouchableOpacity>
        <Text style={JobSeekerStyle.headingMainText}>
          {StringConstants.JOBS}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("JobPost")}>
          <Image
            style={RecuriterDashboardStyle.addJobImage}
            source={AppImages.JOB_POST}
          />
        </TouchableOpacity>
      </View>
      <View style={JobSeekerStyle.textInputView}>
        <TextInput
          placeholder={StringConstants.SEARCH_JOB}
          style={JobSeekerStyle.textInputStyle}
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <Image source={AppImages.SEARCH} style={JobSeekerStyle.searchImage} />
      </View>
      <FlatList
        data={filteredJobs}
        renderItem={renderItems}
        style={JobSeekerStyle.flatListStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecuiterDashBoard;
