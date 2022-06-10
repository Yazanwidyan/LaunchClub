export const COLORS = {
  primary: '#76A9FF',
  background: '#ffff',
  backgroundDark: '#202122',
  secondary: '#f2f3f5',
  secondaryDark: '#1A1A1A',
  white: '#FFF',
  gray: '#858992',
  black: '#000000',
  black100: '#121212',
  white100: '#f0f0f0',
};

export const SIZES = {
  xSmall: 8,
  base: 10,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: 'InterBold',
  semiBold: 'InterSemiBold',
  medium: 'InterMedium',
  regular: 'InterRegular',
  light: 'InterLight',
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
