import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../constants';
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
        height: 300,
        marginBottom: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 20,
        marginHorizontal: 6,
        ...SHADOWS.dark,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
      }}
      onPress={() => navigation.navigate('IDODetails', {item: item})}>
      <Image
        resizeMode="cover"
        style={{
          width: '100%',
          height: '60%',
          borderRadius: 10,
        }}
        source={item.image}
      />
      <View style={{paddingVertical: 30, paddingHorizontal: 10}}>
        <View style={{height: 50}}>
          <CustomText size={SIZES.small} font={FONTS.bold}>
            {item.name.substring(0, 40)}
            {item.name.length > 40 ? '...' : null}
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CustomText grayText size={SIZES.small} style={{marginTop: 5}}>
            10h 30m
          </CustomText>
          <CustomText grayText size={SIZES.small} style={{marginTop: 5}}>
            <Icon name="like2" size={13} color={COLORS.gray} /> {item.likes}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IDOItem;

const styles = StyleSheet.create({});
