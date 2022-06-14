import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  FlatList,
} from 'react-native';
import {measure} from 'react-native-reanimated';
import IDOItem from './components/IDO/IDOItem';
import CustomTextInput from './components/UI/CustomTextInput';
import {useSelector, useDispatch} from 'react-redux';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWeb from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  COLORS,
  PadsData,
  assets,
  tabs_details,
  SIZES,
  IDOData,
} from './constants';
import CustomText from './components/UI/CustomText';

const HEADER_HEIGHT = 300;

const tabs_detail = tabs_details.map(tabs_details => ({
  ...tabs_details,
  ref: React.createRef(),
}));

const TabIndicator = () => {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 0,
        height: 8,
        borderRadius: 10,
        backgroundColor: 'red',
      }}
    />
  );
};

const Tabs = ({tabIndicatorIndex, onTabPress}) => {
  const [measureLayout, setMeasureLayout] = useState([]);
  const containerRef = useRef();
  const {theme} = useSelector(state => state.theme);

  // useEffect(() => {

  //   let ml = [];
  //   tabs_detail.forEach(tabs_details => {
  //     tabs_details?.ref?.current?.measureLayout(
  //       containerRef.current,
  //       (x, y, width, height) => {
  //         ml.push({
  //           x,
  //           y,
  //           width,
  //           height,
  //         });

  //         if (ml.length === tabs_details.length) {
  //           setMeasureLayout(ml);
  //         }
  //       },
  //     );
  //   });
  // }, [containerRef.current]);

  return (
    <View ref={containerRef} style={{flex: 1, flexDirection: 'row'}}>
      {/* tab indicator */}

      <TabIndicator />
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
  );
};

export const MoreLess = ({children}) => {
  const [isMore, setIsMore] = useState(false);

  return (
    <View style={{marginBottom: 20}}>
      <CustomText grayText>
        {isMore ? children : children.substr(0, 105)}
      </CustomText>
      <TouchableOpacity onPress={() => setIsMore(!isMore)}>
        <CustomText grayText>
          {' '}
          {isMore ? '- show less' : '+ show more'}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const Animation = () => {
  const flatListRef = useRef();
  const navigation = useNavigation();
  const {theme} = useSelector(state => state.theme);
  const [tabIndicatorIndex, setTabIndicatorIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const onTabPress = useCallback(tabIndex => {
    setTabIndicatorIndex(tabIndex);
    flatListRef?.current?.scrollToOffset({
      offset: tabIndex * SIZES.width,
    });
  });

  const renderContent = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* tabs */}

        <View
          style={{
            height: 60,
          }}>
          <Tabs
            tabIndicatorIndex={tabIndicatorIndex}
            onTabPress={onTabPress}
            scrollX={scrollX}
          />
        </View>

        {/* divider */}

        {/* content */}

        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          keyboardDismissMode="on-drag"
          showsHorizontalScrollIndicator={false}
          data={tabs_detail}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View style={{width: SIZES.width}}>
                {index == 0 && (
                  <>
                    <View style={{paddingHorizontal: 20, marginBottom: 20}}>
                      <CustomTextInput
                        iconName={'magnify'}
                        placeholder="Search IDOs"
                      />
                    </View>
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
                  </>
                )}
                {index == 1 && (
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
                )}
                {index == 2 && (
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
                )}
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        {/* backgroundImage */}

        <Animated.Image
          source={assets.nft02}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
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
        {/* createo card */}
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
        {/* screen overlay */}

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

        {/* back btn */}

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
          sakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsgh
          ajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsahsakjsghajgsah
        </MoreLess>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 50,
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
            {/* header */}
            {renderRecipeCardHeader()}
            <Animated.View
              style={{
                position: 'absolute',
                left: 30,
                zIndex: 55,
                top: '30%',
                right: 30,
                height: 160,
                width: 160,
                opacity: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                  outputRange: [1, 0],
                }),
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, 170, 250],
                      outputRange: [0, 0, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    translateX: scrollY.interpolate({
                      inputRange: [0, 170, 250],
                      outputRange: [0, 90, 100],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    scale: scrollY.interpolate({
                      inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                      outputRange: [2, 1, 0],
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
                height: 300,
                width: 500,
              }}
            />

            {/* info */}

            {renderRecipeInfo()}

            {/* title */}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => renderContent()}
      />

      {/* header bar */}

      {renderHeaderBar()}
    </View>
  );
};
export default Animation;
