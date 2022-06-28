import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {assets, COLORS, SHADOWS, SIZES} from '../../constants';
import CustomText from '../UI/CustomText';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ExploreLaunchpads = ({item}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <View style={{alignItems: 'center', marginRight: 10}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: 80,
          height: 80,
          ...SHADOWS.dark,
          shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
          padding: 5,
          borderRadius: 50,
        }}
        onPress={() => {
          navigation.navigate('LaunchpadDetails', {item: item});
        }}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 50}}
          source={item.image}
        />
      </TouchableOpacity>
      <CustomText size={SIZES.small} style={{marginTop: 15}}>
        {item.name.substring(0, 12)}
        {item.name.length > 12 ? '...' : null}
      </CustomText>
    </View>
  );
};

export default ExploreLaunchpads;

const styles = StyleSheet.create({});
