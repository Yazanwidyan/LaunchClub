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
import {assets, COLORS, SIZES} from '../constants';
import CustomText from '../components/UI/CustomText';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../redux/actions/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import DiamondIcon from 'react-native-vector-icons/FontAwesome';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from '../components/UI/Divider';
import {useNavigation} from '@react-navigation/native';

const OptionsCard = ({icon, name, path}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(path)}
      style={{
        padding: 20,
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
        <CustomText style={{marginHorizontal: 30}} size={SIZES.large}>
          {name}
        </CustomText>
      </View>
      <ChevronIcon
        name="chevron-right"
        color={theme === 'light' ? COLORS.secondaryDark : COLORS.secondary}
        size={30}
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
    } else {
      dispatch(setTheme('light'));
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Header title="Profile" />
        <View style={{alignItems: 'center'}}>
          <Image
            source={assets.nft01}
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
          <TouchableOpacity style={{marginBottom: 50}} onPress={changeTheme}>
            <Text style={{color: theme == 'light' ? 'black' : 'white'}}>
              Change theme {theme == 'light' ? 'dark' : 'light'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              borderRadius: 15,
              marginBottom: 10,
              backgroundColor:
                theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <OptionsCard path="Watchlist" name="Watchlist" icon="hearto" />
            <Divider />
            <OptionsCard path="Gems" name="Collect Gems" icon="diamond" />
          </View>

          <View
            style={{
              marginHorizontal: 20,
              borderRadius: 15,
              marginBottom: 10,
              backgroundColor:
                theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <OptionsCard path="ContactUs" name="Contact Us" icon="mail" />
            <Divider />
            <OptionsCard
              path="FAQ"
              name="Helps & FAQs"
              icon="questioncircleo"
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              borderRadius: 15,
              marginBottom: 10,
              backgroundColor:
                theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <OptionsCard path="logout" name="Logout" icon="logout" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
