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
  const navigation = useNavigation();

  useEffect(() => {
    const color = theme == 'light' ? '#ffffff' : '#191B1E';
    changeNavigationBarColor(color, true);
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header brand title={'LaunchClub'} />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <Carousel />
            <View style={{paddingHorizontal: SIZES.padding}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Gems')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 15,
                  marginVertical: 20,
                  borderRadius: SIZES.radius,
                  backgroundColor:
                    theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
                }}>
                <View>
                  <CustomText
                    size={SIZES.small}
                    style={{color: COLORS.gray, marginBottom: 5}}>
                    LaunchClub Gems
                  </CustomText>
                  <CustomText font={FONTS.bold} size={SIZES.medium}>
                    Your total Gems 0
                  </CustomText>
                  <CustomText size={SIZES.base}>
                    Collect more LaunchClub Gems here
                  </CustomText>
                </View>
                <ChevronIcon
                  name="chevron-right"
                  color={COLORS.gray}
                  size={30}
                />
              </TouchableOpacity>
            </View>

            <View>
              <CustomText
                size={SIZES.large}
                font={FONTS.bold}
                style={styles.titleText}>
                Most Liked Launchpads
              </CustomText>
              <HomeFlatList dataType="launchpad" data={PadsData} />
            </View>
            <View>
              <CustomText
                size={SIZES.large}
                font={FONTS.bold}
                style={styles.titleText}>
                Top IDOs
              </CustomText>
              <HomeFlatList dataType="ido" data={IDOData} />
            </View>
            <View>
              <CustomText
                size={SIZES.large}
                font={FONTS.bold}
                style={styles.titleText}>
                New Projects
              </CustomText>
              <HomeFlatList dataType="ido" data={IDOData} />
            </View>
            <View>
              <CustomText
                size={SIZES.large}
                font={FONTS.bold}
                style={styles.titleText}>
                Author's Choice
              </CustomText>
              <HomeFlatList dataType="ido" data={IDOData} />
            </View>
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
  titleText: {paddingHorizontal: SIZES.padding, marginTop: 5},
});
