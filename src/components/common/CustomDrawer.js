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
import {setTheme} from '../../redux/actions/actions';
import {COLORS} from '../../constants/theme';

const CustomDrawer = props => {
  const {theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme == 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor:
            theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
          flex: 1,
        }}>
        <TouchableOpacity onPress={changeTheme}>
          <Text style={{color: theme == 'light' ? 'black' : 'white'}}>
            Change theme {theme == 'light' ? 'dark' : 'light'}
          </Text>
        </TouchableOpacity>
        <DrawerItem label={'sss'}></DrawerItem>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
