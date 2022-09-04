import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {
  RefreshControl,
  View,
  Text,
  FlatList,
  useColorScheme,
  LogBox,
} from 'react-native';
import {PaymentItems, PaymentTotal} from '../../Components';
import styles from './styles';
LogBox.ignoreAllLogs(); //Ignore all log notifications

export const PaymentList = ({data}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [totalSlectedPay, setTotalSelectedPay] = useState(0);
  let totalVal=0;
  const formattedAllPaymentlist = useMemo(
    () => data.sort((a, b) => a.dueDate < b.dueDate),
    [data],
  );

  return (
    <View style={styles.container}>
      <PaymentTotal totalDues={totalAmount} totalPay={totalSlectedPay} />

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        data={formattedAllPaymentlist}
        renderItem={({item, index}) => (
          <PaymentItems
            post={item}
            index={index}
            total={val => (totalVal = totalVal + val)}
            onPressBtn={setSelectedIndex}
            selectedIndex={selectedIndex}
            onPressTotal={val => setTotalSelectedPay(current => current + val)}
          />
        )}
        extraData={data}
      />
    </View>
  );
};
