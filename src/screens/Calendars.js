import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IDOData, SIZES} from '../constants';
import {Calendar} from 'react-native-calendars';
import {generateDate} from '../constants/Date';
import {useSelector} from 'react-redux';
import IDOBItem from '../components/IDO/IDOBItem';

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
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        marginVertical: 10,
        paddingBottom: 40,
      }}>
      <FlatList
        ListHeaderComponentStyle={{alignSelf: 'stretch'}}
        ListHeaderComponent={
          <View style={{marginVertical: 20}}>
            <Calendar
              theme={{
                textSectionTitleColor: COLORS.primary,
                arrowColor: theme == 'light' ? COLORS.black : COLORS.white,
                selectedDayBackgroundColor: COLORS.primary,
                monthTextColor: theme == 'light' ? COLORS.black : COLORS.white,
                dayTextColor: theme == 'light' ? COLORS.black : COLORS.white,
                calendarBackground:
                  theme == 'light' ? COLORS.background : COLORS.backgroundDark,
              }}
              markedDates={date}
              initialDate={generatedDate}
              onDayPress={day => {
                onSelectDate(day);
              }}
            />
          </View>
        }
        ListFooterComponent={<View style={{marginVertical: 20}}></View>}
        data={IDOData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <IDOBItem item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Calendars;

const styles = StyleSheet.create({});
