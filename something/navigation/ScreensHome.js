import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, Settings } from "react-native";
import HomeScreen from "../screens/UserScreens/HomeScreen";
import SettingsScreen from "../screens/UserScreens/SettingsScreen";
import AssignmentsScreen from "../screens/UserScreens/AssignmentsScreen";
import MessagesScreen from "../screens/UserScreens/MessagesScreen";
import UploadQuiz from "../screens/UserScreens/UploadQuiz"
import QuizScreen from "../screens/UserScreens/QuizScreen";


function ScreensHome(props) {
  const Stack3 = createStackNavigator();
  const role = props.role
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack3.Navigator
        mode="card"
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
        initialRouteName="HomeScreen"
        independent={true}
        role={props.role}
      >
       
        
        <Stack3.Screen  name="HomeScreen" props={role} options={{ gestureEnabled: false }}>
        {props=> <HomeScreen {...props} role={role}/>}
        </Stack3.Screen>

        <Stack3.Screen  name="SettingsScreen" props={role} options={{ gestureEnabled: false }}>
        {props=> <SettingsScreen {...props} role={role}/>}
        </Stack3.Screen>
      
        <Stack3.Screen  name="AssignmentsScreen" props={role} options={{ gestureEnabled: false }}>
        {props=> <AssignmentsScreen {...props} role={role}/>}
        </Stack3.Screen>
         
        <Stack3.Screen  name="MessagesScreen" props={role} options={{ gestureEnabled: false }}>
        {props=> <MessagesScreen {...props} role={role}/>}
        </Stack3.Screen>

        <Stack3.Screen  name="UploadQuiz" props={role} options={{ gestureEnabled: false }}>
        {props=> <UploadQuiz {...props} role={role}/>}
        </Stack3.Screen>

        <Stack3.Screen
          name="QuizScreen"
          props={role}
          options={{ gestureEnabled: false }}
        >
          {(props) => <QuizScreen {...props} role={role} />}
        </Stack3.Screen>

      
      </Stack3.Navigator>
    </SafeAreaView>
  );
}

export default ScreensHome;
