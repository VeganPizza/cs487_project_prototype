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
} from "react-native";
import THEME from "../constants/THEME";
import Header from "../navigation/Header";
import { IconButton, TextInput, Avatar } from "react-native-paper";
import { ThemeProvider } from "@react-navigation/native";

// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const LoginScreen = (props) => {
  const [typing, setTyping] = useState(false);
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} title={"Login Screen"} />
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View
          style={{
            marginVertical: 20,
            justifyContent: "center",
            opacity: THEME.isAndroid && typing ? 0.3 : 1,
          }}
        >
          <Text
            style={[
              THEME.TEXT.T11,
              { textAlign: "center", fontWeight: "bold", letterSpacing: 4 },
            ]}
          >
            APP NAME
          </Text>
          <Text
            style={[THEME.TEXT.T5, { textAlign: "center", fontWeight: "bold" }]}
          >
            Lorem Ipsum
          </Text>
        </View>
        <View
          style={{
            marginVertical:'5%',
            justifyContent: "flex-start",
            alignItems: "center",
            opacity: THEME.isAndroid && typing ? 0.2 : 1,
          }}
        >
          <View
            style={{
              maxHeight: height / 4,
              maxWidth: width / 2,
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../images/Logo.png")}
              style={{ width: width / 2.5, height: height / 4 }}
            ></Image>
          </View>

          {/* <IconButton icon='robot' size={width/4}></IconButton> */}
        </View>
        <View style={{  bottom:65, width:'100%', }}>
          <ScrollView>
          <View style={{flexDirection:'row', width:'100%'}}>
            <Avatar.Icon icon="account" style={{backgroundColor:"transparent"}}/>

          
            <TextInput
              underlineColor={THEME.COLORS.GREEN}
              mode="flat"
              label="Username"
              style={{ backgroundColor: "transparent", color: "white", width:width*.75}}
              theme={{
                colors: {
                  text: "white",
                  placeholder: "white",
                  primary: THEME.COLORS.GREEN,
                  
                },
              }}
              onFocus={() => setTyping(true)}
              onBlur={() => setTyping(false)}
            ></TextInput>
          </View>

          <View style={{flexDirection:'row', width:'100%'}}>
            <Avatar.Icon icon="lock" style={{backgroundColor:"transparent"}}/>

            <TextInput
              underlineColor={THEME.COLORS.GREEN}
              mode="flat"
              label="Password"
              style={{
                backgroundColor: "transparent",
                color: "white",
                marginBottom: 10,
                width:width*.75
              }}
              theme={{
                colors: {
                  text: "white",
                  placeholder: "white",
                  primary: THEME.COLORS.GREEN,
                },
              }}
              onFocus={() => setTyping(true)}
              onBlur={() => setTyping(false)}
            ></TextInput>
          </View>
          </ScrollView>
         
        </View>
        <View
          style={{
            marginVertical: 20,
         
           flex:1,
           width:'80%',
           alignItems:'center',
           alignSelf:'center',
          }}
        >
          <TouchableOpacity style={[THEME.BUTTON.LOGIN,]}>
            <Text style={THEME.TEXT.T7}>Login</Text>
          </TouchableOpacity>
        </View>
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
