import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import {COLORS, PadsData, assets, tabs_details} from './constants';

const HEADER_HEIGHT = 350;

const tabs_details = tabs_details.map(tabs_details => ({
  ...tabs_details,
  ref: React.createRef(),
}));

const Tabs = ({screenX}) => {
  const [measureLayout, setMeasureLayout] = useState([]);
  const containerRef = useRef();

  return (
    <View ref={containerRef} style={{flex: 1, flexDirection: 'row'}}>
      {/* tab indicator */}

      {/* tabs */}

      {tabs_details.map((item, index) => {
        return (
          <TouchableOpacity
            key={`Tab-${index}`}
            ref={item.ref}
            style={{
              flex: 1,
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Recipe = () => {
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderContent = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* tabs */}

        <View
          style={{
            height: 60,
            backgroundColor: 'red',
          }}>
          <Tabs scrollX={scrollX} />
        </View>

        {/* divider */}

        {/* content */}

        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={100}
          decelerationRate="fast"
          keyboardDismissMode="on-drag"
          showsHorizontalScrollIndicator={false}
          data={tabs_details}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View style={{width: 150}}>
                {index == 0 && <Text>open</Text>}
                {index == 1 && <Text>close</Text>}
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        {/* backgroundImage */}

        <Animated.Image
          source={assets.nft02}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        {/* createo card */}

        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [[0, 0, 100]],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text>aoiusygfgihuoipo</Text>
        </Animated.View>
      </View>
    );
  };

  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}>
        {/* screen overlay */}

        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black',
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}></Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text>by</Text>
          <Text>name</Text>
        </Animated.View>

        {/* back btn */}

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.gray,
            backgroundColor: 'rgba(21, 42, 55, 0.5)',
          }}></TouchableOpacity>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 130,
          width: 50,
          backgroundColor: 'red',
        }}></View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={PadsData}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* header */}
            {renderRecipeCardHeader()}

            {/* info */}

            {renderRecipeInfo()}

            {/* title */}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}>
            {/* Icon */}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.gray,
              }}>
              <Image
                source={item.image}
                style={{
                  height: 40,
                  width: 40,
                }}
              />

              {/* description */}

              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                }}>
                <Text style={{}}>{item.name}</Text>
              </View>
            </View>
          </View>
        )}
      />

      {/* header bar */}

      {renderHeaderBar()}
    </View>
  );
};
export default Recipe;
