import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import CustomText from '../components/UI/CustomText';
import Header from '../components/common/Header';

const Watchlist = () => {
  const watchlist = useSelector(state => state.watchlist);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(watchlist);
  }, []);

  const selectActiveTab = name => {
    if (name == 'launchpads') {
      setData(watchlist);
    } else {
      setData(watchlist);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Watchlist'} />
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => selectActiveTab('launchpads')}
          style={{marginHorizontal: 10}}>
          <CustomText>launchpads</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectActiveTab('ido')}>
          <CustomText>idos</CustomText>
        </TouchableOpacity>
      </ScrollView>
      {data.map(item => {
        return <CustomText>{item.id}</CustomText>;
      })}
    </SafeAreaView>
  );
};

export default Watchlist;

const styles = StyleSheet.create({});
