import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import THEME from "../constants/THEME";
import Header from "../navigation/Header";

const LoginScreen = (props) => {
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} title={"Login Screen"} />
      <View style={{marginVertical:20}}>
        <TouchableOpacity style={THEME.BUTTON.LOGIN}>
          <Text style={THEME.TEXT.T7}>Login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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
});

export default LoginScreen;
