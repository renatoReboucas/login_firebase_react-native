import React from 'react';
import {StyleSheet, StatusBar, Platform} from 'react-native';

import Routes from './src/Routes';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#353f49" />
      <Routes />
    </>
  );
};

export default App;
