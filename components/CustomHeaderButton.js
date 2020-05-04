import React from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import Colors from './Colors'

const CustomHeaderButton = props => {
    return (
      <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color='white'
      />
    );
  };
  
  export default CustomHeaderButton;