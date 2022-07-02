import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from '../components/UI/CustomText';
import {Tabs} from 'react-native-collapsible-tab-view';
import IDOBItem from '../components/IDO/IDOBItem';
import {COLORS, FONTS, IDOData, SIZES} from '../constants';
import MoreLess from '../components/UI/MoreLess';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Test2 from '../components/Test2';
import {addToWatchlist} from '../redux/actions/actions';
import {useSelector, useDispatch} from 'react-redux';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeIcon from 'react-native-vector-icons/AntDesign';

const Test = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {theme} = useSelector(state => state.theme);
  const watchlist = useSelector(state => state.watchlist);
  const [data, setData] = useState(route.params.item);

  useEffect(() => {
    setData(route.params.item);
  }, []);

  const addRemoveWatchlist = data => {
    const payload = {...data, category: 'launchpads'};

    dispatch(addToWatchlist(payload));
  };

  const renderCardHeader = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <Image
          source={data.logo}
          resizeMode="cover"
          style={{
            height: 230,
            width: '110%',
          }}
        />
      </View>
    );
  };

  const renderCardInfo = () => (
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

  const Header = () => {
    return (
      <View
        pointerEvents="box-none"
        style={{
          backgroundColor:
            theme == 'light' ? COLORS.background : COLORS.backgroundDark,
        }}>
        {renderCardHeader()}
        <View
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
        </View>
        {renderCardInfo()}
        <Test2 />
        {renderHeaderBar()}
      </View>
    );
  };

  const ScreenA = () => {
    return (
      <Tabs.FlatList
        data={IDOData}
        renderItem={({item, index}) => {
          return <IDOBItem item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
      />
    );
  };
  const ScreenB = () => {
    return <CustomText>ahskjlasajnsksajgaj</CustomText>;
  };

  return (
    <Tabs.Container renderHeader={Header}>
      <Tabs.Tab name="A">
        <ScreenA />
      </Tabs.Tab>
      <Tabs.Tab name="B">
        <ScreenB />
      </Tabs.Tab>
    </Tabs.Container>
  );
};

export default Test;

const styles = StyleSheet.create({});
