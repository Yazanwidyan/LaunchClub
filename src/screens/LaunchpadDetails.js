import React, {useRef, useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
  Modal,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWeb from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  COLORS,
  assets,
  tabs_details,
  SIZES,
  IDOData,
  FONTS,
} from '../constants';
import CustomText from '../components/UI/CustomText';
import MoreLess from '../components/UI/MoreLess';
import CustomTextInput from '../components/UI/CustomTextInput';
import IDOBItem from '../components/IDO/IDOBItem';
import useToggle from '../components/common/hooks/useToggle';
import BottomSheet from '../components/UI/BottomSheet';
import {addToWatchlist} from '../redux/actions/actions';

const HEADER_HEIGHT = 230;

const tabs_detail = tabs_details.map(tabs_details => ({
  ...tabs_details,
  ref: React.createRef(),
}));

const LaunchpadDetails = () => {
  const [tabIndicatorIndex, setTabIndicatorIndex] = useState(0);
  const [open, setOpen] = useToggle(false);
  const {theme} = useSelector(state => state.theme);
  const watchlist = useSelector(state => state.watchlist);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params.item);

  useEffect(() => {
    setData(route.params.item);
  }, []);

  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const onTabPress = useCallback(tabIndex => {
    setTabIndicatorIndex(tabIndex);
    flatListRef?.current?.scrollToOffset({
      offset: tabIndex * SIZES.width,
    });
  });

  const addRemoveWatchlist = data => {
    const payload = {...data, category: 'launchpads'};

    dispatch(addToWatchlist(payload));
  };

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
          source={data.logo}
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
                activeOpacity={0.7}
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
        <View style={{width: SIZES.width, paddingHorizontal: SIZES.padding}}>
          <CustomTextInput iconName={'magnify'} placeholder="Search IDOs" />
          <View>
            <FlatList
              data={IDOData}
              contentContainerStyle={{}}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => {
                return <Text></Text>;
              }}
              renderItem={({item, index}) => {
                return <IDOBItem item={item} index={index} />;
              }}
              keyExtractor={item => item.id}
            />
          </View>
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
          paddingHorizontal: SIZES.padding,
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
            source={data.image}
            resizeMode="contain"
          />
        </Animated.View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            borderRadius: 50,
            borderColor: COLORS.gray,
            backgroundColor:
              theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
          }}>
          <ChevronIcon name="chevron-left" color={COLORS.gray} size={35} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              marginHorizontal: 10,
              borderRadius: 50,
              borderColor: COLORS.gray,
              backgroundColor:
                theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <LikeIcon
              style={{marginTop: -2}}
              name="like1"
              size={20}
              color={COLORS.gray}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              borderRadius: 50,
              borderColor: COLORS.gray,
              backgroundColor:
                theme === 'light' ? COLORS.secondary : COLORS.secondaryDark,
            }}>
            <HeartIcon
              onPress={() => addRemoveWatchlist(data)}
              name="ios-heart-sharp"
              size={22}
              color={
                watchlist.some(e => e.id === data.id) ? COLORS.red : COLORS.gray
              }
            />
          </View>
        </View>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          marginTop: 90,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <CustomText
            font={FONTS.bold}
            style={{marginBottom: 8}}
            size={SIZES.extraLarge}>
            {data.name}
          </CustomText>
          <CustomText
            style={{marginBottom: 16}}
            font={FONTS.regular}
            size={SIZES.small}>
            created by{' '}
            <CustomText style={{color: COLORS.primary}}>
              {data.owner ? data.owner : data.name}
            </CustomText>
          </CustomText>
          {/* <View
            style={{
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'space-between',
            }}>
            <IconWeb
              name="web"
              color={theme == 'light' ? COLORS.black : COLORS.white}
              size={23}
            />
            <IconWeb
              name="web"
              color={theme == 'light' ? COLORS.black : COLORS.white}
              size={23}
            />
            <IconWeb
              name="web"
              color={theme == 'light' ? COLORS.black : COLORS.white}
              size={23}
            />
            <IconWeb
              name="web"
              color={theme == 'light' ? COLORS.black : COLORS.white}
              size={23}
            />
          </View> */}
          {/* <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setOpen(true)}
            style={{
              position: 'absolute',
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>More Details</Text>
            <BottomSheet
              show={open}
              onDismiss={() => {
                setOpen(false);
              }}
              enableBackdropDismiss></BottomSheet>
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 16,
          }}>
          <View style={{alignItems: 'center'}}>
            <CustomText font={FONTS.bold} size={SIZES.bold}>
              2.1k
            </CustomText>
            <CustomText font={FONTS.regular} size={SIZES.small} grayText>
              likes
            </CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText font={FONTS.bold} size={SIZES.bold}>
              2.1k
            </CustomText>
            <CustomText font={FONTS.regular} size={SIZES.small} grayText>
              watchlist
            </CustomText>
          </View>
        </View>
        <MoreLess>
          cnewkjcenw jdnekjndkejnddujewd dewhudwei jlsajxje oijdoewjido jghhgjhb
          jahekqjhe ekwhekw hwekwekxnekjnk
        </MoreLess>
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
                backgroundColor: COLORS.white,
                borderRadius: 100,
                padding: 3,
                position: 'absolute',
                zIndex: 1,
                left: SIZES.width / 2.88,
                top: 160,
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
                      inputRange: [0, 0, 0],
                      outputRange: [0, 0, 0],
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
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 100,
                }}
                source={data.image}
                resizeMode="contain"
              />
            </Animated.View>

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
