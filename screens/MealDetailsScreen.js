import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {MEALS,CATEGORIES} from '../Data/Dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {CustomHeaderButton} from '../components/CustomHeaderButton';

const MealDetailsScreen=props=>{
  const mealId=props.navigation.getParam('mealId');
  const mealDetails=MEALS.find(meal=>meal.id===mealId);

    return(
        <View style={styles.container}> 
            <View style={{flex:1,alignItems:'center',paddingVertical:300,justifyContent:'center'}}>
              <Text>{mealDetails.title}</Text>
            </View>
            <Button title="Go Back to Categories" onPress={()=>{
                props.navigation.popToTop('Categories');}
                }/>
        </View>
    )
}

MealDetailsScreen.navigationOptions=(itemdata)=>{
  const mealId=itemdata.navigation.getParam('mealId');
  const mealDetails=MEALS.find(meal=>meal.id===mealId);
  return{
    headerTitle : mealDetails.title,
    headerRight : ()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item 
        iconName='upcircle'
        title="favorite" 
        onPress={()=>{
          console.log('mark as favorite')
        }} 
        />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MealDetailsScreen;
