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
import * as Progress from "react-native-progress";
import THEME from "../constants/THEME"
import {LinearGradient} from 'expo-linear-gradient';
import {Avatar} from 'react-native-paper'
// import Logo from '../images/Logo'
const { width, height } = Dimensions.get("screen");
import * as Animatable from "react-native-animatable";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
const AssignmentCard = (props) => {
    const [progress, setPorgress]= useState(props.progress)
    const role = props.role

    const fadeIn = {
        0: {
          opacity: 0,
          scale: 0.9,
        },
        0.5: {
          opacity: 0.4,
          scale: 0.95,
        },
        1: {
          opacity: 1,
          scale: 1,
        },
      };

const navigation = props.navigation
const assignmentName = props.assignmentName
  return (
    (role === 'faculty') ?
      <Animatable.View style={styles.container} animation={fadeIn}>
             <LinearGradient style={styles.container}
    colors={['#042630', '#006f56', THEME.COLORS.GREEN]} 

    start={[0.6, 0.0]}
     end={[0.6, 0.8]}
    >
        <TouchableOpacity style={{justifyContent:"flex-start", alignSelf:'center', alignItems:'center'}}
        >
        <View style={{justifyContent:"flex-start", marginTop:15, height:"25%"}}>
    <Text style={[THEME.TEXT.T6,{fontWeight:'bold', letterSpacing:2}]}>{props.assignmentName}</Text>
    </View> 

     <View style={{justifyContent:"flex-start", height:"25%", marginBottom:10}}>
        <Avatar.Icon backgroundColor='transparent' icon='notebook' />
     </View>

     <View style={{justifyContent:"center", height:"25%", marginTop:10}}>
    
      <View style={{padding:5, paddingHorizontal:'12%', justifyContent:'center', alignSelf:'center', borderRadius:8, backgroundColor:THEME.COLORS.BLUE}}>
        <Text style={THEME.TEXT.T4}>
          Grade Students
        </Text>
      </View>
     </View>
        </TouchableOpacity>
     
    </LinearGradient>
    </Animatable.View>

    :

    <Animatable.View style={styles.container} animation={fadeIn}>
             <LinearGradient style={styles.container}
    colors={['#042630', '#006f56', THEME.COLORS.GREEN]} 

    start={[0.6, 0.0]}
     end={[0.6, 0.8]}
    >
        <TouchableOpacity style={{justifyContent:"flex-start", alignSelf:'center', alignItems:'center'}}
        onPress={()=>navigation.navigate('QuizScreen',{quizName: assignmentName})}>
        <View style={{justifyContent:"flex-start", marginTop:15, height:"25%"}}>
    <Text style={[THEME.TEXT.T6,{fontWeight:'bold', letterSpacing:2}]}>{props.assignmentName}</Text>
    </View> 

     <View style={{justifyContent:"flex-start", height:"25%", marginBottom:10}}>
        <Avatar.Icon backgroundColor='transparent' icon='notebook' />
     </View>

     <View style={{justifyContent:"center", height:"25%", marginTop:10}}>
     <Text style={[THEME.TEXT.T6,{fontWeight:'bold', letterSpacing:2, textAlign:"center"}]}>Grade: {Math.round(props.progress * 1000)/10}%</Text>
     <Progress.Bar
          color={THEME.COLORS.BLUE}
          alignSelf="center"
          marginTop={5}
          animated={true}
          progress={progress}
          width={width*.2}
        ></Progress.Bar>
     </View>
        </TouchableOpacity>
     
    </LinearGradient>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width*.39,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "flex-start",
    height:height*.25,
    marginHorizontal:10,
    borderRadius:10,
    
  },

  
});

export default AssignmentCard;
