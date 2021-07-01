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
import THEME from "../../constants/THEME";
import Header from "../../navigation/Header";
import { TextInput, Avatar } from "react-native-paper";
import * as Progress from "react-native-progress";
import ToggleSwitch from "toggle-switch-react-native"

// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");

const SettingsScreen = (props) => {
    const [notifications, setNotifications] = useState(true);
  return (
    <View style={styles.container}>
      
        
      <View
        styles={{ flexDirection: "row", marginTop: 20 }}
        width={width}
        height={height * 0.45}
      >
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Avatar.Icon  icon='arrow-left' backgroundColor='transparent' style={{marginHorizontal:10}}></Avatar.Icon>
          </TouchableOpacity>
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", margin: 20 }}
        >
          <Text style={THEME.TEXT.T8}>Settings</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 10,
            
          }}
          width={width}
          alignSelf="center"
        
        >
         

            <Avatar.Icon icon = 'bell' size={35} backgroundColor='transparent' bottom={8}/>      
            <Text style={THEME.TEXT.T7} marginHorizontal={20}>  Notifications</Text>
            <ToggleSwitch isOn={notifications}
                    onColor={THEME.COLORS.GREEN}
                    offColor="rgba(255,255,255,0.7)"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    width={25}
                    height={25}
                    onToggle={() => setNotifications(!notifications)}
                    style={{marginHorizontal:20}}
                    
                  />
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

  homeButton: {
    backgroundColor: THEME.COLORS.BLUE,
    marginHorizontal: 5,
    marginVertical: "2.5%",
    width: width * 0.3,
    padding: 5,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SettingsScreen;
