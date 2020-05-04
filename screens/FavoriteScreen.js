import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {MEALS} from '../Data/Dummy-data';
import MealItem from '../components/MealItem'
const FavoriteScreen=props=>{

  const meals = MEALS.filter(meal=>meal.id==='m1' || meal.id==='m2');
  const renderMealItem=itemData=>{
    return <MealItem 
      title={itemData.item.title} 
      duration= {itemData.item.duration} 
      image={itemData.item.imageUrl} 
      complexity={itemData.item.complexity} 
      affordable={itemData.item.affordability} 
      onSelectMeal={()=>{
        props.navigation.navigate({
          routeName:'MealDetails', params:{
            mealId:itemData.item.id
          }
        })
      }}
      />
  }
    return(
      <FlatList data={meals} keyExtractor={(item,index)=>item.id} renderItem={renderMealItem} />
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default FavoriteScreen;
