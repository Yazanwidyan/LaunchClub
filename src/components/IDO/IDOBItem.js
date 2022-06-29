import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../constants';
import {useSelector} from 'react-redux';
import CustomText from '../UI/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const IDOBItem = ({item}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        borderRadius: SIZES.radius,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
      }}
      onPress={() => navigation.navigate('IDODetails', {item: item})}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 50,
            height: 50,
            marginRight: 12,
            borderRadius: SIZES.radius,
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: SIZES.radius,
            }}
            source={item.image}
          />
        </View>
        <View>
          <CustomText font={FONTS.regular} size={SIZES.regular} grayText>
            on 4,595 watchlist
          </CustomText>
          <CustomText
            style={{marginVertical: 2}}
            font={FONTS.regular}
            size={SIZES.small}>
            {item.name.substring(0, 35)}
            {item.name.length > 35 ? '...' : null}
          </CustomText>
          <CustomText font={FONTS.regular} size={SIZES.regular} grayText>
            Ending in 10h 30m
          </CustomText>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <CustomText
          font={FONTS.regular}
          size={SIZES.medium}
          style={{
            backgroundColor: '#DBEAFE',
            paddingHorizontal: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
            marginBottom: 8,
            textAlign: 'right',
            alignSelf: 'flex-end',
            color: COLORS.primary,
          }}>
          Likes
        </CustomText>
        <CustomText
          grayText
          size={SIZES.medium}
          font={FONTS.bold}
          style={{textAlign: 'right'}}>
          {item.likes}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default IDOBItem;

const styles = StyleSheet.create({});
