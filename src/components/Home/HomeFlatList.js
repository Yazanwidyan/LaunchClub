import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import HomeLaunchpadItem from './HomeLaunchpadItem';
import IDOItem from '../IDO/IDOItem';
import {SIZES} from '../../constants';

const HomeFlatList = ({data, dataType}) => {
  return (
    <FlatList
      horizontal
      data={data}
      contentContainerStyle={{
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        paddingTop: 24,
      }}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={() => {
        return <Text></Text>;
      }}
      renderItem={({item}) => {
        switch (dataType) {
          case 'launchpad':
            return <HomeLaunchpadItem item={item} />;
          case 'ido':
            return <IDOItem item={item} />;
          default:
            break;
        }
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default HomeFlatList;

const styles = StyleSheet.create({});
