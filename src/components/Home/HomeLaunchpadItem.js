import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {assets} from '../../constants';

const ExploreLaunchpads = ({item}) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        marginRight: 10,
        marginTop: 20,
      }}>
      <Image
        resizeMode="cover"
        style={{width: '100%', height: '100%', borderRadius: 10}}
        source={item.image}
      />
    </View>
  );
};

export default ExploreLaunchpads;

const styles = StyleSheet.create({});
