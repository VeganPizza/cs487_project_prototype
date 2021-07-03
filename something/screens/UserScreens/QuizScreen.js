import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,

} from "react-native";
import THEME from "../../constants/THEME";

import { TextInput, Avatar } from "react-native-paper";
import * as Progress from "react-native-progress";

import * as Animatable from "react-native-animatable";

// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const fadeIn = {
    0: {
      opacity: 0,
      scale: 0.9,
    },
    0.5: {
      opacity: 0.4,
      scale: 0.95,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

const QuizScreen = (props) => {
  const [notifications, setNotifications] = useState(true);
  const [visibleResult, setVisibleResult] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "Haskell is a",
      option1: "Functional Language",
      option2: "Object-Oriented Language",
      state: ([state, setState] = useState(0)),
    },
    {
      question: "Java is a",
      option1: "Object-Oriented Language",
      option2: "Functional Language",
      state: ([state, setState] = useState(0)),
    },
    {
      question: "In Javascript console.log",
      option1: "Prints into the console",
      option2: "Updates the State",
      state: ([state, setState] = useState(0)),
    },
    {
      question: "Is a Linked List better for Indexing than an Array?",
      option1: "False",
      option2: "True",
      state: ([state, setState] = useState(0)),
    },
    {
      question: "Does Dijkstra's Algorithm visit all nodes? ",
      option1: "True",
      option2: "False",
      state: ([state, setState] = useState(0)),
    },
  ];
  

  const handleResults = () => {
    let score = 0;
    for (let question of questions) if (question.state[0] == 1) score += 0.2;

  
    setScore(score);
    setVisibleResult(true);
  };

  const renderQuizQuestions = () => {
    let output = [];
    let i = 0;
    for (let question of questions)
      output.push(
        <View
          style={{
            flexDirection: "row",
            marginBottom: 25,

            alignItems: "flex-start",
          }}
          width={width}
          alignSelf="center"
          flexDirection="column"
        >
          <Text
            style={[
              THEME.TEXT.T6,
              {
                marginHorizontal: 20,
                top: 7.5,
                marginBottom: 20,
                color: THEME.COLORS.GREEN,
              },
            ]}
          >
            Question {i + 1} {question.question}:{" "}
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: 15,
            }}
          >
            <View
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
            >
              <Text
                style={[
                  THEME.TEXT.T4,
                  { top: 7.5, marginVertical: 10, width: 150 },
                ]}
              >
                {question.option1}
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  justifyContent: "center",
                  borderRadius: 60,
                  width: 30,
                  alignItems: "center",
                  borderColor: "white",
                  alignSelf: "center",
                  top: 10,
                  marginHorizontal: 15,
                  paddingVertical: 4,
                  backgroundColor:
                    question.state[0] == 1 ? THEME.COLORS.GREEN : "transparent",
                }}
                onPress={() => question.state[1](1)}
              >
                <Text style={[THEME.TEXT.T6, { color: "white" }]}>A</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text
                style={[
                  THEME.TEXT.T4,
                  { top: 7.5, marginVertical: 10, width: 150 },
                ]}
              >
                {question.option2}
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  justifyContent: "center",
                  borderRadius: 60,
                  width: 30,
                  alignItems: "center",
                  borderColor: "white",
                  alignSelf: "center",
                  top: 10,
                  marginHorizontal: 15,
                  paddingVertical: 4,
                  backgroundColor:
                    question.state[0] == 2 ? THEME.COLORS.GREEN : "transparent",
                }}
                onPress={() => question.state[1](2)}
              >
                <Text style={THEME.TEXT.T6}>B</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ),
        i++;

    return output;
  };

  return (
    <View style={styles.container}>
      {visibleResult ? (
        <Animatable.View
            animation={fadeIn}
          style={{
            width: width * 0.8,
            height: height * 0.2,
            backgroundColor: "rgba(101, 134, 203,.75)",
            position: "absolute",
            zIndex: 30,
            alignSelf: "center",
            marginTop: 60,
            alignItems: "center",
            borderRadius: 20,
            flexDirection:'row',
            justifyContent:'center'
          }}
        >
            <View style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <Text
            style={[
              THEME.TEXT.T9,
              {  fontWeight: "bold" , marginVertical:10},
            ]}
          >
            You Scored: {score * 100}%!
          </Text>
          <Progress.Bar
           color={THEME.COLORS.GREEN}
           alignSelf="center"
           marginTop={5}
           animated={true}
           progress={score}
           width={width/1.5}
          />
            </View>
          
          <TouchableOpacity style={{width:"100%", justifyContent:'flex-end', position:'absolute', flexDirection:'row', right:5, alignSelf:"flex-start"}} onPress={()=> setVisibleResult(false)}>
            <Avatar.Icon icon='close' backgroundColor='transparent' style={{}} size={50}/>
          </TouchableOpacity>
        </Animatable.View>
      ) : (
        <></>
      )}
      <View
        styles={{ flexDirection: "row", marginTop: 20 }}
        width={width}
        height={height * 0.45}
        marginBottom={height * 0.1}
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
          <Text style={[THEME.TEXT.T9, {fontWeight:'bold'}]}>{props.route.params.quizName}</Text>
        </View>
        <View style={{ height: height * 0.35, width: "100%" }}>
          <ScrollView style={{ height: "100%", width: "100%" }}>
            {renderQuizQuestions()}
            <View
              style={{
                width: width,
                borderBottomWidth: 1,
                borderColor: "white",
                top: 15,
              }}
            />
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          alignSelf: "flex-end",
          width: "100%",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={[styles.homeButton, { width: "50%" }]}
          onPress={handleResults}
        >
          <Text style={[THEME.TEXT.T5, { textAlign: "center" }]}>
            Submit and See Results
          </Text>
        </TouchableOpacity>
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

export default QuizScreen;
