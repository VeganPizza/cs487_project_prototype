import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import CurrentClasses from "../screens/UserScreens/CurrentClasses";
import SampleScreen from "../screens/UserScreens/CurrentClasses";
import ClassScreen from "../screens/UserScreens/ClassScreen";

function ScreensClasses(props) {
  const Stack2 = createStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack2.Navigator
        mode="card"
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
        initialRouteName="CurrentClasses"
        independent={true}
      >
        <Stack2.Screen
          name="CurrentClasses"
          component={CurrentClasses}
          options={{ gestureEnabled: false }}
        />
        <Stack2.Screen
          name="ClassScreen"
          component={ClassScreen}
          options={{ gestureEnabled: false }}
        />
      </Stack2.Navigator>
    </SafeAreaView>
  );
}

export default ScreensClasses;
