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


import ClassCard from '../../components/ClassCard'


// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const cardsArrayInfo = [{professor:'Leclainche', className:'CS 350', grade:1}, {professor:'Matthew Bauer', className:'CS 340', grade:.4},
{professor:'Michael Lee', className:'CS 330', grade:.78}]


const CurrentClasses = (props) => {
  const role = props.role
  console.log(role + " rolee")
    const renderCards = () =>{
        let output = []
        for (const element of cardsArrayInfo) output.push(<ClassCard professor={element.professor} role={role} className={element.className} navigation={props.navigation} grade ={element.grade}/>)
            
        return  <ScrollView style={{ height: height * 0.3, width: width }} horizontal={true}>
        {output}
       </ScrollView>
    }
    console.log(props.navigation +'hello')
  return (
    <View style={styles.container}>
      

      <View
        styles={{ flexDirection: "row", marginTop: 20 }}
        width={width}
        height={height * 0.45}
      >
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", margin: 20 }}
        >
          <Text style={THEME.TEXT.T8}>Current Classes</Text>
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
         {renderCards()}
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

export default CurrentClasses;
