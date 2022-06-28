import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../UI/CustomText';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../../redux/actions/actions';
import {COLORS, SIZES} from '../../constants/theme';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const DrawerCustomItem = ({name, icon, route}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate(route);
      }}
      style={{flexDirection: 'row', paddingVertical: 20}}>
      <HeartIcon
        name={icon}
        size={20}
        color={theme === 'light' ? COLORS.secondaryDark : COLORS.secondary}
      />
      <CustomText style={{marginHorizontal: 20}} size={SIZES.large}>
        {name}
      </CustomText>
    </TouchableOpacity>
  );
};

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
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
      }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor:
            theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
          flex: 1,
        }}>
        <View style={{flex: 5}}>
          <View style={{marginVertical: 30}}>
            <CustomText size={SIZES.extraLarge}>Farion Wick</CustomText>
            <CustomText grayText>farionwick@gmail.com</CustomText>
          </View>
          <DrawerCustomItem
            route="Watchlist"
            name="Watchlist"
            icon="ios-heart-outline"
          />
          <DrawerCustomItem name="Profile" icon="ios-heart-outline" />
          <DrawerCustomItem name="Contact Us" icon="ios-heart-outline" />
          <DrawerCustomItem name="Settings" icon="ios-heart-outline" />
          <DrawerCustomItem name="Helps & FAQs" icon="ios-heart-outline" />
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={changeTheme} activeOpacity={0.7}>
            <Text style={{color: theme == 'light' ? 'black' : 'white'}}>
              Change theme {theme == 'light' ? 'dark' : 'light'}
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
