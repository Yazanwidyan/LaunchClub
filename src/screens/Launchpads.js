import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import CustomTextInput from '../components/UI/CustomTextInput';
import {IDOData, PadsData} from '../constants';
import LaunchpadItem from '../components/Launchpads/LaunchpadItem';

const Launchpads = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Launchpads'} />

      <FlatList
        ListHeaderComponent={
          <View style={{paddingHorizontal: 20, marginBottom: 20}}>
            <CustomTextInput
              iconName={'magnify'}
              placeholder="Search Launchpads"
            />
          </View>
        }
        data={PadsData}
        contentContainerStyle={{
          marginVertical: 10,
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          return <Text></Text>;
        }}
        renderItem={({item, index}) => {
          return <LaunchpadItem item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Launchpads;

const styles = StyleSheet.create({});
