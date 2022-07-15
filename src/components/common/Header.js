import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, assets, SIZES, FONTS} from '../../constants';
import CustomText from '../UI/CustomText';
import Icon from '../UI/Icon';

const Header = ({title}) => {
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
        <View style={{marginHorizontal: 10}}>
          <Icon
            library={'Ionicons'}
            nameIcon={'trophy-outline'}
            colorIcon={theme == 'light' ? COLORS.black : COLORS.white}
            sizeIcon={23}
          />
        </View>
        <View>
          <Icon
            library={'Ionicons'}
            nameIcon={'notifications-outline'}
            colorIcon={theme == 'light' ? COLORS.black : COLORS.white}
            sizeIcon={25}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
