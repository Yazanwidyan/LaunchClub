import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeIDOItem = ({item}) => {
  return (
    <View>
      <Text>{item.id}</Text>
    </View>
  );
};

export default HomeIDOItem;

const styles = StyleSheet.create({});
