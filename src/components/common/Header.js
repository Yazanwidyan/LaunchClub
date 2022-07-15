import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, assets, SIZES, FONTS} from '../../constants';
import CustomText from '../UI/CustomText';
import Icon from '../UI/Icon';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  const {theme} = useSelector(state => state.theme);
  return (
    <View
      style={{
        backgroundColor:
          theme == 'light' ? COLORS.background : COLORS.secondaryDark,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: SIZES.padding,
        height: 80,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={assets.LaunchClublogo}
          style={{
            resizeMode: 'contain',
            width: 29,
            height: 29,
            marginHorizontal: 5,
          }}
        />
        <CustomText
          style={{
            letterSpacing: -1,
          }}
          font={FONTS.bold}
          size={21}>
          {title}
        </CustomText>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon
            library={'Ionicons'}
            nameIcon={'person-outline'}
            colorIcon={theme == 'light' ? COLORS.black : COLORS.white}
            sizeIcon={23}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Gems')}
          style={{marginHorizontal: 10}}>
          <Icon
            library={'Ionicons'}
            nameIcon={'trophy-outline'}
            colorIcon={theme == 'light' ? COLORS.black : COLORS.white}
            sizeIcon={23}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon
            library={'Ionicons'}
            nameIcon={'notifications-outline'}
            colorIcon={theme == 'light' ? COLORS.black : COLORS.white}
            sizeIcon={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
