import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../redux/actions';
import {COLORS} from '../constants/theme';
import Header from '../components/common/Header';

const Home = ({navigation}) => {
  const navigate = useNavigation();
  const {theme} = useSelector(state => state.themeReducer);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme == 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            theme == 'light' ? COLORS.background : COLORS.backgroundDark,
        }}>
        <Header toggleDrawer={() => navigation.toggleDrawer()} />
        <View
          style={{
            padding: 20,
            flex: 1,
          }}>
          <TouchableOpacity onPress={changeTheme}>
            <Text style={{color: theme == 'light' ? 'black' : 'white'}}>
              Change theme {theme}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
