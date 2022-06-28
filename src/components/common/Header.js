import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, assets, SIZES, FONTS} from '../../constants';
import CustomText from '../UI/CustomText';

const Header = ({title, brand}) => {
  const {theme} = useSelector(state => state.theme);
  return (
    <View
      style={{
        backgroundColor: brand
          ? theme == 'light'
            ? COLORS.secondary
            : COLORS.secondaryDark
          : theme == 'light'
          ? COLORS.background
          : COLORS.backgroundDark,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 16,
        height: 80,
      }}>
      {brand ? (
        <>
          <Image
            source={assets.LaunchClublogo}
            style={{
              resizeMode: 'contain',
              width: 33,
              height: 33,
              marginHorizontal: 5,
              marginTop: -5,
            }}
          />
          <CustomText
            style={{
              letterSpacing: -0.4,
            }}
            font={FONTS.bold}
            size={23}>
            {title}
          </CustomText>
        </>
      ) : (
        <CustomText font={FONTS.bold} size={SIZES.large}>
          {title}
        </CustomText>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
