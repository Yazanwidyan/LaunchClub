import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {assets, COLORS, FONTS, SHADOWS, SIZES} from '../../constants';
import CustomText from '../UI/CustomText';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ExploreLaunchpads = ({item}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        width: 200,
        height: 200,
        borderRadius: SIZES.radius,
        marginRight: 18,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
      }}
      onPress={() => navigation.navigate('LaunchpadDetails', {item: item})}>
      <Image
        resizeMode="cover"
        style={{
          width: '100%',
          height: '50%',
          borderRadius: SIZES.radius,
        }}
        source={item.logo}
      />

      <View style={{paddingTop: 10}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginRight: 10,
            }}
            source={item.image}
          />
          <View>
            <CustomText
              style={{marginBottom: 5}}
              size={SIZES.medium}
              font={FONTS.semiBold}>
              {item.name}
            </CustomText>
            <CustomText size={SIZES.base} font={FONTS.medium} grayText>
              on 3000 watchlist
            </CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreLaunchpads;

const styles = StyleSheet.create({});
