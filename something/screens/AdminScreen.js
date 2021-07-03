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
} from "react-native";
import THEME from "../constants/THEME";
import Header from "../navigation/Header";
import { TextInput, Avatar } from "react-native-paper";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { NavigationContainer } from "@react-navigation/native";
import ScreensClasses from "../navigation/ScreensClasses";
import ScreensHome from "../navigation/ScreensHome";
import * as Progress from "react-native-progress";
import HomeScreen from "./UserScreens/HomeScreen";
// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const FirstRoute = () => (
  <NavigationContainer independent={true}>
    <ScreensHome role={"admin"} />
  </NavigationContainer>
);

const SecondRoute = () => (
  <NavigationContainer independent={true} role={"faculty"}>
    <ScreensClasses role={"faculty"} />
  </NavigationContainer>
);

const FacultyScreen = (props) => {
  const [typing, setTyping] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "classes", title: "Classes" },
  ]);
  const renderScene = SceneMap({
    home: FirstRoute,
    classes: SecondRoute,
  });
  const layout = useWindowDimensions();

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={THEME.TEXT.T5} weight="bold">
            {route.title}
          </Text>
        </View>
      )}
      indicatorStyle={{ backgroundColor: THEME.COLORS.BLUE }}
      style={styles.tabBar}
    />
  );

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} title={"User Menu"} logout={true} username={props.route.params.username} />
      <View style={{ width: "100%", height: height - 10, marginTop: 10 }}>
        <NavigationContainer independent={true}>
          <ScreensHome role={"admin"} />
        </NavigationContainer>
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
  tabBar: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    color: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderColor: THEME.COLORS.BACKGROUND,
    borderWidth: 0,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
});

export default FacultyScreen;
