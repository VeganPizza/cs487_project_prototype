import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import THEME from "./constants/THEME"
import { NavigationContainer } from '@react-navigation/native'
import Screens from './navigation/Screens'
export default function App(props) {
  return (
    <NavigationContainer >
        <Screens/>
    </NavigationContainer>
  );
}

