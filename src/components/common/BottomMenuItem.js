import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../constants';
import CustomText from '../UI/CustomText';
import Icon from 'react-native-vector-icons/Ionicons';

export const BottomMenuItem = ({iconName, isCurrent}) => {
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        name="home-outline"
        size={26}
        color={isCurrent ? COLORS.white : COLORS.gray}
      />
      <CustomText>{iconName}</CustomText>
    </View>
  );
};
