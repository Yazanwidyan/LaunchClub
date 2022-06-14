import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {assets, COLORS, SHADOWS} from '../../constants';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ExploreLaunchpads = ({item}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        width: 110,
        height: 110,
        ...SHADOWS.dark,
        shadowColor: theme == 'light' ? COLORS.gray : COLORS.black,
        padding: 5,
        marginRight: 12,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.backgroundDark,
        borderRadius: 10,
      }}
      onPress={() => {
        navigation.navigate('LaunchpadDetails');
      }}>
      <View>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 10}}
          source={item.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ExploreLaunchpads;

const styles = StyleSheet.create({});
