import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {assets, COLORS, SHADOWS, SIZES} from '../../constants';
import CustomText from '../UI/CustomText';
import IconWeb from 'react-native-vector-icons/MaterialCommunityIcons';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export const MoreLess = ({children}) => {
  const [isMore, setIsMore] = useState(false);

  return (
    <View style={{marginBottom: 20}}>
      <CustomText grayText>
        {isMore ? children : children.substr(0, 105)}
      </CustomText>
      <TouchableOpacity onPress={() => setIsMore(!isMore)}>
        <CustomText grayText>
          {' '}
          {isMore ? '- show less' : '+ show more'}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const DetailsCmp = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <View>
      <View style={{width: '100%', height: 200}}>
        <ImageBackground
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={assets.nft02}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 45,
            height: 45,
            borderRadius: 50,
            position: 'absolute',
            top: 40,
            left: 20,
            backgroundColor:
              theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ChevronIcon
            name="chevron-left"
            color={theme === 'light' ? COLORS.secondaryDark : COLORS.secondary}
            size={30}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            position: 'absolute',
            top: '60%',
            left: 20,
          }}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 100}}
            source={assets.pad01}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 80}}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <CustomText style={{marginBottom: 5}} size={SIZES.font}>
            by bluzilla
          </CustomText>
          <CustomText style={{marginBottom: 5}} size={SIZES.extraLarge}>
            BSCPAD
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'space-between',
            }}>
            <IconWeb name="web" color={'white'} size={23} />
          </View>
        </View>
        <MoreLess>
          sakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsgh
          ajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsah
        </MoreLess>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 50,
          }}>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>watchlist</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>BSC</CustomText>
            <CustomText grayText>chain</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsCmp;

const styles = StyleSheet.create({});
