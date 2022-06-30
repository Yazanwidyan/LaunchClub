import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#F0473A',
  background: '#f2f3f5',
  backgroundDark: '#202326',
  secondary: '#ffff',
  secondaryDark: '#191B1E',
  white: '#FFFFFFDE',
  gray: '#94A3B8',
  black: '#000000',
  black100: '#121212',
  white100: '#f0f0f0',
  line: '#E4E4E4',
  lineDark: '#22292F',
  red: '#FF3743',
  blue: '#2568f5',
};

export const SIZES = {
  xSmall: 8,
  base: 10,
  font: 14,

  small: 12,
  regular: 10,
  medium: 14,
  bold: 16,
  large: 18,
  extraLarge: 24,
  padding: 16,
  radius: 3,
  width,
  height,
};

export const FONTS = {
  bold: 'Poppins-Bold',
  semiBold: 'Poppins-SemiBold',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  light: 'Poppins-Light',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 11,
  },
  dark: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 11,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
};
