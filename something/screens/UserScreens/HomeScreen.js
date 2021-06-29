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
// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", width: "100%" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={styles.homeButton}>
            <Text style={THEME.TEXT.T5}>Assignments</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homeButton}>
            <Text style={THEME.TEXT.T5}>Messages</Text>
            <Avatar.Icon
              size={25}
              backgroundColor="transparent"
              icon="android-messages"
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={[styles.homeButton, { padding: 0 }]}>
            <Avatar.Icon
              icon="cog-outline"
              size={42}
              backgroundColor="transparent"
              style={{ alignSelf: "center" }}
            ></Avatar.Icon>
          </TouchableOpacity>
          <View
            style={{ marginHorizontal: 5, padding: 7.5, width: width * 0.3 }}
          ></View>
        </View>
      </View>
      <View styles={{ flexDirection: "row", marginTop: 20 }} width={width}>
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", margin: 20 }}
        >
          <Text style={THEME.TEXT.T8}>Announcements</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 10,
          }}
          width="80%"
          alignSelf="center"
        >
          <Text style={{}}>
            <ScrollView style={{ height: height * 0.4, marginBottom: 15 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  width: width * 0.75,
                  bottom: 20,
                  flexWrap: "wrap",
                }}
              >
                <Image
                  source={require("./../../images/Logo.png")}
                  style={{
                    width: 128,
                    height: 128,
                    left: 15,
                    marginVertical: 15,
                  }}
                ></Image>

                <Text
                  style={{
                    bottom: 20,
                    flexShrink: 1,
                    minWidth: 100,
                    marginHorizontal: 10,
                    color: "white",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  accumsan nulla quis dapibus ultricies. Duis lacinia feugiat
                  lacus, eleifend blandit sapien consequat et. Pellentesque in
                  congue risus, auctor suscipit purus. Fusce pulvinar metus
                  tempor velit lacinia euismod. Integer sit amet magna ut urna
                  commodo rhoncus. Nullam rutrum elit et velit scelerisque
                  tempor. Aenean vulputate consequat facilisis. Fusce
                  pellentesque pretium ligula et semper. Cras sit amet volutpat
                  sem. Integer malesuada tortor quam, id convallis tortor
                  consequat in. Vivamus pretium tincidunt dui ut tincidunt.
                  Donec vitae turpis in dolor finibus dictum. Donec sed eros at
                  lacus rutrum sodales. Sed sed aliquet libero. Mauris suscipit
                  est eget purus consectetur accumsan. Sed vel turpis nec nisi
                  vehicula sagittis. Nunc interdum lacus at interdum fermentum.
                  Pellentesque rhoncus suscipit nisi at fermentum. Duis dictum
                  bibendum metus, et mollis odio tristique feugiat. Suspendisse
                  euismod sapien lectus, ac congue lectus congue tincidunt.
                  Integer commodo iaculis sapien in iaculis. Aliquam id urna ac
                  justo aliquam blandit. Ut erat lorem, sagittis eu quam eget,
                  scelerisque tristique nunc. Morbi ornare pharetra auctor. In
                  urna nulla, interdum a maximus a, facilisis vitae ex.
                  Vestibulum ex lorem, tempor a placerat et, bibendum vitae
                  ipsum. Nunc malesuada quam vitae fringilla ullamcorper.
                  Vestibulum dictum velit.
                </Text>
              </View>
            </ScrollView>
          </Text>
        </View>
      </View>
      <View
        styles={{ flexDirection: "row", marginTop: 25,justifyContent:"flex-end" }}
        width={width}
        marginTop={20} 
        
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
        ></Progress.Bar>
        <Text style={[THEME.TEXT.T8,{textAlign:'center', marginTop:5, fontWeight:'bold'}]} >
          APP NAME
        </Text>
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
    padding: 7.5,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default HomeScreen;
