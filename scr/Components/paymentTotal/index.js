import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {TouchableOpacity, View, Text, LogBox} from 'react-native';
// import {PaymentItems, NewsTag, SearchInput} from '../../Components';
import styles from './styles';
LogBox.ignoreAllLogs(); //Ignore all log notifications

export const PaymentTotal = ({totalDues, totalPay}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Total Dues</Text>
        <Text style={styles.secondText}>{Math.round(totalDues)}</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.mainText}>Pay</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Total To Pay</Text>
        <Text style={styles.secondText}>{Math.round(totalPay)}</Text>
      </View>
    </View>
  );
};
