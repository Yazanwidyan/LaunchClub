import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';

const Launchpads = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Launchpads'} />
      <Text>Launchpads</Text>
    </SafeAreaView>
  );
};

export default Launchpads;

const styles = StyleSheet.create({});
