import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, assets, SIZES} from '../../constants';
import CustomText from '../UI/CustomText';

const Header = ({toggleDrawer, title}) => {
  const {theme} = useSelector(state => state.theme);
  return (
    <View
      style={{
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        flexDirection: 'row',
        justifyContent: title && toggleDrawer ? 'space-between' : 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        height: 90,
      }}>
      {toggleDrawer && (
        <TouchableOpacity style={{marginRight: -17}} onPress={toggleDrawer}>
          <View style={{flexDirection: 'row'}}>
            <CustomText style={{marginRight: 5}} size={5}>
              {theme == 'light' ? '⚫' : '⚪'}
            </CustomText>
            <CustomText size={5}>{theme == 'light' ? '⚫' : '⚪'} </CustomText>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <CustomText style={{marginRight: 5}} size={5}>
              {theme == 'light' ? '⚫' : '⚪'}
            </CustomText>
            <CustomText size={5}>{theme == 'light' ? '⚫' : '⚪'} </CustomText>
          </View>
        </TouchableOpacity>
      )}
      {title && <CustomText size={SIZES.large}>{title}</CustomText>}
      {title && toggleDrawer && <CustomText></CustomText>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
