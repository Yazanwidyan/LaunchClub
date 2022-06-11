import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants';
import {useSelector} from 'react-redux';
import CustomText from '../UI/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';

const IDOItem = ({item, twoCol}) => {
  const {theme} = useSelector(state => state.theme);

  return (
    <View
      style={{
        width: twoCol ? '48%' : 190,
        height: 200,
        marginBottom: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        borderRadius: 10,
        padding: 7,
        paddingTop: 14,
        marginRight: 12,
        ...SHADOWS.dark,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
      }}>
      <Image
        resizeMode="cover"
        style={{
          width: '100%',
          height: '60%',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        source={item.image}
      />
      <View
        style={{
          position: 'absolute',
          right: 10,
          top: '57%',
          backgroundColor: theme == 'light' ? COLORS.white : COLORS.black100,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          ...SHADOWS.dark,
          alignItems: 'center',
        }}>
        <CustomText size={SIZES.xSmall}> Ending in </CustomText>
        <CustomText size={SIZES.base}> 12h 30m </CustomText>
      </View>
      <View style={{paddingVertical: 20, paddingHorizontal: 5}}>
        <CustomText size={SIZES.medium}>
          {item.name.substring(0, 18)}
          {item.name.length > 17 ? '...' : null}
        </CustomText>
        <CustomText grayText size={SIZES.small} style={{marginTop: 5}}>
          <Icon name="like2" size={13} color={COLORS.gray} /> {item.likes}
        </CustomText>
      </View>
    </View>
  );
};

export default IDOItem;

const styles = StyleSheet.create({});
