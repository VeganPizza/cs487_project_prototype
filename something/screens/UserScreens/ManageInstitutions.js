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
import { TextInput, Avatar } from "react-native-paper";
import InstitutionCard from "../../components/InstitutionCard";

// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const cardsArrayInfo = [
  {
    institution: "Illinois Institute Of Technology",
    location: "Chicago",
    students: 7792,
  },
  {
    institution: "Purdue University",
    location: "West Lafayette",
    students: 1000,
  },
  {
    institution: "University of Chicago",
    location: "Chicago",
    students: 16445,
  },
];

const ManageInstitutions = (props) => {
  const role = props.role;
  console.log(role + " rolee");
  const renderCards = () => {
    let output = [];
    for (const element of cardsArrayInfo)
      output.push(
        <InstitutionCard
          institution={element.institution}
          role={role}
          location={element.location}
          navigation={props.navigation}
          students={element.students}
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
  console.log(props.navigation + "hello");
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
         
          <Text style={THEME.TEXT.T8}>Current Classes</Text>
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

export default ManageInstitutions;
