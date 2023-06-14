import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { JobSeekerStyle } from "../theme/styles/JobSeekerStyle";
import { StringConstants } from "../constants/StringConstants";

const Card = ({ items }) => {
  const { title, company, location, salary, experience_required, skills_required } = items;
  return (
    <View>
      <Text style={JobSeekerStyle.headingText}>{title}</Text>
      <Text>
        {`${StringConstants.COMPANY}: ${company}\n${StringConstants.LOCATION}: ${location}\n${StringConstants.SALARY}: ${salary}\n${StringConstants.EXPERIENCE}: ${experience_required}\n${StringConstants.SKILLS}: ${skills_required}`}
      </Text>
      <TouchableOpacity style={JobSeekerStyle.touchableButton}>
        <Text style={JobSeekerStyle.cardText}>{StringConstants.APPLY_NOW}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
