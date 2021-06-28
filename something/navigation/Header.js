import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import THEME from "../constants/THEME"
import {IconButton} from 'react-native-paper'

const Header = (props) =>  {
  const navigation = props.navigation
  return (
    <View style={styles.container}>
        <View style={{flex:1, justifyContent:'flex-start'}}>
        <IconButton icon="arrow-left" style={{ backgroundColor: "transparent" }} size={30} onPress={() => navigation.goBack()} color="white" />
        </View>
        <View style={{flex:1.5, justifyContent:"flex-end"}}>
            <Text style={[THEME.TEXT.T8,{alignSelf:"flex-start",fontWeight:'bold'}]}>{props.title}</Text>
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
    borderBottomRightRadius:12
    

  },
});

export default Header;