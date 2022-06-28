import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {assets, COLORS, FONTS, SIZES} from '../constants';
import CustomText from '../components/UI/CustomText';
import NavigationBar from 'react-native-navbar-color';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    NavigationBar.setColor('#ffab8e');
    setTimeout(() => {
      navigation.replace('TabsStack');
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
        style={{width: 130, height: 130, marginBottom: 10}}
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
