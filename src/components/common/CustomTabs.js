import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {assets, COLORS, FONTS, SHADOWS, SIZES} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import CustomText from '../UI/CustomText';

const CustomTabs = ({state, descriptors, navigation}) => {
  const {theme} = useSelector(state => state.theme);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: theme == 'light' ? COLORS.line : COLORS.lineDark,
        borderTopWidth: 1,
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        paddingHorizontal: 40,
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
            activeOpacity={0.7}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              paddingBottom: 15,
              alignItems: 'center',
            }}>
            {label == 'Home' ? (
              <Icon
                name="home-outline"
                size={26}
                style={{
                  paddingTop: 13,
                  borderTopColor: isFocused ? COLORS.primary : 'red',
                  borderTopWidth: isFocused ? 3 : 0,
                }}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : label == 'Search' ? (
              <Icon
                name="search-outline"
                size={26}
                style={{
                  paddingTop: 13,
                  borderTopColor: isFocused ? COLORS.primary : 'red',
                  borderTopWidth: isFocused ? 3 : 0,
                }}
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
                size={26}
                style={{
                  paddingTop: 13,
                  borderTopColor: isFocused ? COLORS.primary : 'red',
                  borderTopWidth: isFocused ? 3 : 0,
                }}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : label == 'Watchlist' ? (
              <Icon
                name="heart-outline"
                size={26}
                style={{
                  paddingTop: 13,
                  borderTopColor: isFocused ? COLORS.primary : 'red',
                  borderTopWidth: isFocused ? 3 : 0,
                }}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : label == 'Profile' ? (
              <Icon
                name="person-circle-outline"
                size={26}
                style={{
                  paddingTop: 13,
                  borderTopColor: isFocused ? COLORS.primary : 'red',
                  borderTopWidth: isFocused ? 3 : 0,
                }}
                color={
                  isFocused
                    ? theme == 'dark'
                      ? COLORS.white
                      : COLORS.black
                    : COLORS.gray
                }
              />
            ) : // <Image
            //   source={assets.person01}
            //   style={{
            //     width: 26,
            //     height: 26,
            //     resizeMode: 'cover',
            //     borderRadius: 30,
            //   }}
            // />
            null}
            <CustomText
              size={SIZES.small}
              style={{
                marginTop: 7,
                color: isFocused
                  ? theme == 'dark'
                    ? COLORS.white
                    : COLORS.black
                  : COLORS.gray,
              }}>
              {label}
            </CustomText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabs;

const styles = StyleSheet.create({});
