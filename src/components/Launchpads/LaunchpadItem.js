import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomText from '../UI/CustomText';
import {COLORS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import IconLike from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';

const LaunchpadItem = ({item, index}) => {
  const {theme} = useSelector(state => state.themeReducer);

  return (
    <View
      style={{
        borderBottomColor: theme == 'light' ? COLORS.line : COLORS.lineDark,
        borderBottomWidth: 1,
        marginBottom: 30,
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
          <CustomText style={{marginRight: 20}}>{index + 1}</CustomText>
          <View
            style={{width: 50, height: 50, borderRadius: 50, marginRight: 20}}>
            <Image
              resizeMode="cover"
              style={{width: '100%', height: '100%', borderRadius: 50}}
              source={item.image}
            />
          </View>
          <View>
            <CustomText style={{marginBottom: 5}}>{item.name}</CustomText>
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
            <CustomText style={{textAlign: 'right', marginBottom: 5}}>
              ${item.price}
            </CustomText>
            <CustomText size={SIZES.base} style={{textAlign: 'right'}}>
              MCap {item.mCap}
            </CustomText>
          </View>
          <Icon name="ios-heart-outline" color={'white'} size={23} />
        </View>
      </View>
    </View>
  );
};

export default LaunchpadItem;

const styles = StyleSheet.create({});
