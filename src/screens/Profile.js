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
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {useNavigation} from '@react-navigation/native';

const OptionsCard = ({icon, name, path}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(path)}
      style={{
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icon == 'diamond' ? (
          <DiamondIcon
            name={icon}
            color={theme === 'light' ? COLORS.secondaryDark : COLORS.secondary}
            size={17}
          />
        ) : (
          <Icon
            name={icon}
            color={theme === 'light' ? COLORS.secondaryDark : COLORS.secondary}
            size={19}
          />
        )}
        <CustomText style={{marginHorizontal: 30}} size={SIZES.medium}>
          {name}
        </CustomText>
      </View>
      <ChevronIcon
        style={{marginTop: -5}}
        name="chevron-right"
        color={theme === 'light' ? COLORS.secondaryDark : COLORS.secondary}
        size={22}
      />
    </TouchableOpacity>
  );
};

const Profile = () => {
  const {theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme == 'light') {
      dispatch(setTheme('dark'));
      changeNavigationBarColor('#191B1E', true);
    } else {
      dispatch(setTheme('light'));
      changeNavigationBarColor('#ffffff', true);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginHorizontal: SIZES.padding, marginBottom: 40}}>
        <Header title="Profile" />
        <View style={{alignItems: 'center'}}>
          <Image
            source={assets.person01}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              borderRadius: 50,
              marginVertical: 20,
            }}
          />
          <CustomText size={SIZES.large}>Farion Wick</CustomText>
          <CustomText grayText>FarionWick@gmail.com</CustomText>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{marginBottom: 50}}
            onPress={changeTheme}>
            <Text style={{color: theme == 'light' ? 'black' : 'white'}}>
              Change theme {theme == 'light' ? 'dark' : 'light'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <CustomText
            style={{paddingBottom: 32}}
            size={SIZES.large}
            font={FONTS.bold}>
            Account
          </CustomText>
          <View
            style={{
              borderRadius: SIZES.radius,
              marginBottom: 10,
              backgroundColor:
                theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <OptionsCard
              path="Account"
              name="Account Information"
              icon="diamond"
            />
            <OptionsCard path="Gems" name="Collect Gems" icon="diamond" />
            <OptionsCard
              path="Notifications"
              name="Notifications"
              icon="diamond"
            />
          </View>
          <CustomText
            style={{paddingVertical: 32}}
            size={SIZES.large}
            font={FONTS.bold}>
            Privacy
          </CustomText>
          <View
            style={{
              borderRadius: SIZES.radius,
              marginBottom: 30,
              backgroundColor:
                theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <OptionsCard
              path="ChangePassword"
              name="Change Password"
              icon="logout"
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            borderRadius: SIZES.radius,
            marginBottom: 40,
          }}>
          <CustomText size={SIZES.bold} font={FONTS.bold}>
            Logout
          </CustomText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
