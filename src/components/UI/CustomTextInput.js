import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

const CustomTextInput = ({
  label,
  iconName,
  error,
  password,
  placeholder,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  const {theme} = useSelector(state => state.themeReducer);

  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            backgroundColor:
              theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
            borderColor: error
              ? 'red'
              : isFocused
              ? 'transparent'
              : 'transparent',
            alignItems: 'center',
            borderRadius: 10,
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: COLORS.gray, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.white, flex: 1}}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: 'blue', fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: 'red', fontSize: 12}}>{error}</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.gray,
  },
  inputContainer: {
    height: 55,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default CustomTextInput;
