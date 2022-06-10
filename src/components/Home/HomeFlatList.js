import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import HomeLaunchpadItem from './HomeLaunchpadItem';
import HomeIDOItem from './HomeIDOItem';

const HomeFlatList = ({data, dataType}) => {
  return (
    <FlatList
      horizontal
      data={data}
      contentContainerStyle={{
        alignItems: 'center',
        padding: 20,
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
            return <HomeIDOItem item={item} />;
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
