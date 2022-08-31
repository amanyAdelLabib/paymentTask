/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';

import  {SecondScreen} from './scr/Screens';



const App: () => Node = () => {

  return (
    <SafeAreaView>
      <SecondScreen />
      {/* <Text>ds</Text> */}
      {/* <Text>dsdds</Text> */}
    </SafeAreaView>
  );
};



export default App;
