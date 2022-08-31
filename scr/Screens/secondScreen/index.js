import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {
  RefreshControl,
  View,
  Text,
  FlatList,
  useColorScheme,
  LogBox,
} from 'react-native';
import {PaymentList} from '../../Components';
import styles from './styles';
import {List} from '../../Constant/List'
LogBox.ignoreAllLogs(); //Ignore all log notifications

export const SecondScreen = () => {
  const [allOfList, setAllOfList] = useState();
  return (
    <View style={{height: '100%'}}>
      <PaymentList
        data={List}
      />
    </View>
  );
};
