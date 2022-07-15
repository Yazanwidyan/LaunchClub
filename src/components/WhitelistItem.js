import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from './UI/CustomText';
import {COLORS, FONTS, SIZES} from './../constants';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from './UI/Icon';

const WhitelistItem = ({item, index}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: SIZES.radius,
      }}
      activeOpacity={0.7}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginRight: 12,
            padding: 2,
            backgroundColor: theme == 'light' ? COLORS.background : '#24242F',
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 50,
            }}
            source={item.image}
          />
        </View>
        <View>
          <CustomText
            style={{marginBottom: 4}}
            font={FONTS.medium}
            size={SIZES.medium}>
            {item.name}
          </CustomText>
          <CustomText font={FONTS.medium} size={SIZES.regular} grayText>
            {item.status}
          </CustomText>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Icon
          library="MaterialCommunityIcons"
          nameIcon="arrow-top-right-bold-box-outline"
          colorIcon={COLORS.gray}
          sizeIcon={30}
        />
        <CustomText
          grayText
          font={FONTS.medium}
          size={SIZES.small}
          style={{textAlign: 'right'}}>
          {item.launchpad}
        </CustomText>
      </View>
    </View>
  );
};

export default WhitelistItem;

const styles = StyleSheet.create({});
