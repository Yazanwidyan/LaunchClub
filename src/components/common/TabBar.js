import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {BottomMenuItem} from './BottomMenuItem';
import {useSelector} from 'react-redux';
import CustomText from '../UI/CustomText';
import Icon from '../UI/Icon';

export const TabBar = ({state, descriptors, navigation}) => {
  const [translateValue] = useState(new Animated.Value(0));
  const {theme} = useSelector(state => state.theme);

  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const animateSlider = index => {
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateSlider(state.index);
  }, [state.index]);

  return (
    <View
      style={[
        style.tabContainer,
        {
          width: totalWidth,
          borderTopColor: '#1E1E30',
          borderTopWidth: 1,
          backgroundColor:
            theme == 'light' ? COLORS.background : COLORS.secondaryDark,
        },
      ]}>
      <View style={{flexDirection: 'row'}}>
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{translateX: translateValue}],
              width: tabWidth - 60,
            },
          ]}
        />

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
              navigation.navigate(route.name);
            }

            animateSlider(index);
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}
              key={index}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 3,
                }}>
                {label == 'Home' ? (
                  <Icon
                    library={'AntDesign'}
                    nameIcon="home"
                    sizeIcon={22}
                    colorIcon={
                      isFocused
                        ? theme == 'dark'
                          ? COLORS.white
                          : COLORS.black
                        : COLORS.gray
                    }
                  />
                ) : label == 'Search' ? (
                  <Icon
                    library={'Feather'}
                    nameIcon="search"
                    sizeIcon={22}
                    colorIcon={
                      isFocused
                        ? theme == 'dark'
                          ? COLORS.white
                          : COLORS.black
                        : COLORS.gray
                    }
                  />
                ) : label == 'Calendar' ? (
                  <Icon
                    library={'Entypo'}
                    nameIcon="calendar"
                    sizeIcon={22}
                    colorIcon={
                      isFocused
                        ? theme == 'dark'
                          ? COLORS.white
                          : COLORS.black
                        : COLORS.gray
                    }
                  />
                ) : label == 'Watchlist' ? (
                  <Icon
                    library={'AntDesign'}
                    nameIcon="hearto"
                    sizeIcon={22}
                    colorIcon={
                      isFocused
                        ? theme == 'dark'
                          ? COLORS.white
                          : COLORS.black
                        : COLORS.gray
                    }
                  />
                ) : label == 'Whitelist' ? (
                  <Icon
                    library={'Octicons'}
                    nameIcon="list-unordered"
                    sizeIcon={22}
                    colorIcon={
                      isFocused
                        ? theme == 'dark'
                          ? COLORS.white
                          : COLORS.black
                        : COLORS.gray
                    }
                  />
                ) : null}
                <CustomText
                  size={SIZES.small}
                  font={FONTS.medium}
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
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    height: 70,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    position: 'absolute',
    bottom: 0,
  },
  slider: {
    height: 4,
    position: 'absolute',
    top: 0,
    left: 29,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: COLORS.primary,
  },
});
