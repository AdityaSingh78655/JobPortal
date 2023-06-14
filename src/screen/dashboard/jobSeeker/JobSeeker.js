import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppImages } from "../../../theme/AppImages";
import { JobSeekerStyle } from "../../../theme/styles/JobSeekerStyle";
import Card from "../../../elements/Card";
import CustomDrawer from "../../../elements/CustomDrawer";
import { StringConstants } from "../../../constants/StringConstants";
import { useDispatch, useSelector } from "react-redux";
import { loaderHide, loaderShown } from "../../../store/reducer/LoaderSlice";
import { candidateJobs } from "../../../store/reducer/CandidateJobsSlice";
const JobSeeker = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const getloadingRef = useRef(false);
  const [Data, setData] = useState("");

  useFocusEffect(
    useCallback(() => {
      dispatch(loaderShown());
      dispatch(candidateJobs());
    }, [dispatch])
  );
  const candidateJob = useSelector((state) => state?.candidateJob);

  useEffect(() => {
    if (candidateJob.isLoading) {
      dispatch(loaderShown());
    } else if (getloadingRef.current && !candidateJob.isLoading) {
      const errorMessage = candidateJob?.ErrorMsg;
      if (candidateJob?.isError) {
        dispatch(loaderHide());
        dispatch(toastShown({ isError: true, toastMessage: errorMessage }));
      } else if (candidateJob?.isSuccess) {
        dispatch(loaderHide());
        setData(candidateJob?.data?.data?.data);
      }
    }
    getloadingRef.current = candidateJob.isLoading;
  }, [candidateJob.isLoading, candidateJob?.isSuccess]);

  const handleSaved = (item) => {
    const index = selectedItems.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (index !== -1) {
      // if item is already saved, remove it
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(index, 1);
      setSelectedItems(newSelectedItems);
    } else {
      // else save the new item
      setSelectedItems([...selectedItems, item]);
    }
  };

  const renderItems = ({ item }) => {
    return (
      <View style={JobSeekerStyle.renderItemMainView}>
        <Card items={item} />

        <View>
          <TouchableOpacity onPress={() => handleSaved(item)}>
            <Image
              style={JobSeekerStyle.imageStyle}
              source={
                selectedItems.some(
                  (selectedItem) => selectedItem.id === item.id
                )
                  ? AppImages.FILLED_HEART
                  : AppImages.EMPTY_HEART
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={JobSeekerStyle.mainView}>
      <CustomDrawer title={StringConstants.JOBS} onPress={handleOpenDrawer} />
      <View>
        <View style={JobSeekerStyle.textInputView}>
          <TextInput
            placeholder={StringConstants.SEARCH_JOB}
            style={JobSeekerStyle.textInputStyle}
          ></TextInput>
          <Image source={AppImages.SEARCH} style={JobSeekerStyle.searchImage} />
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItems}
        style={JobSeekerStyle.flatListStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default JobSeeker;
