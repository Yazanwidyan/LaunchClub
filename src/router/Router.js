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
import Schedule from '../screens/Schedule';
import IDO from '../screens/IDO';
import Notifications from '../screens/Notifications';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const {theme} = useSelector(state => state.themeReducer);

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
        }}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Launchpads" component={Launchpads} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="IDO" component={IDO} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <StatusBar
        backgroundColor={
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark
        }
        barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen
            options={{gestureEnabled: false}}
            name="TabsStack"
            component={TabsStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;

const styles = StyleSheet.create({});
