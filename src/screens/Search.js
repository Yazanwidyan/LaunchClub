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
import {COLORS, IDOData, PadsData, SIZES} from '../constants';
import Divider from '../components/UI/Divider';
import LaunchpadItem from '../components/Launchpads/LaunchpadItem';
import IDOItem from '../components/IDO/IDOItem';
import CustomTextInput from '../components/UI/CustomTextInput';

const active_tabs = ['launchpads', 'idos'];

const Search = () => {
  const [activeTab, setActiveTab] = useState('launchpads');
  const {theme} = useSelector(state => state.theme);

  const selectActiveTab = category => {
    setActiveTab(category);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Search'} />
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
              key={item}
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
            ListHeaderComponent={
              <View style={{paddingHorizontal: 20, marginBottom: 20}}>
                <CustomTextInput
                  iconName={'magnify'}
                  placeholder="Search Launchpads"
                />
              </View>
            }
            data={PadsData}
            contentContainerStyle={{
              marginVertical: 10,
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => {
              return <Text></Text>;
            }}
            renderItem={({item, index}) => {
              return <LaunchpadItem item={item} index={index} />;
            }}
            keyExtractor={item => item.id}
          />
        )}
        {activeTab == 'idos' && (
          <FlatList
            ListHeaderComponentStyle={{alignSelf: 'stretch'}}
            ListHeaderComponent={
              <View
                style={{
                  paddingHorizontal: 10,
                  marginBottom: 20,
                }}>
                <CustomTextInput
                  iconName={'magnify'}
                  placeholder="Search IDOs"
                />
              </View>
            }
            data={IDOData}
            numColumns={2}
            contentContainerStyle={{
              marginVertical: 10,
              paddingHorizontal: 10,
              alignItems: 'center',
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => {
              return <Text></Text>;
            }}
            renderItem={({item, index}) => {
              return <IDOItem item={item} index={index} />;
            }}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
