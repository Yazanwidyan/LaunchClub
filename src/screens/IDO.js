import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import CustomTextInput from '../components/UI/CustomTextInput';
import {IDOData} from '../constants';
import IDOItem from '../components/IDO/IDOItem';

const IDO = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'IDOs'} />
      <View style={{paddingHorizontal: 20, marginBottom: 20}}>
        <CustomTextInput iconName={'magnify'} placeholder="Search IDOs" />
      </View>
      <FlatList
        data={IDOData}
        numColumns={2}
        contentContainerStyle={{
          marginVertical: 10,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          return <Text></Text>;
        }}
        renderItem={({item, index}) => {
          return <IDOItem twoCol item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default IDO;

const styles = StyleSheet.create({});
