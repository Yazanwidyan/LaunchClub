import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import Home from '../screens/Home';
import CustomDrawer from '../components/common/CustomDrawer';
import {COLORS} from '../constants/theme';
import CustomTabs from '../components/common/CustomTabs';
import Launchpads from '../screens/Launchpads';
import Calendars from '../screens/Calendars';
import IDO from '../screens/IDO';
import Notifications from '../screens/Notifications';
import LaunchpadDetails from '../screens/LaunchpadDetails';
import IDODetails from '../screens/IDODetails';
import Watchlist from '../screens/Watchlist';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const {theme} = useSelector(state => state.theme);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme == 'light' ? COLORS.background : COLORS.backgroundDark,
    },
  };
  const TabsStack = () => {
    return (
      <Tab.Navigator
        tabBar={props => <CustomTabs {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Launchpads" component={Launchpads} />
        <Tab.Screen name="Calendar" component={Calendars} />
        <Tab.Screen name="IDOs" component={IDO} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
      />

      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="TabsStack" component={TabsStack} />
          <Stack.Screen name="LaunchpadDetails" component={LaunchpadDetails} />
          <Stack.Screen name="IDODetails" component={IDODetails} />
          <Stack.Screen name="Watchlist" component={Watchlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
