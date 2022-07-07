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
        marginBottom: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
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
      <View style={{paddingTop: 12}}>
        <CustomText size={SIZES.small} font={FONTS.regular}>
          {item.name.substring(0, 20)}
          {item.name.length > 20 ? '...' : null}
        </CustomText>
        <View
          style={{
            paddingTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <CustomText
              style={{marginBottom: 3}}
              grayText
              size={SIZES.regular}
              font={FONTS.regular}>
              Ending in
            </CustomText>
            <CustomText size={SIZES.medium} font={FONTS.medium}>
              <Icon
                library={'AntDesign'}
                nameIcon="clockcircleo"
                sizeIcon={12}
                color={theme == 'light' ? COLORS.black : COLORS.white}
              />{' '}
              10h 30m
            </CustomText>
          </View>
          <CustomText
            style={{alignSelf: 'flex-end'}}
            size={SIZES.small}
            font={FONTS.medium}>
            <Icon
              library={'FontAwesome'}
              nameIcon="heart-o"
              sizeIcon={12}
              color={theme == 'light' ? COLORS.black : COLORS.white}
            />{' '}
            3,229
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IDOItem;

const styles = StyleSheet.create({});
