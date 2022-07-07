import * as React from 'react';
import {View, useWindowDimensions, FlatList, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES, assets} from '../constants';
import CustomText from './UI/CustomText';

const Test2 = () => {
  const {theme} = useSelector(state => state.theme);

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Contract'},
    {key: 'second', title: 'Tiers system'},
    {key: 'third', title: 'Markets'},
  ]);

  const contracts = [
    {
      logo: assets.person01,
      name: 'BNB smart chain (BEP 20)',
      contract: '0xb6adb74efb5801160ff749b19...',
    },
    {
      logo: assets.person01,
      name: 'Ethereum',
      contract: '0xb6adb74efb5801160ff749b19...',
    },
    {
      logo: assets.person01,
      name: 'Ethereum',
      contract: '0xb6adb74efb5801160ff749b19...',
    },
    {
      logo: assets.person01,
      name: 'Ethereum',
      contract: '0xb6adb74efb5801160ff749b19...',
    },
    {
      logo: assets.person01,
      name: 'Ethereum',
      contract: '0xb6adb74efb5801160ff749b19...',
    },
  ];
  const markets = [
    {
      logo: assets.person01,
      name: 'Binance',
    },
    {
      logo: assets.person01,
      name: 'Pancakeswap',
    },
  ];
  const FirstRoute = () => (
    <FlatList
      data={contracts}
      renderItem={({item}) => (
        <View
          style={{
            marginTop: 17,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
          }}>
          <Image
            style={{
              marginHorizontal: 10,
              width: 35,
              height: 35,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
            source={item.logo}
          />
          <View>
            <CustomText grayText size={SIZES.small}>
              {item.name}
            </CustomText>
            <CustomText size={SIZES.medium}>{item.contract}</CustomText>
          </View>
        </View>
      )}
    />
  );

  const SecondRoute = () => <View></View>;
  const ThirdRoute = () => (
    <FlatList
      data={markets}
      contentContainerStyle={{
        marginHorizontal: 16,
      }}
      renderItem={({item}) => (
        <View
          style={{
            marginTop: 17,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{
              marginHorizontal: 10,
              width: 35,
              height: 35,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
            source={item.logo}
          />
          <View>
            <CustomText grayText size={SIZES.small}>
              {item.name}
            </CustomText>
          </View>
        </View>
      )}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      renderLabel={({route, focused, color}) => (
        <CustomText size={SIZES.small} font={FONTS.bold} style={{color}}>
          {route.title}
        </CustomText>
      )}
      {...props}
      tabStyle={{
        flexDirection: 'row',
      }}
      indicatorStyle={{
        backgroundColor:
          theme == 'light' ? COLORS.background : COLORS.backgroundDark,
      }}
      style={{
        elevation: 0,
        backgroundColor: COLORS.backgroundDark,
      }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={{height: 280}}
      initialLayout={{width: layout.width}}
    />
  );
};

export default Test2;
