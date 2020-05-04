import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ImageBackground,Image } from 'react-native';

const MealItem=props=>{
    return(
    <View style={{flex:1,padding:10}}>
    <TouchableOpacity style={styles.mealContainer} onPress={props.onSelectMeal}>
        
        <View style={styles.mealImage}>
            < ImageBackground source={{uri:props.image}} style={styles.bgImage} >
                <View style={styles.mealtext}>
                <Text style={{color:'white',fontFamily:'open-sans-bold',fontSize:23,}}  numberOfLines={1}>{props.title}</Text>
                </View>
            </ ImageBackground>
        </View>
        
        <View style={styles.mealDetails}>
            <Text>{props.duration}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordable.toUpperCase()}</Text>
        </View>
    </TouchableOpacity>
    </View>
)}

const styles=StyleSheet.create({
    mealContainer:{
        height:200,
        width:'95%',
        backgroundColor:'lightgray',
        alignSelf:'center',
        borderRadius:10,
        overflow:'hidden'
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
        height:'100%',
        width:'100%'
    },
    mealtext:{
        alignItems:'center',
        marginTop:130,
        backgroundColor:'gray',
        opacity:0.6
    }
    
})

export default MealItem;