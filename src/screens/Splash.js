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
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image style={{width: 85, height: 85}} source={assets.LaunchClubSplash} />
      <CustomText style={{color: 'white'}} font={FONTS.bold} size={38}>
        LaunchClub
      </CustomText>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
