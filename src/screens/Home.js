import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import Header from '../components/common/Header';
import {assets, IDOData, PadsData} from '../constants';
import HomeFlatList from '../components/Home/HomeFlatList';
import CustomText from '../components/UI/CustomText';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from '../components/UI/Carousel';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Home = () => {
  const {theme} = useSelector(state => state.theme);

  useEffect(() => {
    const color = theme == 'light' ? '#ffffff' : '#14141B';
    changeNavigationBarColor(color, true);
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1, marginTop: 10}}>
        <Header title={'LaunchClub'} />
        <ScrollView
          style={{flex: 1, marginBottom: 50}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={{marginBottom: 20}}>
              <Carousel />
            </View>
            <CustomText
              size={SIZES.large}
              font={FONTS.bold}
              style={styles.titleText}>
              Most Liked Launchpads
            </CustomText>
            <HomeFlatList dataType="launchpad" data={PadsData} />
            <CustomText
              size={SIZES.large}
              font={FONTS.bold}
              style={styles.titleText}>
              Top IDOs
            </CustomText>
            <HomeFlatList dataType="ido" data={IDOData} />
            <CustomText
              size={SIZES.large}
              font={FONTS.bold}
              style={styles.titleText}>
              New Projects
            </CustomText>
            <HomeFlatList dataType="ido" data={IDOData} />
            <CustomText
              size={SIZES.large}
              font={FONTS.bold}
              style={styles.titleText}>
              Author's Choice
            </CustomText>
            <HomeFlatList dataType="ido" data={IDOData} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleText: {paddingHorizontal: SIZES.padding, marginVertical: 10},
});
