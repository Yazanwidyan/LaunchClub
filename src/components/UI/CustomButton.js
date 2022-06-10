import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: 'red',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.children}
    </TouchableOpacity>
  );
};

export default CustomButton;
