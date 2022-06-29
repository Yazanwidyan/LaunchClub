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
      activeOpacity={0.7}
      style={{
        width: 181,
        height: 250,
        marginBottom: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        borderRadius: SIZES.radius,
        marginHorizontal: 6,
        ...SHADOWS.dark,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
      }}
      onPress={() => navigation.navigate('IDODetails', {item: item})}>
      <Image
        resizeMode="cover"
        style={{
          width: '100%',
          height: '55%',
          borderRadius: SIZES.radius,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        source={item.image}
      />
      <View style={{padding: 12}}>
        <CustomText grayText size={SIZES.small} font={FONTS.regular}>
          {item.name.substring(0, 20)}
          {item.name.length > 20 ? '...' : null}
        </CustomText>
        <CustomText size={SIZES.medium} font={FONTS.regular}>
          Likes {item.likes}
        </CustomText>
        <View
          style={{
            paddingTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <CustomText grayText size={SIZES.regular}>
              Ending in
            </CustomText>
            <CustomText size={SIZES.medium}>10h 30m</CustomText>
          </View>
          <CustomText style={{alignSelf: 'flex-end'}} size={SIZES.small}>
            <Icon name="heart" size={13} color={COLORS.gray} /> 3,229
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IDOItem;

const styles = StyleSheet.create({});
