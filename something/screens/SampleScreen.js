import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import THEME from "../constants/THEME";

const SampleScreen = (props) => {
  console.log(props.navigation)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={THEME.BUTTON.LOGIN} onPress={()=>{props.navigation.navigate('Login')}}>
        <Text style={THEME.TEXT.T7}>Navigate</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SampleScreen;
