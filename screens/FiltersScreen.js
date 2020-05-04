import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

const FilterScreen=props=>{
    return(
        <View style={styles.container}>
            <Text>FilterScreen..</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default FilterScreen;
