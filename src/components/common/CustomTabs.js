import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const CustomTabs = ({state, descriptors, navigation}) => {
  const {theme} = useSelector(state => state.theme);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor:
          theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
        height: 70,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            {label == 'Home' ? (
              <Icon
                name="home-outline"
                size={23}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : label == 'Launchpads' ? (
              <Icon
                name="rocket-outline"
                size={23}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : label == 'Calendar' ? (
              <Icon
                name="ios-calendar-sharp"
                size={23}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : label == 'IDOs' ? (
              <Icon
                name="flame-outline"
                size={23}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : label == 'Notifications' ? (
              <Icon
                name="md-notifications-outline"
                size={23}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : null}
            <Text
              style={{
                marginTop: 7,
                fontSize: SIZES.small,
                color: isFocused
                  ? theme == 'dark'
                    ? COLORS.white
                    : COLORS.black
                  : COLORS.gray,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabs;

const styles = StyleSheet.create({});
