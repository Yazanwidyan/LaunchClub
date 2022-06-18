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
        height: 80,
      }}>
      {brand ? (
        <>
          <Image
            source={assets.badge}
            style={{
              width: 50,
              height: 30,
              resizeMode: 'contain',
              marginTop: -7,
              marginLeft: -20,
            }}
          />
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
