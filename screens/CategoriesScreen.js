import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,TouchableNativeFeedback } from 'react-native';
import {CATEGORIES} from '../Data/Dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {HeaderButton} from '../components/HeaderButton';

const CategoriesScreen=props=>{
  const renderGridItem=(itemData)=>{
    return (
      <View style={styles.grids}>
      <TouchableNativeFeedback style={{flex:1}} onPress={()=>{
        props.navigation.navigate({routeName :'CategoryMeals', params:{
          categoryId:itemData.item.id
        }})
        }}
      >
        <View style={{backgroundColor:itemData.item.color,flex:1,borderRadius:10,alignItems:'flex-end',justifyContent:'flex-end',padding:15}}>
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
    )
  }

    return(
        <FlatList 
          keyExtractor={(item,index)=>item.id}
          data={CATEGORIES} 
          renderItem={renderGridItem} 
          numColumns={2} />
    )
}


CategoriesScreen.navigationOptions=(navData)=>{
  return{
    headerTitle : 'Filter Screen',
    headerLeft : ()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item 
        iconName="ios-menu"
        title="Menu"
        onPress={()=>{
          navData.navigation.toggleDrawer();
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
  },
  grids:{
    flex:1,
    margin:15,
    height:150,
    borderRadius:10,
    overflow:'hidden'
  },
  title:{
    fontSize:17,
    fontFamily:'open-sans-bold',
    color:'white'
  }
});

export default CategoriesScreen;
