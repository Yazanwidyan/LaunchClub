import {
  SafeAreaView,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import CustomText from '../components/UI/CustomText';
import Header from '../components/common/Header';
import {COLORS, FONTS, IDOData, PadsData, SIZES} from '../constants';
import Divider from '../components/UI/Divider';
import LaunchpadItem from '../components/Launchpads/LaunchpadItem';
import IDOItem from '../components/IDO/IDOItem';
import CustomTextInput from '../components/UI/CustomTextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabIcon from 'react-native-vector-icons/Fontisto';

const active_tabs = [
  {name: 'Launchpads', icon: 'rocket'},
  {name: 'IDOs', icon: 'fire'},
];
const HEADER_HEIGHT = 70;

const Search = () => {
  const [scrollAnim] = useState(new Animated.Value(0));
  const [offsetAnim] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: 'clamp',
        }),
        offsetAnim,
      ),
      0,
      1,
    ),
  );

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const [activeTab, setActiveTab] = useState('Launchpads');
  const {theme} = useSelector(state => state.theme);

  const selectActiveTab = category => {
    setActiveTab(category);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View
        style={[
          {
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:
              theme == 'light' ? COLORS.background : COLORS.backgroundDark,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 10000,
            transform: [{translateY: navbarTranslate}],
          },
        ]}
        onLayout={event => {
          let {height} = event.nativeEvent.layout;
          setClampedScroll(
            Animated.diffClamp(
              Animated.add(
                scrollAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolateLeft: 'clamp',
                }),
                offsetAnim,
              ),
              0,
              height,
            ),
          );
        }}>
        <Header title={'Search'} />
      </Animated.View>
      <Animated.View
        style={[
          {
            height: 90,
            backgroundColor:
              theme == 'light' ? COLORS.background : COLORS.backgroundDark,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 70,
            zIndex: 500,
            transform: [{translateY: navbarTranslate}],
          },
        ]}
        onLayout={event => {
          let {height} = event.nativeEvent.layout;
          setClampedScroll(
            Animated.diffClamp(
              Animated.add(
                scrollAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolateLeft: 'clamp',
                }),
                offsetAnim,
              ),
              0,
              height,
            ),
          );
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 40,
            paddingHorizontal: SIZES.padding,
            backgroundColor:
              theme == 'light' ? COLORS.background : COLORS.backgroundDark,
          }}>
          {active_tabs.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item.name}
                onPress={() => selectActiveTab(item.name)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 24,
                  borderBottomColor: COLORS.primary,
                  paddingBottom: 10,
                  borderBottomWidth: activeTab == item.name ? 3 : 0,
                }}>
                <TabIcon
                  name={item.icon}
                  color={
                    activeTab == item.name
                      ? theme == 'light'
                        ? COLORS.black
                        : COLORS.white
                      : COLORS.gray
                  }
                  size={18}
                  style={{marginTop: -4, marginRight: 10}}
                />
                <CustomText
                  size={SIZES.font}
                  font={FONTS.bold}
                  style={{
                    color:
                      activeTab == item.name
                        ? theme == 'light'
                          ? COLORS.black
                          : COLORS.white
                        : COLORS.gray,
                  }}>
                  {item.name}
                </CustomText>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.View>

      <View>
        {activeTab == 'Launchpads' && (
          <>
            <Animated.View
              style={[
                {
                  height: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    theme == 'light'
                      ? COLORS.background
                      : COLORS.backgroundDark,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 150,
                  zIndex: 600,
                  transform: [{translateY: navbarTranslate}],
                },
              ]}
              onLayout={event => {
                let {height} = event.nativeEvent.layout;
                setClampedScroll(
                  Animated.diffClamp(
                    Animated.add(
                      scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: 'clamp',
                      }),
                      offsetAnim,
                    ),
                    0,
                    height,
                  ),
                );
              }}>
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  marginBottom: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 16,
                }}>
                <View style={{flex: 1}}>
                  <CustomTextInput
                    iconName={'magnify'}
                    placeholder="Search Launchpads"
                  />
                </View>
                <View
                  style={{
                    borderRadius: SIZES.radius,
                    padding: 15,
                    marginHorizontal: 5,
                    marginTop: 7,
                    backgroundColor:
                      theme === 'light'
                        ? COLORS.secondary
                        : COLORS.secondaryDark,
                  }}>
                  <Icon
                    name="filter-list"
                    color={
                      theme === 'light'
                        ? COLORS.secondaryDark
                        : COLORS.secondary
                    }
                    size={23}
                  />
                </View>
              </View>
            </Animated.View>
            <Animated.FlatList
              bounces={false}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {y: scrollAnim},
                    },
                  },
                ],
                {useNativeDriver: true},
              )}
              data={PadsData}
              contentContainerStyle={{
                marginTop: 250,
                paddingHorizontal: SIZES.padding,
              }}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => {
                return (
                  <Text
                    style={{
                      marginBottom: 250,
                    }}></Text>
                );
              }}
              renderItem={({item, index}) => {
                return <LaunchpadItem item={item} index={index} />;
              }}
              keyExtractor={item => item.id}
            />
          </>
        )}
        {activeTab == 'IDOs' && (
          <>
            <Animated.View
              style={[
                {
                  height: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    theme == 'light'
                      ? COLORS.background
                      : COLORS.backgroundDark,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 150,
                  zIndex: 600,
                  transform: [{translateY: navbarTranslate}],
                },
              ]}
              onLayout={event => {
                let {height} = event.nativeEvent.layout;
                setClampedScroll(
                  Animated.diffClamp(
                    Animated.add(
                      scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: 'clamp',
                      }),
                      offsetAnim,
                    ),
                    0,
                    height,
                  ),
                );
              }}>
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 20,
                }}>
                <View style={{flex: 1}}>
                  <CustomTextInput
                    iconName={'magnify'}
                    placeholder="Search IDOs"
                  />
                </View>
                <View
                  style={{
                    borderRadius: SIZES.radius,
                    padding: 15,
                    marginHorizontal: 5,
                    marginTop: 7,
                    backgroundColor:
                      theme === 'light'
                        ? COLORS.secondary
                        : COLORS.secondaryDark,
                  }}>
                  <Icon
                    name="filter-list"
                    color={
                      theme === 'light'
                        ? COLORS.secondaryDark
                        : COLORS.secondary
                    }
                    size={23}
                  />
                </View>
              </View>
            </Animated.View>
            <Animated.FlatList
              contentInset={{top: HEADER_HEIGHT}}
              contentOffset={{y: -HEADER_HEIGHT}}
              bounces={false}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {y: scrollAnim},
                    },
                  },
                ],
                {useNativeDriver: true},
              )}
              ListHeaderComponentStyle={{alignSelf: 'stretch'}}
              data={IDOData}
              numColumns={2}
              contentContainerStyle={{
                paddingHorizontal: 10,
                alignItems: 'center',
                marginTop: 250,
              }}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => {
                return (
                  <Text
                    style={{
                      marginBottom: 250,
                    }}></Text>
                );
              }}
              renderItem={({item, index}) => {
                return <IDOItem item={item} index={index} />;
              }}
              keyExtractor={item => item.id}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
