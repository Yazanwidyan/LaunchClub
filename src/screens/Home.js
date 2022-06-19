import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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

const Home = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header brand title={'LaunchClub'} />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <Carousel />
            <View style={{paddingHorizontal: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Gems')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 20,
                  marginVertical: 20,
                  borderRadius: 10,
                  backgroundColor:
                    theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
                }}>
                <View>
                  <CustomText style={{color: COLORS.primary}}>
                    LaunchClub Gems
                  </CustomText>
                  <CustomText font={FONTS.bold} size={SIZES.large}>
                    Your total Gems 0
                  </CustomText>
                  <CustomText>Collect more LaunchClub Gems here</CustomText>
                </View>
                <ChevronIcon
                  name="chevron-right"
                  color={COLORS.gray}
                  size={30}
                />
              </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
              <CustomText
                size={SIZES.medium}
                font={FONTS.bold}
                style={styles.titleText}>
                Explore Launchpads
              </CustomText>
              <HomeFlatList dataType="launchpad" data={PadsData} />
            </View>
            <View style={{flex: 2}}>
              <CustomText
                size={SIZES.medium}
                font={FONTS.bold}
                style={styles.titleText}>
                Top IDOs
              </CustomText>
              <View style={{marginLeft: -10}}>
                <HomeFlatList dataType="ido" data={IDOData} />
              </View>
            </View>
            <View style={{flex: 2}}>
              <CustomText
                size={SIZES.medium}
                font={FONTS.bold}
                style={styles.titleText}>
                New Projects
              </CustomText>
              <View style={{marginLeft: -10}}>
                <HomeFlatList dataType="ido" data={IDOData} />
              </View>
            </View>
            <View style={{flex: 2}}>
              <CustomText
                size={SIZES.large}
                font={FONTS.bold}
                style={styles.titleText}>
                Author's Choice
              </CustomText>
              <View style={{marginLeft: -10}}>
                <HomeFlatList dataType="ido" data={IDOData} />
              </View>
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
  titleText: {paddingHorizontal: 20},
});
