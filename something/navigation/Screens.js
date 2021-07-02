import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import SampleScreen from "../screens/SampleScreen";
import LoginScreen from "../screens/LoginScreen";
import UserScreen from "../screens/UserScreen";
import FacultyScreen from "../screens/FacultyScreen";

function Screens(props) {
    const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{flex:1}}>
      <Stack.Navigator mode ="card" headerMode="none" screenOptions={{gestureEnabled:false}} initialRouteName="Sample">
        <Stack.Screen name="Sample" component={SampleScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="UserScreen" component={UserScreen}  options={{gestureEnabled:false}}></Stack.Screen>
        <Stack.Screen name="FacultyScreen" component={FacultyScreen}  options={{gestureEnabled:false}}></Stack.Screen>
        
      </Stack.Navigator>
    </SafeAreaView>
  );
}


export default Screens