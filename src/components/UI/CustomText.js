import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../../constants';

const CustomText = props => {
  const {theme} = useSelector(state => state.themeReducer);

  return (
    <Text
      style={{
        color: props.grayText
          ? COLORS.gray
          : theme == 'light'
          ? COLORS.black
          : COLORS.white,
        ...props.style,
        fontSize: props.size,
      }}>
      {props.children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
