import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../components/UI/CustomText';
import Header from '../components/common/Header';
import IDOItem from '../components/IDO/IDOItem';
import {COLORS, IDOData, SHADOWS} from '../constants';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {generateDate} from '../constants/Date';
import {useSelector} from 'react-redux';

const Calendars = () => {
  const {theme} = useSelector(state => state.theme);
  const generatedDate = generateDate();
  const [date, setDate] = useState({
    [generatedDate]: {
      selected: true,
    },
  });

  const onSelectDate = ({dateString}) => {
    setDate({
      [dateString]: {
        selected: true,
      },
    });
    console.log(dateString);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Calendar'} />

      <FlatList
        ListHeaderComponentStyle={{alignSelf: 'stretch'}}
        ListHeaderComponent={
          <View style={{marginVertical: 20}}>
            <Calendar
              style={theme == 'light' ? {...SHADOWS.light} : {...SHADOWS.dark}}
              theme={{
                textSectionTitleColor: COLORS.primary,
                arrowColor: theme == 'light' ? COLORS.black : COLORS.white,
                selectedDayBackgroundColor: COLORS.primary,
                monthTextColor: theme == 'light' ? COLORS.black : COLORS.white,
                dayTextColor: theme == 'light' ? COLORS.black : COLORS.white,
                calendarBackground:
                  theme == 'light' ? COLORS.secondary : COLORS.secondaryDark,
              }}
              markedDates={date}
              initialDate={'2022-06-16'}
              onDayPress={day => {
                onSelectDate(day);
              }}
            />
          </View>
        }
        ListFooterComponent={<View style={{marginVertical: 50}}></View>}
        contentContainerStyle={{paddingHorizontal: 20, alignItems: 'center'}}
        numColumns={2}
        data={IDOData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <IDOItem item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Calendars;

const styles = StyleSheet.create({});
