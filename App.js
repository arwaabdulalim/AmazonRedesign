/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Router from './App/config/Navigation';

/// NEW
import {Provider} from 'react-redux';
import store from './App/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const App = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <StatusBar translucent backgroundColor="#232f3e" />
        </SafeAreaView>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
