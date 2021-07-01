import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, Settings } from "react-native";
import HomeScreen from "../screens/UserScreens/HomeScreen";
import SettingsScreen from "../screens/UserScreens/SettingsScreen";
import AssignmentsScreen from "../screens/UserScreens/AssignmentsScreen";
import MessagesScreen from "../screens/UserScreens/MessagesScreen";

function ScreensHome(props) {
  const Stack3 = createStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack3.Navigator
        mode="card"
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
        initialRouteName="HomeScreen"
        independent={true}
      >
        <Stack3.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ gestureEnabled: false }}
        />
          <Stack3.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ gestureEnabled: false }}
        />
         <Stack3.Screen
          name="AssignmentsScreen"
          component={AssignmentsScreen}
          options={{ gestureEnabled: false }}
        />

<Stack3.Screen
          name="MessagesScreen"
          component={MessagesScreen}
          options={{ gestureEnabled: false }}
        />
      
      </Stack3.Navigator>
    </SafeAreaView>
  );
}

export default ScreensHome;
