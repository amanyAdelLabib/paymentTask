import React, {useCallback, useState, useEffect} from 'react';
import {Pressable, Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';

import styles from './styles';

export const PaymentItems = ({
  post,
  index,
  total,
  selectedIndex,
  onPressBtn,
  onPressTotal,
}) => {
  const [dateToday, setDayToday] = useState(new Date());
  useEffect(() => {
    total(post?.amount);
  }, [post]);

  const compareTwoDate = dateItem => {
    let selecteDate = new Date(dateItem);
    if (
      selecteDate.toISOString().split('T')[0] ==
      dateToday.toISOString().split('T')[0]
    )
      return true;
    else return false;
  };
  return (
    <View activeOpacity={1} style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.mainText}>Date:</Text>
        <Text style={styles.text}>
          {moment(post?.dueDate).format('HH:MM DD, MMMM yyy')}
        </Text>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.mainText}>Member Id :</Text>
        <Text style={styles.text}>{post?.accountId}</Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.mainText}>Amount :</Text>
        <Text style={styles.text}>{post?.amount}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.btn,
          {backgroundColor: selectedIndex + 1 == index ? '#06bcee' : 'gray'},
        ]}
        disabled={selectedIndex + 1 == index ? false : true}
        onPress={() => {
          onPressBtn(index);
          onPressTotal(post?.amount);
        }}>
        <Text style={styles.secondText}>Pay {index}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn2,
          {backgroundColor: !compareTwoDate(post?.dueDate) ? 'gray' : '#06bcee'},
        ]}
        disabled={!compareTwoDate(post?.dueDate)}>
        <Text style={styles.secondText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};
