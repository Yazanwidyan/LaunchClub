import React, {useRef, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';

import {useSelector} from 'react-redux';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWeb from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, assets, tabs_details, SIZES, IDOData} from '../constants';
import CustomText from '../components/UI/CustomText';
import MoreLess from '../components/UI/MoreLess';
import CustomTextInput from '../components/UI/CustomTextInput';
import IDOItem from '../components/IDO/IDOItem';

const HEADER_HEIGHT = 180;

const tabs_detail = tabs_details.map(tabs_details => ({
  ...tabs_details,
  ref: React.createRef(),
}));

const LaunchpadDetails = () => {
  const [tabIndicatorIndex, setTabIndicatorIndex] = useState(0);
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const onTabPress = useCallback(tabIndex => {
    setTabIndicatorIndex(tabIndex);
    flatListRef?.current?.scrollToOffset({
      offset: tabIndex * SIZES.width,
    });
  });
  const renderCardHeader = () => {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <Animated.Image
          source={assets.nft02}
          resizeMode="cover"
          style={{
            height: HEADER_HEIGHT,
            width: '110%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.55],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.9],
                }),
              },
            ],
          }}
        />
      </View>
    );
  };
  const renderContent = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {tabs_detail.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onTabPress(index)}
                key={`Tab-${index}`}
                style={{
                  flex: 1,
                  paddingHorizontal: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: index == tabIndicatorIndex ? 17 : 14,
                    color:
                      index == tabIndicatorIndex
                        ? theme == 'light'
                          ? COLORS.black
                          : COLORS.white
                        : COLORS.gray,
                  }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{width: SIZES.width, paddingHorizontal: 20}}>
          <CustomTextInput iconName={'magnify'} placeholder="Search IDOs" />
          <FlatList
            data={IDOData}
            numColumns={2}
            contentContainerStyle={{
              marginVertical: 10,
              paddingHorizontal: 20,
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => {
              return <Text></Text>;
            }}
            renderItem={({item, index}) => {
              return <IDOItem twoCol item={item} index={index} />;
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  };

  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor:
              theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}></Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 130, HEADER_HEIGHT - 83],
                  outputRange: [70, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Image
            style={{width: 45, height: 45, borderRadius: 100}}
            source={assets.nft04}
            resizeMode="contain"
          />
        </Animated.View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.gray,
            backgroundColor:
              theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
          }}>
          <ChevronIcon
            name="chevron-left"
            color={theme === 'light' ? COLORS.secondaryDark : COLORS.secondary}
            size={30}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              width: 35,
              marginHorizontal: 10,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: COLORS.gray,
              backgroundColor:
                theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <LikeIcon
              name="like2"
              size={20}
              color={
                theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              width: 35,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: COLORS.gray,
              backgroundColor:
                theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <HeartIcon
              name="ios-heart-outline"
              size={20}
              color={
                theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View style={{paddingHorizontal: 20, marginTop: 80}}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <CustomText style={{marginBottom: 5}} size={SIZES.font}>
            by name
          </CustomText>
          <CustomText style={{marginBottom: 5}} size={SIZES.extraLarge}>
            name
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'space-between',
            }}>
            <IconWeb name="web" color={'white'} size={23} />
          </View>
        </View>
        <MoreLess>
          cnewkjcenw jdnekjndkejnddujewd dewhudwei jlsajxje oijdoewjido jghhgjhb
          jahekqjhe ekwhekw hwekwekxnekjnk
        </MoreLess>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 40,
          }}>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>watchlist</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>BSC</CustomText>
            <CustomText grayText>chain</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText size={SIZES.large}>2.1k</CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme === 'light' ? COLORS.background : COLORS.backgroundDark,
      }}>
      <Animated.FlatList
        data={[1]}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderCardHeader()}
            <Animated.View
              style={{
                position: 'absolute',
                zIndex: 1,
                left: 30,
                top: 110,
                right: 30,
                height: 130,
                width: 130,
                opacity: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 90],
                  outputRange: [1, 0],
                }),
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, 60, 90],
                      outputRange: [0, -10, -20],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    translateX: scrollY.interpolate({
                      inputRange: [0, 60, 90],
                      outputRange: [0, 90, 100],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    scale: scrollY.interpolate({
                      inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                      outputRange: [1, 1, -0.3],
                    }),
                  },
                ],
              }}>
              <Image
                style={{width: '100%', height: '100%', borderRadius: 100}}
                source={assets.nft04}
                resizeMode="contain"
              />
            </Animated.View>
            <LinearGradient
              colors={[
                'transparent',
                'transparent',
                theme == 'light' ? COLORS.background : COLORS.backgroundDark,
              ]}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 185,
                width: '100%',
              }}
            />
            {renderRecipeInfo()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => renderContent()}
      />

      {renderHeaderBar()}
    </View>
  );
};
export default LaunchpadDetails;
