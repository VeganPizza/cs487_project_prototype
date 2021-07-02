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
import Header from "../../navigation/Header";
import { TextInput, Avatar } from "react-native-paper";

import DropDownPicker from "react-native-dropdown-picker";

// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");

const QuizScreen = (props) => {
  const [notifications, setNotifications] = useState(true);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(3);
  const [items, setItems] = useState([
    { label: "CS 340", value: "1" },
    { label: "CS 350", value: "2" },
    { label: "CS 450", value: "3" },
    { label: "CS 331", value: "4" },
  ]);
  const renderQuestionsInput = () =>{
     let output = []
     for (let i = 0; i < numberOfQuestions;i++) output.push(<View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: 10,
        }}
        width={width*.8}
        alignSelf="center"
      >
        <Avatar.Icon
          icon="lead-pencil"
          size={35}
          backgroundColor="transparent"
          bottom={8}
        />
        <Text style={THEME.TEXT.T7} marginHorizontal={20}>
          {" "}
          Question {i+1}:{"  "}
        </Text>

        <TextInput
          style={{
            width: width * 0.4,
            height: 35,
            borderRadius: 5,
            alignSelf: "center",
            bottom: 5,
            marginHorizontal: 5,
          }}
          placeholder={`Question ${i+1}`}
          underlineColor={THEME.COLORS.GREEN}
        ></TextInput>
      </View>)

      return output;
  }
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
          <Text style={THEME.TEXT.T8}>Upload a Quiz</Text>
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
          <Avatar.Icon
            icon="notebook"
            size={35}
            backgroundColor="transparent"
            bottom={8}
          />
          <Text style={THEME.TEXT.T7} marginHorizontal={20}>
            {" "}
            Class
          </Text>
          <DropDownPicker
            style={[styles.dropDownPickerStyle, { color: "white" }]}
            textStyle={{ color: "white" }}
            dropDownContainerStyle={{
              width: width * 0.4,
              marginHorizontal: 12,
              backgroundColor: THEME.COLORS.GREEN,
              borderWidth: 1,
              borderColor: "white",
              borderTopWidth: 0,
            }}
            placeholder="Select a Class"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
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
          <Avatar.Icon
            icon="tag"
            size={35}
            backgroundColor="transparent"
            bottom={8}
          />
          <Text style={THEME.TEXT.T7} marginHorizontal={20}>
            {" "}
            Quiz Name:
          </Text>

          <TextInput
            style={{
              width: width * 0.4,
              height: 35,
              borderRadius: 5,
              alignSelf: "center",
              bottom: 5,
              marginHorizontal: 5,
            }}
            placeholder="Quiz Name"
            underlineColor={THEME.COLORS.GREEN}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 15,
          }}
          width={width}
          alignSelf="center"
        >
          <Avatar.Icon
            icon="pound"
            size={35}
            bottom={8}
            backgroundColor="transparent"
          />
          <Text style={THEME.TEXT.T7} marginHorizontal={20}>
            {" "}
            Number of Questions:
          </Text>
          <TouchableOpacity
            onPress={() => setNumberOfQuestions(numberOfQuestions - 1)}
          >
            <Avatar.Icon
              icon="minus"
              size={35}
              backgroundColor={THEME.COLORS.GREEN}
              bottom={8}
              marginHorizontal={5}
            />
          </TouchableOpacity>

          <Text style={[THEME.TEXT.T8, { bottom: 3, marginHorizontal: 10 }]}>
            {numberOfQuestions}
          </Text>
          <TouchableOpacity
            onPress={() => setNumberOfQuestions(numberOfQuestions + 1)}
          >
            <Avatar.Icon
              icon="plus"
              size={35}
              backgroundColor={THEME.COLORS.GREEN}
              bottom={8}
              marginHorizontal={5}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 15,
            width: "100%",
            justifyContent: "center",
          }}
          alignSelf="center"
        >
          <ScrollView style={{ width: width * 0.8, height:height*.28}}>
            {renderQuestionsInput()}
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",

            marginTop: 15,
            width: "100%",
            justifyContent: "center",
          }}
          alignSelf="center"
        >
          <TouchableOpacity
            style={[
              styles.homeButton,
              { alignSelf: "center", justifyContent: "center", marginTop: 20 },
            ]}
            alignSelf="center"
            justifyContent="center"
          >
            <Text style={THEME.TEXT.T8}>Upload</Text>
          </TouchableOpacity>
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

  dropDownPickerStyle: {
    backgroundColor: THEME.COLORS.GREEN,
    marginHorizontal: 12,
    marginVertical: "4.5%",
    width: width * 0.4,
    padding: 5,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,

    bottom: 20,
    borderColor: "white",
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
    alignSelf: "center",
    bottom: 12,
  },
});

export default QuizScreen;
