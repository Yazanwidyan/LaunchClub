import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../UI/CustomText';
import {COLORS, FONTS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import IconLike from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const LaunchpadItem = ({item, index}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        borderRadius: SIZES.radius,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
      }}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('LaunchpadDetails', {item: item});
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CustomText grayText font={FONTS.medium} size={SIZES.medium}>
          {index + 1}
        </CustomText>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginHorizontal: 12,
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 50,
            }}
            source={item.image}
          />
        </View>
        <View>
          <CustomText
            style={{marginBottom: 4}}
            font={FONTS.medium}
            size={SIZES.medium}>
            {item.name}
          </CustomText>
          <CustomText font={FONTS.regular} size={SIZES.regular} grayText>
            Likes {item.likes}
          </CustomText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <CustomText
            font={FONTS.bold}
            size={SIZES.bold}
            style={{textAlign: 'right', marginBottom: 4}}>
            ${item.price}
          </CustomText>
          <CustomText grayText size={SIZES.small} style={{textAlign: 'right'}}>
            MCap {item.mCap}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LaunchpadItem;

const styles = StyleSheet.create({});
