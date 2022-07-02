import React, {useState} from 'react';
import CustomText from './CustomText';
import {TouchableOpacity, View} from 'react-native';
import {SIZES} from '../../constants';

const MoreLess = ({children}) => {
  const [isMore, setIsMore] = useState(false);

  return (
    <View style={{marginBottom: 20}}>
      <CustomText size={SIZES.small} grayText>
        {isMore ? children : children.substr(0, 99)}{' '}
      </CustomText>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setIsMore(!isMore)}>
        <CustomText size={SIZES.small} grayText>
          {isMore ? '  - show less' : ' + show more'}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default MoreLess;
