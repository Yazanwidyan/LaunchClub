import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, assets} from '../../constants';

const Header = ({toggleDrawer}) => {
  const {theme} = useSelector(state => state.themeReducer);
  return (
    <View
      style={{
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        padding: 20,
      }}>
      <TouchableOpacity onPress={toggleDrawer} style={{width: 25, height: 20}}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: COLORS.white,
            marginBottom: 5,
          }}></View>
        <View
          style={{
            width: 15,
            borderBottomWidth: 2,
            borderBottomColor: COLORS.white,
          }}></View>
      </TouchableOpacity>

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
