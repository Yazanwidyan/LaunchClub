import {StyleSheet, Image, View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {assets, COLORS, FONTS, SIZES} from '../constants';
import CustomText from '../components/UI/CustomText';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {whitelistData} from '../constants';
import WhitelistItem from '../components/WhitelistItem';

const Whitelist = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{flex: 1, marginVertical: 80, paddingHorizontal: SIZES.padding}}>
      <FlatList
        ListHeaderComponentStyle={{marginBottom: 30}}
        ListHeaderComponent={
          <View>
            <CustomText>
              List of open/closed whitelists with links and description of the
              registration process.
            </CustomText>
          </View>
        }
        data={whitelistData}
        renderItem={({item}) => {
          return <WhitelistItem item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Whitelist;

const styles = StyleSheet.create({});
