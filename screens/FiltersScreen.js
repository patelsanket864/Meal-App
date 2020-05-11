import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View,Switch } from 'react-native';
import {HeaderButtons ,Item} from 'react-navigation-header-buttons';
import Colors from '../components/Colors';
import {HeaderButton} from '../components/HeaderButton';
import {setFilters} from '../store/Actions/meals';
import { useDispatch } from 'react-redux';

const FilterScreen=props=>{
  
  const {navigation} = props;
  const [isGlutenFree,setIsGlutenFree] = useState(false);
  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const appFilters={
       glutenFree : isGlutenFree
    }
    dispatch(setFilters(appFilters));
  },[isGlutenFree]);

  useEffect(()=>{
  navigation.setParams({save:saveFilters});
  },[saveFilters])

    return(
        <View style={styles.screen}>
            <Text style={styles.textTitle}>Available Filters/Ristrictions</Text>
            <View style={styles.filterContainer}>
              <Text>Gluten-free</Text>
              <Switch 
                trackColor={{true:Colors.primaryColor}}
                thumbColor={Colors.primaryColor}
                value={isGlutenFree} 
                onValueChange={newValue=>setIsGlutenFree(newValue)} 
              />
            </View>
        </View>
    )
}
FilterScreen.navigationOptions=(navData)=>{
  return{    
  headerLeft : ()=><HeaderButtons style={styles.screen} HeaderButtonComponent={HeaderButton}>
    <Item 
      iconName='ios-menu'
      title="menu" 
      onPress={()=>{
        navData.navigation.toggleDrawer();
      }} 
      />
  </HeaderButtons>,
  headerRight :()=><HeaderButtons style={styles.screen} HeaderButtonComponent={HeaderButton}>
  <Item 
    iconName='ios-save'
    title="save" 
    onPress={navData.navigation.getParam('save')} 
    />
</HeaderButtons>
  }
  
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle:{
   textAlign:'center',
   fontSize:25,
   margin:15
  },
  filterContainer:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between'
  }
});

export default FilterScreen;
