import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../constants';
import React from 'react';

const PadsExploreList = ({data}) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: '#2F2F2A',
        padding: 4,
        borderRadius: 18,
        marginHorizontal: 10,
      }}>
      <Image
        source={data.image}
        resizeMode="contain"
        style={{width: 50, height: 50, borderRadius: 18}}
      />
    </View>
  );
};

export default PadsExploreList;

const styles = StyleSheet.create({});
