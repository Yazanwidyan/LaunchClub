import {
  Animated,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants';
import {Portal} from 'react-native-paper';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ChevronIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomSheet = ({show, onDismiss, enableBackdropDismiss, children}) => {
  const bottomSheetHeight = SIZES.height * 0.5;
  const deviceWidth = SIZES.width;
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
  const [open, setOpen] = useState(show);

  const {theme} = useSelector(state => state.theme);

  const onGesture = event => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };

  const onGestureEnd = event => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Pressable
        onPress={enableBackdropDismiss ? onDismiss : undefined}
        style={styles.backDrop}
      />

      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: bottom,
            backgroundColor:
              theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
          },
        ]}>
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View
            style={[
              styles.header,
              {
                backgroundColor:
                  theme == 'light' ? COLORS.background : COLORS.backgroundDark,
              },
            ]}>
            <TouchableOpacity onPress={onDismiss}>
              <ChevronIcon
                name="chevron-down"
                color={
                  theme === 'light' ? COLORS.secondaryDark : COLORS.secondary
                }
                size={25}
              />
            </TouchableOpacity>
          </View>
        </PanGestureHandler>
        {children}
      </Animated.View>
    </Portal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    ...SHADOWS.dark,
    overflow: 'hidden',
  },
  header: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: 'rgba(0,0,0, 0.8)',
  },
});
