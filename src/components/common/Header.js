import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, assets, SIZES} from '../../constants';
import CustomText from '../UI/CustomText';

const Header = ({toggleDrawer, title}) => {
  const {theme} = useSelector(state => state.themeReducer);
  return (
    <View
      style={{
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        flexDirection: 'row',
        justifyContent: title ? 'center' : 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        height: 60,
      }}>
      {toggleDrawer && (
        <TouchableOpacity onPress={toggleDrawer}>
          <View
            style={{
              borderBottomWidth: 3,
              width: 30,
              borderBottomColor:
                theme === 'light' ? COLORS.black : COLORS.white,
              marginBottom: 5,
            }}></View>
          <View
            style={{
              width: 20,
              borderBottomWidth: 3,
              borderBottomColor:
                theme === 'light' ? COLORS.black : COLORS.white,
            }}></View>
        </TouchableOpacity>
      )}
      {title && <CustomText size={SIZES.large}>{title}</CustomText>}

      {/* <View style={{width: 45, height: 45}}>
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
        </View> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
