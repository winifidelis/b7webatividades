
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';

/*
const Teste = () => {
  return (
    <SafeAreaView>
      <Text>...</Text>
    </SafeAreaView>
  )
}
*/

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PersistGate>
  </Provider>
)

