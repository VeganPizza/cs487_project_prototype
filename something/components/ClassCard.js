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
import THEME from "../constants/THEME";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-paper";
// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
import * as Animatable from "react-native-animatable";
import { Navigation } from "react-native-navigation";
const ClassCard = (props) => {
  const navigation = props.navigation;
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
  const role = props.role;

  const handleGradeColor = (grade) =>{
      if (grade >= .8 && grade <=1) return THEME.COLORS.GREEN
      else if (grade >= .6 && grade < .8) return 'orange'
      else {
        return 'red'
      }
  }
  return role === "faculty" ? (
    <Animatable.View style={styles.container} animation={fadeIn}>
      <LinearGradient
        style={styles.container}
        colors={["#042630", "#006f56", THEME.COLORS.GREEN]}
        start={[0.6, 0.0]}
        end={[0.6, 0.8]}
      >
        <TouchableOpacity
          style={{
            justifyContent: "flex-start",
            alignSelf: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("ClassScreen")}
        >
          <View
            style={{
              justifyContent: "flex-start",
              marginTop: 15,
              height: "25%",
            }}
          >
            <Text
              style={[THEME.TEXT.T6, { fontWeight: "bold", letterSpacing: 2 }]}
            >
              {props.className}
            </Text>
          </View>

          <View
            style={{
              justifyContent: "flex-start",
              height: "25%",
              marginBottom: 10,
            }}
          >
            <Avatar.Icon backgroundColor="transparent" icon="notebook" />
          </View>

          <View
            style={{ justifyContent: "center", height: "25%", marginTop: 10 }}
          >
            <Text
              style={[
                THEME.TEXT.T6,
                { fontWeight: "bold", letterSpacing: 2, textAlign: "center" },
              ]}
            >
              16 Students
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </Animatable.View>
  ) : (
    <Animatable.View style={styles.container} animation={fadeIn}>
      <LinearGradient
        style={styles.container}
        colors={["#042630", "#006f56", THEME.COLORS.GREEN]}
        start={[0.6, 0.0]}
        end={[0.6, 0.8]}
      >
        <TouchableOpacity
          style={{
            justifyContent: "flex-start",
            alignSelf: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("ClassScreen")}
        >
          <View
            style={{
              justifyContent: "flex-start",
              marginTop: 15,
              height: "25%",
            }}
          >
            <Text
              style={[THEME.TEXT.T6, { fontWeight: "bold", letterSpacing: 2 }]}
            >
              {props.className}
            </Text>
          </View>

          <View
            style={{
              justifyContent: "flex-start",
              height: "25%",
              marginBottom: 10,
            }}
          >
            <Avatar.Icon backgroundColor="transparent" icon="notebook" />
          </View>

          <View
            style={{ justifyContent: "center", height: "25%", marginTop: 10 }}
          >
            <View style={{paddingHorizontal:20, backgroundColor:handleGradeColor(props.grade), borderRadius:15, width:width*.3, alignSelf:'center', marginBottom:5, justifyContent:"center", alignItems:'center'}}>
              <Text style={THEME.TEXT.T5}>Grade: {Math.round(props.grade *100)}%</Text>
            </View>
            <Text
              style={[
                THEME.TEXT.T6,
                { fontWeight: "bold", letterSpacing: 2, textAlign: "center" },
              ]}
            >
              {props.professor}
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.39,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "flex-start",
    height: height * 0.25,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default ClassCard;
