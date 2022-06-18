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

const Home = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header brand title={'LaunchClub'} />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={{flex: 1}}>
              <CustomText
                size={SIZES.large}
                font={FONTS.bold}
                style={styles.titleText}>
                Explore Launchpads
              </CustomText>
              <HomeFlatList dataType="launchpad" data={PadsData} />
            </View>
            <View style={{flex: 2}}>
              <CustomText
                size={SIZES.large}
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
                size={SIZES.large}
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
    marginTop: 10,
  },
  titleText: {paddingHorizontal: 20},
});
