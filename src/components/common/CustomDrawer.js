import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../../constants/theme';

const CustomDrawer = props => {
  const {theme} = useSelector(state => state.themeReducer);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor:
            theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
          flex: 1,
        }}>
        <DrawerItem label={'sss'}></DrawerItem>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
