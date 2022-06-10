import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
        <View style={styles.mainContainer}>
          <View style={{flex: 1, backgroundColor: 'red', paddingBottom: 20}}>
            <CustomText size={SIZES.large}>ExploreLaunchpads</CustomText>
            <HomeFlatList dataType="launchpad" data={PadsData} />
          </View>
          <View style={{flex: 2}}>
            <CustomText size={SIZES.large}>Top IDOs</CustomText>
            <HomeFlatList dataType="ido" data={IDOData} />
          </View>
          <View style={{flex: 2}}>
            <CustomText size={SIZES.large}>New Projects</CustomText>
            <HomeFlatList dataType="ido" data={IDOData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flex: 1,
  },
});
