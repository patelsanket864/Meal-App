import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {CATEGORIES,MEALS} from '../Data/Dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen=props=>{
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

  const catId=props.navigation.getParam('categoryId');
  const displayMeals=MEALS.filter(
    meal=>meal.categoryIds.indexOf(catId)>=0
  );

    return(
        <View style={styles.container}>
            <FlatList data={displayMeals} keyExtractor={(item,index)=>item.id} renderItem={renderMealItem} />
        </View>
    )
}

CategoryMealScreen.navigationOptions=navigationData=>{
  const catId=navigationData.navigation.getParam('categoryId');
  const selectedCat=CATEGORIES.find(cat=>cat.id===catId);
  return {
    headerStyle : {backgroundColor : selectedCat.color},
    headerTitle: selectedCat.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CategoryMealScreen;
