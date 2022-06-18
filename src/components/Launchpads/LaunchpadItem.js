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
    <View
      style={{
        borderBottomColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        borderBottomWidth: 1,
        marginBottom: 30,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LaunchpadDetails', {item: item});
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 30,
            paddingHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText font={FONTS.semiBold} style={{marginRight: 20}}>
              {index + 1}
            </CustomText>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 20,
              }}>
              <Image
                resizeMode="cover"
                style={{width: '100%', height: '100%', borderRadius: 50}}
                source={item.image}
              />
            </View>
            <View>
              <CustomText font={FONTS.semiBold} style={{marginBottom: 5}}>
                {item.name}
              </CustomText>
              <CustomText grayText>
                <IconLike name="like2" size={13} color={COLORS.gray} />{' '}
                {item.likes}
              </CustomText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{marginHorizontal: 20}}>
              <CustomText
                font={FONTS.semiBold}
                style={{textAlign: 'right', marginBottom: 5}}>
                ${item.price}
              </CustomText>
              <CustomText size={SIZES.base} style={{textAlign: 'right'}}>
                MCap {item.mCap}
              </CustomText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LaunchpadItem;

const styles = StyleSheet.create({});
