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
  useWindowDimensions
} from "react-native";
import THEME from "../constants/THEME";
import Header from "../navigation/Header";
import { TextInput, Avatar } from "react-native-paper";
import HomeScreen from "./UserScreens/HomeScreen"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native'
import ScreensClasses from '../navigation/ScreensClasses'
import ScreensHome from '../navigation/ScreensHome'
import * as Progress from "react-native-progress";
// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const FirstRoute = () => (
  <NavigationContainer independent={true}>
  <ScreensHome/>
</NavigationContainer>
  );
  
  const SecondRoute = () => (
    <NavigationContainer independent={true}>
      <ScreensClasses/>
    </NavigationContainer>
  );

const UserScreen = (props) => {
  const [typing, setTyping] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'classes', title: 'Classes' },
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
          <Text style={THEME.TEXT.T5} weight='bold'>{route.title}</Text>
        </View>
      )}
      indicatorStyle={{ backgroundColor: THEME.COLORS.BLUE }}
      style={styles.tabBar}
    />
  );

 
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} title={"User Menu"} logout={true} />
      <View style={{width:'100%', height:height-10, marginTop:10}}>
      <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }

    }
    swipeEnabled={false}

    />
     <View
        styles={{ flexDirection: "row", justifyContent: "flex-end" }}
        width={width}
        flex={0.4}
        justifyContent="flex-start"
        top={20}
        
      >
        <Text style={[THEME.TEXT.T5, { textAlign: "center" }]}>
          Progress This Week
        </Text>
        <Progress.Bar
          color={THEME.COLORS.GREEN}
          alignSelf="center"
          marginTop={5}
          animated={true}
          progress={0.8}
          width={width/1.5}
        ></Progress.Bar>
        <Text
          style={[
            THEME.TEXT.T8,
            { textAlign: "center", marginTop: 5, fontWeight: "bold" },
          ]}
        >
          APP NAME
        </Text>
      </View>
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
    borderColor:THEME.COLORS.BACKGROUND,
    borderWidth:0,
    borderBottomColor:'transparent',
    borderBottomWidth:0,
    
  },
});

export default UserScreen;
