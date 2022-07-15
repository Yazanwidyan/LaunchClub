import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../constants';
import {useSelector} from 'react-redux';
import CustomText from '../UI/CustomText';
import {useNavigation} from '@react-navigation/native';
import Icon from '../UI/Icon';

const IDOItem = ({wideWidth, item}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();
  const totalWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        width: wideWidth ? totalWidth * 0.44 : 150,
        height: 240,
        borderRadius: SIZES.radius,
        marginRight: wideWidth ? 8 : 18,
        marginLeft: wideWidth ? 8 : 0,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
      }}
      onPress={() => navigation.navigate('IDODetails', {item: item})}>
      <Image
        resizeMode="cover"
        style={{
          width: '100%',
          height: '55%',
          borderRadius: SIZES.radius,
        }}
        source={item.image}
      />
      <View style={{paddingTop: 12, paddingHorizontal: 5}}>
        <CustomText size={SIZES.medium} font={FONTS.semiBold}>
          {item.name.substring(0, 15)}
          {item.name.length > 15 ? '...' : null}
        </CustomText>
        <View
          style={{
            paddingTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <CustomText grayText size={SIZES.regular} font={FONTS.medium}>
              13D : 03h : 25m : 45s
            </CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IDOItem;

const styles = StyleSheet.create({});
