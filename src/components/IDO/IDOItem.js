import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants';
import {useSelector} from 'react-redux';
import CustomText from '../UI/CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const IDOItem = ({item}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        width: SIZES.width / 2.4,
        height: 200,
        marginBottom: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        borderRadius: 10,
        padding: 7,
        paddingTop: 14,
        marginHorizontal: 15,
        ...SHADOWS.dark,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
      }}
      onPress={() => navigation.navigate('IDODetails', {item: item})}>
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
          backgroundColor:
            theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          ...SHADOWS.dark,
          alignItems: 'center',
        }}>
        <CustomText size={SIZES.xSmall}> Ending in </CustomText>
        <CustomText size={SIZES.base}> 12h 30m </CustomText>
      </View>
      <View style={{paddingVertical: 25, paddingHorizontal: 5}}>
        <CustomText size={SIZES.medium}>
          {item.name.substring(0, 14)}
          {item.name.length > 15 ? '...' : null}
        </CustomText>
        <CustomText grayText size={SIZES.small} style={{marginTop: 5}}>
          <Icon name="like2" size={13} color={COLORS.gray} /> {item.likes}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default IDOItem;

const styles = StyleSheet.create({});
