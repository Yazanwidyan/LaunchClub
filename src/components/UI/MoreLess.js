import React, {useState} from 'react';
import CustomText from './CustomText';
import {TouchableOpacity, View} from 'react-native';

const MoreLess = ({children}) => {
  const [isMore, setIsMore] = useState(false);

  return (
    <View style={{marginBottom: 20}}>
      <CustomText grayText>
        {isMore ? children : children.substr(0, 99)}{' '}
      </CustomText>
      <TouchableOpacity onPress={() => setIsMore(!isMore)}>
        <CustomText grayText>
          {isMore ? '  - show less' : ' + show more'}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default MoreLess;
