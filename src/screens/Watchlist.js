import {
  SafeAreaView,
  ScrollView,
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
import {COLORS, SIZES} from '../constants';
import Divider from '../components/UI/Divider';
import LaunchpadItem from '../components/Launchpads/LaunchpadItem';
import IDOItem from '../components/IDO/IDOItem';

const active_tabs = ['launchpads', 'idos'];

const Watchlist = () => {
  const watchlist = useSelector(state => state.watchlist);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('launchpads');
  const {theme} = useSelector(state => state.theme);

  useEffect(() => {
    const list = watchlist.filter(item => item.category == activeTab);
    setData(list);
  }, []);

  const selectActiveTab = category => {
    const list = watchlist.filter(item => item.category == category);
    setData(list);
    setActiveTab(category);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Watchlist'} />
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
          backgroundColor:
            theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        }}>
        {active_tabs.map(item => {
          return (
            <TouchableOpacity
              onPress={() => selectActiveTab(item)}
              style={{
                marginHorizontal: 10,
              }}>
              <CustomText
                size={SIZES.large}
                style={{
                  fontSize: activeTab == item ? 17 : 14,
                  color:
                    activeTab == item
                      ? theme == 'light'
                        ? COLORS.black
                        : COLORS.white
                      : COLORS.gray,
                }}>
                {item}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        {activeTab == 'launchpads' && (
          <FlatList
            data={data}
            contentContainerStyle={{marginVertical: 10}}
            renderItem={({item, index}) => {
              return <LaunchpadItem item={item} index={index} />;
            }}
          />
        )}
        {activeTab == 'idos' && (
          <FlatList
            data={data}
            numColumns={2}
            contentContainerStyle={{alignItems: 'center', marginVertical: 10}}
            renderItem={({item, index}) => {
              return <IDOItem item={item} index={index} />;
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Watchlist;

const styles = StyleSheet.create({});
