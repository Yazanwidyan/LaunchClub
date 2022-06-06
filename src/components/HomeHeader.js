import React from 'react';
import {View, Text, Image, TextInput, FlatList} from 'react-native';

import {COLORS, FONTS, SIZES, assets, PadsData} from '../constants';
import PadsExploreList from './PadsExploreList';

const HomeHeader = ({onSearch}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: 30, height: 20}}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
              marginBottom: 10,
            }}></View>
          <View
            style={{
              width: 20,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}></View>
        </View>

        <View style={{width: 45, height: 45}}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{marginVertical: SIZES.font}}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}>
          Hello There 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}>
          Explore Launchpads
        </Text>
      </View>

      <View style={{marginVertical: SIZES.base}}>
        {/* <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{width: 20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{flex: 1}}
            onChangeText={onSearch}
          />
        </View> */}
        <FlatList
          data={PadsData}
          renderItem={({item}) => <PadsExploreList data={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
