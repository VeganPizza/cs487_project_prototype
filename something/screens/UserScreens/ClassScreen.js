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
import {Avatar} from 'react-native-paper'

import AssignmentCard from '../../components/AssignmentCard'


// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
const cardsArrayInfo = [{progress:0, assignmentName:'Quiz 1'}, {progress:.55, assignmentName:'Quiz 2'},
{progress:.86, assignmentName:'Quiz 3'}]


const ClassScreen = (props) => {

const role= props.role
const renderCards = () =>{
  let output = []
  for (const element of cardsArrayInfo) output.push(<AssignmentCard progress={element.progress} assignmentName={element.assignmentName} role={role} navigation={props.navigation}/>)
      
  return  <ScrollView style={{ height: height * 0.3, width: width }} horizontal={true}>
  {output}
 </ScrollView>
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
            
          <Text style={THEME.TEXT.T8}>Current Assignments {props.assignmentName}</Text>
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

export default ClassScreen;
