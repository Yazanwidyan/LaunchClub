import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PadsExploreCard = ({data}) => {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: '#2F2F2A',
        padding: 4,
        borderRadius: 18,
        marginHorizontal: 6,
      }}>
      <Image
        source={data.image}
        resizeMode="contain"
        style={{width: 60, height: 60, borderRadius: 18}}
      />
    </View>
  );
};

export default PadsExploreCard;

const styles = StyleSheet.create({});
