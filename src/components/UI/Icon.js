import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Icon = ({library, sizeIcon, nameIcon, colorIcon, props}) => {
  let Tag = Entypo;
  switch (library) {
    case 'Entypo': {
      Tag = Entypo;
      break;
    }
    case 'FontAwesome': {
      Tag = FontAwesome;
      break;
    }
    case 'FontAwesome5': {
      Tag = FontAwesome5;
      break;
    }
    case 'Fontisto': {
      Tag = Fontisto;
      break;
    }
    case 'Ionicons': {
      Tag = Ionicons;
      break;
    }
    case 'MaterialCommunityIcons': {
      Tag = MaterialCommunityIcons;
      break;
    }
    case 'EvilIcons': {
      Tag = EvilIcons;
      break;
    }
    case 'Feather': {
      Tag = Feather;
      break;
    }
    case 'Foundation': {
      Tag = Foundation;
      break;
    }
    case 'MaterialIcons': {
      Tag = MaterialIcons;
      break;
    }
    case 'Octicons': {
      Tag = Octicons;
      break;
    }
    case 'SimpleLineIcons': {
      Tag = SimpleLineIcons;
      break;
    }
    default: {
      Tag = AntDesign;
    }
  }
  return <Tag name={nameIcon} size={sizeIcon} color={colorIcon} {...props} />;
};

export default Icon;
