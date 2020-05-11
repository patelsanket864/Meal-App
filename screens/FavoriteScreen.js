import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import  {useSelector} from 'react-redux';
import MealItem from '../components/MealItem'
const FavoriteScreen=props=>{
  const meals = useSelector(state=>state.meals.favoriteMeals);

  if(meals.length === 0 || !meals){
    return <View style={styles.screen}>
      <Text>No Favorite meal found..!! Start adding some!</Text>
    </View>
  }
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
