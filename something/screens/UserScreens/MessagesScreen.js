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

const MessagesScreen = (props) => {
    const [notifications, setNotifications] = useState(true);
    const contacts =[{name:'Matthew Bauer', role:'Professor'},{name:'Michael Lee', role:'Professor'},{name:'Victor', role:'Student'},{name:'Ale', role:'Student'},{name:'Undeemiss', role:'Student'},{name:'Khushboo', role:'Student'}]
    const renderContacts = () =>{
        let output=[]
        for (let contact of contacts) output.push( 
         <View
            style={{
              flexDirection: "row",             
              marginTop: 15,
              borderColor:'white',
              borderTopWidth:1,
              alignItems:'center'   
            }}
             width={width}
             alignSelf="center"
          >
            <Avatar.Icon backgroundColor='transparent' size={35} icon='account' style={{borderWidth:1,  borderColor:'white', marginHorizontal:10, top:7.5}}/>
            <Text style={[THEME.TEXT.T6,{marginHorizontal:20, top:7.5}]}>{contact.role}: </Text>
            <Text style={[THEME.TEXT.T6,{marginHorizontal:10, top:7.5}]}>{contact.name} </Text>
          </View>)

          return output

    }
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
          <Text style={THEME.TEXT.T8}>Messages</Text>
        </View>
         {renderContacts()}
         <View style={{width:width, borderBottomWidth:1, borderColor:'white', top:15}}/>
      
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

export default MessagesScreen;
