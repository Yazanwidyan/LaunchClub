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
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {addToWatchlist} from '../redux/actions/actions';
import Icon from '../components/UI/Icon';
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

const HEADER_HEIGHT = 300;

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
    const detailsCard = (title, content) => {
      return (
        <View style={{paddingVertical: 10}}>
          <CustomText grayText font={FONTS.medium} size={SIZES.regular}>
            {title}
          </CustomText>
          {content.map(item => {
            return (
              <CustomText font={FONTS.medium} Size={SIZES.medium} key={item}>
                {item}
              </CustomText>
            );
          })}
        </View>
      );
    };

    return (
      <View style={{marginTop: 50, paddingHorizontal: SIZES.padding}}>
        <CustomText
          style={{marginBottom: 16}}
          font={FONTS.bold}
          size={SIZES.bold}>
          Details
        </CustomText>
        {detailsCard('Listing Info', [
          'Pancake swap on 9, 2022 at 9 am',
          'Binance on 9, 2022 at 9 am',
        ])}
        {detailsCard('Sale network', ['solana, binance smart chain'])}
        {detailsCard('Hard cap', ['$350,000'])}
        {detailsCard('Vesting', ['25% TGE, vested over 3 months'])}
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
          <Icon
            library="Entypo"
            nameIcon="chevron-small-left"
            colorIcon={COLORS.gray}
            sizeIcon={30}
          />
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
            <Icon
              library="AntDesign"
              style={{marginTop: -2}}
              nameIcon="like1"
              sizeIcon={20}
              colorIcon={COLORS.gray}
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
            <Icon
              library="AntDesign"
              onPress={() => addRemoveWatchlist(data)}
              nameIcon="heart"
              sizeIcon={22}
              colorIcon={
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

  const renderInfo = () => {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          backgroundColor:
            theme == 'light' ? COLORS.background : COLORS.backgroundDark,
          paddingTop: 20,
          marginTop: -20,
          borderRadius: 16,
        }}>
        <View
          style={{
            marginBottom: 20,
          }}>
          <CustomText
            font={FONTS.bold}
            style={{marginBottom: 40}}
            size={SIZES.large}>
            {data.name}
          </CustomText>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText font={FONTS.regular} size={SIZES.regular}>
              <Icon
                library="AntDesign"
                nameIcon="like2"
                sizeIcon={17}
                colorIcon={COLORS.gray}
              />{' '}
              822 Likes
            </CustomText>
            <CustomText
              font={FONTS.regular}
              size={SIZES.regular}
              style={{marginHorizontal: 20}}>
              <Icon
                library="AntDesign"
                nameIcon="hearto"
                sizeIcon={16}
                colorIcon={COLORS.gray}
              />{' '}
              On 8322 watchlists
            </CustomText>
          </View>
        </View>
        <MoreLess>
          cnewkjcenw jdnekjndkejnddujewd dewhudwei jlsajxje oijdoewjido jghhgjhb
          jahekqjhe ekwhekw hwekwekxnekjnk
        </MoreLess>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <CustomText
              style={{marginBottom: 12}}
              size={SIZES.regular}
              font={FONTS.regular}
              grayText>
              Token address
            </CustomText>
            <View>
              <Image />
              <CustomText font={FONTS.bold} size={SIZES.medium}>
                0x330...8b7c
              </CustomText>
            </View>
          </View>
          <View>
            <CustomText
              style={{marginBottom: 12, textAlign: 'right'}}
              size={SIZES.regular}
              font={FONTS.regular}
              grayText>
              Ending in
            </CustomText>
            <View>
              <CustomText font={FONTS.bold} size={SIZES.medium}>
                3h : 25m : 45s
              </CustomText>
            </View>
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
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          position: 'absolute',
          bottom: 20,
          height: 60,
          width: '93%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: SIZES.radius,
          marginHorizontal: SIZES.padding,
          zIndex: 1000,
          backgroundColor: COLORS.primary,
        }}>
        <CustomText font={FONTS.bold} size={SIZES.bold}>
          Apply now
        </CustomText>
      </TouchableOpacity>
      <Animated.FlatList
        data={[1]}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        ListHeaderComponent={
          <View>
            {renderCardHeader()}
            {renderInfo()}
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
