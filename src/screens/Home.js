import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, SIZES} from '../constants/theme';
import Header from '../components/common/Header';
import {IDOData, PadsData} from '../constants';
import HomeFlatList from '../components/Home/HomeFlatList';
import CustomText from '../components/UI/CustomText';

const Home = ({navigation}) => {
  const navigate = useNavigation();
  const {theme} = useSelector(state => state.themeReducer);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header toggleDrawer={() => navigation.toggleDrawer()} />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={{flex: 1}}>
              <CustomText size={SIZES.large} style={styles.titleText}>
                Explore Launchpads
              </CustomText>
              <HomeFlatList dataType="launchpad" data={PadsData} />
            </View>
            <View style={{flex: 2}}>
              <CustomText size={SIZES.large} style={styles.titleText}>
                Top IDOs
              </CustomText>
              <HomeFlatList dataType="ido" data={IDOData} />
            </View>
            <View style={{flex: 2}}>
              <CustomText size={SIZES.large} style={styles.titleText}>
                New Projects
              </CustomText>
              <HomeFlatList dataType="ido" data={IDOData} />
            </View>
            <View style={{flex: 2}}>
              <CustomText size={SIZES.large} style={styles.titleText}>
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
    marginTop: 10,
  },
  titleText: {paddingHorizontal: 20},
});
