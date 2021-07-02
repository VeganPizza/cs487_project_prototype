import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacityBase,
} from "react-native";
import THEME from "../../constants/THEME";
import { Avatar } from "react-native-paper";

import HomeAssignmentCard from "../../components/HomeAssignmentCard";

// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const cardsArrayInfo = [
  { progress: 0, assignmentName: "Quiz 1", className: "CS 350" },
  { progress: 0.55, assignmentName: "Quiz 2", className: "CS 450" },
  { progress: 0.86, assignmentName: "Quiz 3", className: "CS 340" },
];

const AssignmentsScreen = (props) => {
  const role = props.role;
  const renderCards = () => {
    let output = [];
    for (const element of cardsArrayInfo)
      output.push(
        <HomeAssignmentCard
          role={role}
          progress={element.progress}
          assignmentName={element.assignmentName}
          className={element.className}
        />
      );

    return (
      <ScrollView
        style={{ height: height * 0.3, width: width }}
        horizontal={true}
      >
        {output}
      </ScrollView>
    );
  };
  return (
    <View style={styles.container}>
      <View
        styles={{ flexDirection: "row", marginTop: 20 }}
        width={width}
        height={height * 0.45}
      >
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Avatar.Icon
            icon="arrow-left"
            backgroundColor="transparent"
            style={{ marginHorizontal: 10 }}
          ></Avatar.Icon>
        </TouchableOpacity>

        <View
          style={{ flexDirection: "row", alignItems: "flex-start", margin: 20 }}
        >
          <Text style={THEME.TEXT.T8}> Assignments {props.assignmentName}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 10,
          }}
          width={width}
          alignSelf="center"
        >
          {renderCards()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  homeButton: {
    backgroundColor: THEME.COLORS.BLUE,
    marginHorizontal: 5,
    marginVertical: "2.5%",
    width: width * 0.3,
    padding: 5,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default AssignmentsScreen;
