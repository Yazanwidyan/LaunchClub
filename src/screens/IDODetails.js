import React, {useRef, useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWeb from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {addToWatchlist} from '../redux/actions/actions';
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
import Divider from '../components/UI/Divider';

const HEADER_HEIGHT = 180;

const LaunchpadsCard = ({image, name}) => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 50, height: 50, borderRadius: 50, marginRight: 20}}
        source={image}
      />
      <View>
        <CustomText size={SIZES.large}>{name}</CustomText>
        <CustomText>Click here to apply</CustomText>
      </View>
    </View>
  );
};

const InfoCard = ({title, subtitle}) => {
  return (
    <View
      style={{
        padding: 20,
        justifyContent: 'center',
      }}>
      <View>
        <CustomText grayText>{title}</CustomText>
        <CustomText size={SIZES.large}>{subtitle}</CustomText>
      </View>
    </View>
  );
};

const IDODetails = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params.item);
  const dispatch = useDispatch();
  const watchlist = useSelector(state => state.watchlist);

  useEffect(() => {
    setData(route.params.item);
  }, []);

  const addRemoveWatchlist = data => {
    const payload = {...data, category: 'idos'};

    dispatch(addToWatchlist(payload));
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderContent = () => {
    return (
      <>
        <View
          style={{
            marginHorizontal: 20,
            borderRadius: SIZES.radius,
            marginBottom: 10,
            backgroundColor:
              theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
          }}>
          <View
            style={{
              padding: 20,
              justifyContent: 'center',
            }}>
            <CustomText>Click here to apply</CustomText>
          </View>
          <Divider />
          <LaunchpadsCard name={'BSCPAD'} image={assets.pad01} />
          <Divider />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            borderRadius: SIZES.radius,
            backgroundColor:
              theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
          }}>
          <InfoCard title={'Sale network'} subtitle={'solana, smart chain'} />
        </View>
      </>
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
          <ChevronIcon name="chevron-left" color={COLORS.gray} size={30} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
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
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
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
          </TouchableOpacity>
        </View>
      </View>
    );
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
          source={data.image}
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

  const renderRecipeInfo = () => {
    return (
      <View style={{paddingHorizontal: SIZES.padding, marginTop: 20}}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <CustomText
            font={FONTS.bold}
            style={{marginBottom: 5}}
            size={SIZES.extraLarge}>
            {data.name}
          </CustomText>
          <View
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
            <CustomText font={FONTS.bold} size={SIZES.large}>
              2.1k
            </CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText font={FONTS.bold} size={SIZES.large}>
              2.1k
            </CustomText>
            <CustomText grayText>watchlist</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText font={FONTS.bold} size={SIZES.large}>
              BSC
            </CustomText>
            <CustomText grayText>chain</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText font={FONTS.bold} size={SIZES.large}>
              2.1k
            </CustomText>
            <CustomText grayText>likes</CustomText>
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText font={FONTS.bold} size={SIZES.large}>
              2.1k
            </CustomText>
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
export default IDODetails;
