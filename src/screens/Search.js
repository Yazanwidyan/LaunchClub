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
import Icon from '../components/UI/Icon';
import CustomTextInput from '../components/UI/CustomTextInput';

const Search = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'launchpads', title: 'Launchpads'},
    {key: 'idos', title: 'IDOs'},
  ]);

  const {theme} = useSelector(state => state.theme);
  const watchlist = useSelector(state => state.watchlist);

  const layout = useWindowDimensions();

  const FirstRoute = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 16,
            paddingHorizontal: SIZES.padding,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText size={SIZES.medium}>Recent activity</CustomText>
            <Icon
              library="MaterialIcons"
              style={{marginTop: -3, marginHorizontal: 2}}
              nameIcon="arrow-drop-down"
              colorIcon={
                theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
              }
              sizeIcon={20}
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
                library="Feather"
                nameIcon="search"
                colorIcon={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                sizeIcon={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: COLORS.secondaryDark,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 3,
              }}>
              <Icon
                library="MaterialIcons"
                style={{marginTop: -3}}
                nameIcon="filter-list"
                colorIcon={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                sizeIcon={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PadsData}
          contentContainerStyle={{
            paddingBottom: 70,
            paddingHorizontal: SIZES.padding,
          }}
          renderItem={({item, index}) => {
            return <LaunchpadItem item={item} index={index} />;
          }}
        />
      </>
    );
  };

  const SecondRoute = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 16,
            paddingHorizontal: SIZES.padding,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText size={SIZES.medium}>Recent activity</CustomText>
            <Icon
              library="MaterialIcons"
              style={{marginTop: -3, marginHorizontal: 2}}
              nameIcon="arrow-drop-down"
              colorIcon={
                theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
              }
              sizeIcon={20}
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
                library="Feather"
                nameIcon="search"
                colorIcon={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                sizeIcon={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: COLORS.secondaryDark,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 3,
              }}>
              <Icon
                library="MaterialIcons"
                style={{marginTop: -3}}
                nameIcon="filter-list"
                colorIcon={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                sizeIcon={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={IDOData}
          numColumns={2}
          contentContainerStyle={{
            alignItems: 'center',
            paddingHorizontal: SIZES.padding,
            paddingBottom: 70,
          }}
          renderItem={({item, index}) => {
            return <IDOItem wideWidth item={item} index={index} />;
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
        width: 160,
        marginLeft: 5,
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
    <SafeAreaView style={{flex: 1, marginTop: 10}}>
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

export default Search;

const styles = StyleSheet.create({});
