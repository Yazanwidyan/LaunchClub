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
        marginBottom: 30,
        borderRadius: SIZES.radius,
      }}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('LaunchpadDetails', {item: item});
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginRight: 12,
            padding: 2,
            backgroundColor: theme == 'light' ? COLORS.background : '#24242F',
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
          <CustomText font={FONTS.medium} size={SIZES.regular} grayText>
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
            font={FONTS.semiBold}
            size={SIZES.medium}
            style={{textAlign: 'right', marginBottom: 4}}>
            ${item.price}
          </CustomText>
          <CustomText
            grayText
            font={FONTS.medium}
            size={SIZES.small}
            style={{textAlign: 'right'}}>
            MCap {item.mCap}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LaunchpadItem;

const styles = StyleSheet.create({});
