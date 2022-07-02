import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import CustomText from '../components/UI/CustomText';
import Header from '../components/common/Header';
import {COLORS, FONTS, IDOData, PadsData, SIZES} from '../constants';
import LaunchpadItem from '../components/Launchpads/LaunchpadItem';
import IDOItem from '../components/IDO/IDOItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from '../components/UI/CustomTextInput';

const Watchlist = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'launchpads', title: 'Launchpads'},
    {key: 'idos', title: 'IDOs'},
  ]);

  const {theme} = useSelector(state => state.theme);
  const watchlist = useSelector(state => state.watchlist);

  const layout = useWindowDimensions();

  const FirstRoute = () => {
    const list1 = watchlist.filter(item => item.category == 'launchpads');
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText size={SIZES.medium}>Recent activity</CustomText>
            <Icon
              style={{marginTop: -3, marginHorizontal: 2}}
              name="arrow-drop-down"
              color={
                theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
              }
              size={20}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                marginRight: 5,
                padding: 7,
              }}>
              <Icon
                style={{marginTop: -3, marginHorizontal: 2}}
                name="search"
                color={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: COLORS.secondaryDark,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 7,
                borderRadius: 3,
              }}>
              <Icon
                style={{marginTop: -3, marginHorizontal: 2}}
                name="filter-list"
                color={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                size={18}
              />
              <CustomText size={SIZES.medium}>Filter</CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list1}
          contentContainerStyle={{
            marginVertical: 10,
          }}
          renderItem={({item, index}) => {
            return <LaunchpadItem item={item} index={index} />;
          }}
        />
      </>
    );
  };

  const SecondRoute = () => {
    const list2 = watchlist.filter(item => item.category == 'idos');
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText size={SIZES.medium}>Recent activity</CustomText>
            <Icon
              style={{marginTop: -3, marginHorizontal: 2}}
              name="arrow-drop-down"
              color={
                theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
              }
              size={20}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                marginRight: 5,
                padding: 7,
              }}>
              <Icon
                style={{marginTop: -3, marginHorizontal: 2}}
                name="search"
                color={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: COLORS.secondaryDark,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 7,
                borderRadius: 3,
              }}>
              <Icon
                style={{marginTop: -3, marginHorizontal: 2}}
                name="filter-list"
                color={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                size={18}
              />
              <CustomText size={SIZES.medium}>Filter</CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list2}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 10,
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return <IDOItem item={item} index={index} />;
          }}
        />
      </>
    );
  };

  const renderScene = SceneMap({
    launchpads: FirstRoute,
    idos: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      renderLabel={({route, focused, color}) => (
        <CustomText size={SIZES.large} font={FONTS.bold} style={{color}}>
          {route.title}
        </CustomText>
      )}
      {...props}
      tabStyle={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 140,
        marginLeft: -10,
      }}
      indicatorStyle={{
        backgroundColor:
          theme == 'light' ? COLORS.background : COLORS.backgroundDark,
      }}
      style={{
        elevation: 0,
        width: 270,
        backgroundColor: COLORS.backgroundDark,
        marginTop: 40,
      }}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: SIZES.padding}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
};

export default Watchlist;

const styles = StyleSheet.create({});
