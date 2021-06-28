import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import THEME from "../constants/THEME"
import {IconButton} from 'react-native-paper'

const {width, height} = Dimensions.get('screen')

const Header = (props) =>  {
  const navigation = props.navigation
  return (
    <View style={styles.container}>
        <View style={{ justifyContent:'flex-start', position:'absolute'}}>
        <IconButton icon="arrow-left" style={{ backgroundColor: "transparent" }} size={30} onPress={() => navigation.goBack()} color="white" />
        </View>
        <View style={{ justifyContent:"center", alignSelf:'center', width:'100%', alignItems:'center'}}>
            <Text style={[THEME.TEXT.T9,{}]}>{props.title}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:'3%',
    width:"100%",
    backgroundColor:THEME.COLORS.GREEN,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:"row",
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    paddingTop:THEME.isAndroid ? height * .06 : 30
    

  },
});

export default Header;