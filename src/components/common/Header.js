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
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 20,
        height: 90,
      }}>
      {brand ? (
        <>
          <View
            style={{
              width: 31,
              height: 31,
              backgroundColor: COLORS.primary,
              borderRadius: 40,
              marginHorizontal: 10,
              marginTop: -5,
            }}>
            <Image
              source={assets.logo}
              style={{
                width: 112,
                height: 112,
                marginTop: -38,
                marginLeft: -43,
              }}
            />
          </View>
          <CustomText font={FONTS.bold} size={SIZES.extraLarge}>
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
