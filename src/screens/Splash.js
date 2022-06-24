import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {assets, COLORS, FONTS, SIZES} from '../constants';
import CustomText from '../components/UI/CustomText';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TabsStack');
    }, 1500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 75, height: 75, marginBottom: 10}}
        source={assets.LaunchClubSplash}
      />
      <CustomText
        style={{color: 'white', letterSpacing: -1}}
        font={FONTS.bold}
        size={38}>
        LaunchClub
      </CustomText>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
