import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {useSelector} from 'react-redux';

const Divider = () => {
  const {theme} = useSelector(state => state.theme);

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor:
          theme == 'light' ? COLORS.background : COLORS.backgroundDark,
      }}></View>
  );
};

export default Divider;

const styles = StyleSheet.create({});
