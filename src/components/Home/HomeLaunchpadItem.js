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
        width: 140,
        height: 185,
        marginBottom: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        borderRadius: SIZES.radius,
        marginHorizontal: 6,
        ...SHADOWS.dark,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
      }}
      onPress={() => navigation.navigate('LaunchpadDetails', {item: item})}>
      <Image
        resizeMode="cover"
        style={{
          width: '100%',
          height: '55%',
          borderRadius: SIZES.radius,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        source={item.logo}
      />

      <View style={{padding: 12, paddingTop: 40}}>
        <Image
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
            top: -26,
            right: '39%',
            position: 'absolute',
            borderRadius: 100,
          }}
          source={item.image}
        />
        <View style={{alignItems: 'center'}}>
          <CustomText size={SIZES.medium} font={FONTS.regular}>
            {item.name}
          </CustomText>
        </View>
        <View
          style={{
            paddingTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}></View>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreLaunchpads;

const styles = StyleSheet.create({});
