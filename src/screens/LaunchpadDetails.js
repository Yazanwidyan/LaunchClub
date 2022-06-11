import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import {assets, IDOData, SIZES} from '../constants';
import IDOItem from '../components/IDO/IDOItem';
import CustomTextInput from '../components/UI/CustomTextInput';
import CustomText from '../components/UI/CustomText';
import DetailsCmp from '../components/common/DetailsCmp';

const LaunchpadDetails = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FlatList
          StickyHeaderComponent={() => {
            return (
              <View>
                <Text>sasjhagjsfgjahls</Text>
              </View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <>
                <DetailsCmp />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <CustomText size={SIZES.large}>Open</CustomText>
                  <CustomText grayText>Upcomming</CustomText>
                  <CustomText grayText>Closed</CustomText>
                </View>
                <View style={{paddingHorizontal: 20, marginBottom: 20}}>
                  <CustomTextInput
                    iconName={'magnify'}
                    placeholder="Search IDOs"
                  />
                </View>
              </>
            );
          }}
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
    </SafeAreaView>
  );
};

export default LaunchpadDetails;

const styles = StyleSheet.create({});
