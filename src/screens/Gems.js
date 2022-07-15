import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import {assets, COLORS, FONTS, SIZES} from '../constants';
import CustomText from '../components/UI/CustomText';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../redux/actions/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import DiamondIcon from 'react-native-vector-icons/FontAwesome';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from '../components/UI/Divider';
import {useNavigation} from '@react-navigation/native';

const days = [
  {day: 1, points: 10},
  {day: 2, points: 10},
  {day: 3, points: 10},
  {day: 4, points: 20},
];
const days2 = [
  {day: 5, points: 20},
  {day: 6, points: 20},
  {day: 7, points: 50},
];

const Gems = () => {
  const {theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, marginTop: 10}}>
      <ScrollView style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              left: 17,
              top: 38,
              zIndex: 500,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              borderRadius: 50,
              borderColor: COLORS.gray,
              backgroundColor:
                theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <ChevronIcon name="chevron-left" color={COLORS.gray} size={35} />
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: SIZES.padding, marginTop: 50}}>
          <CustomText
            size={SIZES.extraLarge}
            font={FONTS.bold}
            style={{alignSelf: 'center'}}>
            Daily Check-In Rewards
          </CustomText>
          <CustomText
            font={FONTS.medium}
            size={SIZES.medium}
            style={{alignSelf: 'center'}}>
            Come back everyday to earn extra reward coins
          </CustomText>
          <View
            style={{
              marginTop: 20,
              alignSelf: 'center',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
            }}>
            <CustomText
              style={{color: 'white'}}
              size={SIZES.medium}
              font={FONTS.semiBold}>
              Current Gems
            </CustomText>
            <CustomText style={{color: 'white'}} size={50} font={FONTS.bold}>
              0
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {days.map(({day, points}) => {
              return (
                <View
                  key={day}
                  style={{
                    marginVertical: 10,
                    height: 150,
                    width: 90,
                    padding: 10,
                    marginRight: 5,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor:
                      theme == 'light'
                        ? COLORS.secondary
                        : COLORS.secondaryDark,
                  }}>
                  <CustomText>Day {day}</CustomText>
                  <Image
                    source={assets.gem}
                    style={{width: 30, height: 30, borderRadius: 50}}
                  />
                  <CustomText>+ {points}</CustomText>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {days2.map(({day, points}) => {
              return (
                <View
                  key={day}
                  style={{
                    marginVertical: 10,
                    height: 150,
                    width: 90,
                    padding: 10,
                    marginRight: 5,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor:
                      theme == 'light'
                        ? COLORS.secondary
                        : COLORS.secondaryDark,
                  }}>
                  <CustomText>Day {day}</CustomText>
                  <Image
                    source={assets.gem}
                    style={{width: 30, height: 30, borderRadius: 50}}
                  />
                  <CustomText>+ {points}</CustomText>
                </View>
              );
            })}
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              marginTop: 20,
              alignSelf: 'center',
              height: 60,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}>
            <CustomText font={FONTS.bold} size={SIZES.bold}>
              Claim coins
            </CustomText>
          </TouchableOpacity>
          <CustomText style={{marginVertical: 20}}>
            Collect LaunchClub Gems to get a chance in free IDO spot
          </CustomText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gems;

const styles = StyleSheet.create({});
