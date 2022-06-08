import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';
import Home from '../screens/Home';
import Test from '../screens/Test';
import Test2 from '../screens/Test2';
import CustomDrawer from '../components/common/CustomDrawer';
import {COLORS} from '../constants/theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const {theme} = useSelector(state => state.themeReducer);
  const TabsStack = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Test" component={Test} />
        <Tab.Screen name="Test2" component={Test2} />
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
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="TabsStack" component={TabsStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;

const styles = StyleSheet.create({});
