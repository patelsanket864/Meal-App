import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealNavigator from './navigations/mealsNavigator'

const fetchFonts= () =>{
  return Font.loadAsync({
  'open-sans':require('./assets/Fonts/OpenSans-Regular.ttf'),
  'open-sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf'),
  'open-sans-italic':require('./assets/Fonts/OpenSans-Italic.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded]=useState(false);

  if(!fontLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={()=>setFontLoaded(true)}
      />
    )
  }

  return <MealNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'open-sans',
    fontSize:25
  }
});
