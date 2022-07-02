import * as React from 'react';
import {View, useWindowDimensions, FlatList} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import CustomText from './UI/CustomText';

const Test2 = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const FirstRoute = () => (
    <FlatList
      data={data}
      renderItem={({item}) => <CustomText size={80}>{item}</CustomText>}
    />
  );

  const data = ['1', '2', '3', '4'];

  const SecondRoute = () => (
    <FlatList
      data={data}
      renderItem={({item}) => <CustomText>{item}</CustomText>}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={{height: 200}}
      initialLayout={{width: layout.width}}
    />
  );
};

export default Test2;
