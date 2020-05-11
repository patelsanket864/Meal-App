import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import {CATEGORIES} from '../Data/Dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { toggleFavorite } from '../store/Actions/meals';

const ListItem = props=>{
  return(
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  )
}

const MealDetailsScreen=props=>{
  const mealId=props.navigation.getParam('mealId');
  const availableMeals = useSelector(state=>state.meals.meals);
  const mealDetails=availableMeals.find(meal=>meal.id===mealId);

  const dispatch = useDispatch();
  
  const toggleFavHandler=useCallback(()=>{
    dispatch(toggleFavorite(mealId));
  },[dispatch,mealId]);

  useEffect(()=>{
    props.navigation.setParams({toggleFav : toggleFavHandler})
  },[toggleFavHandler])

  const currentFavoriteMeal = useSelector(state=>
    state.meals.favoriteMeals.some(meal=>meal.id===mealId));

  useEffect(()=>{
    props.navigation.setParams({isFav: currentFavoriteMeal })
  },[currentFavoriteMeal])

  return(
    <ScrollView >
      
        <View >
            < Image source={{uri:mealDetails.imageUrl}} style={styles.bgImage} />
        </View>
        
        <View style={styles.mealDetails}>
            <Text>{mealDetails.duration}</Text>
            <Text>{mealDetails.complexity.toUpperCase()}</Text>
            <Text>{mealDetails.affordability.toUpperCase()}</Text>
        </View>

        <Text style={styles.textTitle}>ingredients</Text>
          {mealDetails.ingredients.map(ingredient=>(
            <ListItem key={ingredient} >{ingredient}</ListItem>
          ))}

        <Text style={styles.textTitle}>Steps</Text>
        {mealDetails.steps.map(step=>(
          <ListItem key={step}>{step}</ListItem>
        ))}
    </ScrollView>
  )
}

MealDetailsScreen.navigationOptions=(itemdata)=>{
  //const mealId=itemdata.navigation.getParam('mealId');
  const mealTitle=itemdata.navigation.getParam('mealTitle');
  const toggleFavMeal=itemdata.navigation.getParam('toggleFav');
  const isFavMeal=itemdata.navigation.getParam('isFav');
  return{
    headerTitle : mealTitle,
    headerRight : ()=><HeaderButtons >
      <Item 
        iconName={isFavMeal ? 'ios-star' : 'ios-star-outline'}
        title="favorite" 
        onPress={toggleFavMeal} 
        />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealDetails:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
    backgroundColor:'white'
},
mealImage:{
   height:'85%',
   width:'100%'
},
bgImage:{
  height:200,
  width:'100%'
},
listItem:{
  marginHorizontal:20,
  marginVertical:10,
  padding:10,
  borderRadius:5,
  borderWidth:1
},
textTitle:{
  fontFamily:'open-sans-bold',
  fontSize:35,
  alignSelf:'center'
}
});

export default MealDetailsScreen;
