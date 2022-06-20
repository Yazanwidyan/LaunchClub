import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {assets, COLORS, SHADOWS} from '../../constants';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.5;

const images = [
  assets.nft02,
  assets.nft03,
  assets.nft04,
  assets.nft05,
  assets.nft06,
  assets.nft07,
];
const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
}));

const Carousel = () => {
  const scrollx = React.useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Animated.FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollx}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollx.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{
                width,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.backgroundDark,
              }}>
              <View
                style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  overflow: 'hidden',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Animated.Image
                  style={{
                    width: ITEM_WIDTH * 1.4,
                    height: ITEM_HEIGHT,
                    resizeMode: 'contain',
                    borderRadius: 10,
                    transform: [
                      {
                        translateX,
                      },
                    ],
                  }}
                  source={item.photo}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Carousel;

const styles = StyleSheet.create({});
