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
    AsyncStorage,
} from "react-native";
import THEME from "../constants/THEME";
import Header from "../navigation/Header";
import {  TextInput, Avatar } from "react-native-paper";
import {BASE_URL} from "./host";
import { login } from '/src.app.py';
// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
let state = "global";
const LoginScreen = (props) => {
  const [typing, setTyping] = useState(false);
  state = {
      username: '',
      password: ''
  }
  // _store = async () = {
  //     try {
  //         await AsyncStorage.setItem('USER', 'user');
  //     } catch (error){
  //         //Error
  //     }
  // };


  login = () => {
      fetch(BASE_URL + "login", {
          method: 'POST',
          body: JSON.stringify({
              email: this.state.username,
              password: this.state.password
          })
      })
          .then((resp) => {
              return resp.json();
          })
          .then((jsonData) => {
              console.log(JSON.stringify(jsonData));
              if (jsonData['result'] === True) {
                  AsyncStorage.setItem('USERNAME', jsonData.user);
                  AsyncStorage.setItem('TOKEN', jsonData.token);
                  alert("You are: "+jsonData['user']);
                  this.props.navigation.navigate("UserScreen");
              }
              else {
                  alert("Incorrect username or password. Please, Try again");
              }
          }).catch((e)=>{
              console.log(e)
      })
  }
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} title={"Login"} />
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
          <TouchableOpacity style={[THEME.BUTTON.LOGIN,]} onPress={()=>props.navigation.navigate("UserScreen")}>
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
