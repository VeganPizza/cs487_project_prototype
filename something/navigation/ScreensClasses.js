import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import CurrentClasses from "../screens/UserScreens/CurrentClasses";
import SampleScreen from "../screens/UserScreens/CurrentClasses";
import ClassScreen from "../screens/UserScreens/ClassScreen";
import QuizScreen from "../screens/UserScreens/QuizScreen";

function ScreensClasses(props) {
  const Stack2 = createStackNavigator();
  const role = props.role
  console.log(role + " yepaaaaa")
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
          props={role}
          options={{ gestureEnabled: false }}
        >
          {(props) => <CurrentClasses {...props} role={role} />}
        </Stack2.Screen>
        <Stack2.Screen
          name="ClassScreen"
          props={role}
          options={{ gestureEnabled: false }}
        >
          {(props) => <ClassScreen {...props} role={role} />}
        </Stack2.Screen>

        <Stack2.Screen
          name="QuizScreen"
          props={role}
          options={{ gestureEnabled: false }}
        >
          {(props) => <QuizScreen {...props} role={role} />}
        </Stack2.Screen>
      </Stack2.Navigator>
    </SafeAreaView>
  );
}

export default ScreensClasses;
