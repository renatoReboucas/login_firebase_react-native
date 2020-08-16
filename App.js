import React from 'react';
import {StyleSheet, StatusBar, Platform} from 'react-native';

import Routes from './src/Routes';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor="#000"
      />
      <Routes />
    </>
  );
};

export default App;
