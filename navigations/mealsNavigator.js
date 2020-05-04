import React from 'react';
import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import CategoryScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../components/Colors';
import FavoriteScreen from '../screens/FavoriteScreen';

const defaultNavigationOps={

        headerStyle : {backgroundColor : Colors.primaryColor},
        headerTintColor : 'white'
    
}

const MealNavigator=createStackNavigator({
    Categories:{
        screen:CategoryScreen,
        navigationOptions:{
            headerTitle : 'Meal Categories',
          }
    },
    CategoryMeals: {
        screen:CategoryMealScreen
    },
    MealDetails:{
        screen:MealDetailsScreen
    }
},
{
    defaultNavigationOptions:defaultNavigationOps 
});

const FavScreenNavigator =createStackNavigator({
    FavoriteScreen:
    { 
        screen: FavoriteScreen,
        navigationOptions:{
            headerTitle : 'Favorite Screen'
        }
    },

    MealDetails:{
        screen : MealDetailsScreen
    }
},
{
    defaultNavigationOptions:defaultNavigationOps
})

const MealFavTabNavigator=createMaterialBottomTabNavigator({
    Meals:{
        screen: MealNavigator,
        navigationOptions:{
            tabBarColor:Colors.primaryColor,
            tabBarIcon:(tabInfo)=>{
                return (
                    <Ionicons name="ios-restaurant" size={25} color="white" />
                )
            }
        }
    },
    Favorites:{
        screen:FavScreenNavigator,

        navigationOptions:{
            tabBarColor:'orange',
            tabBarIcon:(tabInfo)=>{
                return (
                    <Ionicons name="ios-heart-empty" size={20} color="white" />
                )
            }
        }
    }    
},{
    activeColor:'black',
    shifting:true
})

export default createAppContainer(MealFavTabNavigator);