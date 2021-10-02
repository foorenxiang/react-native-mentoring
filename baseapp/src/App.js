// eslint-disable-next-line no-undef
if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import Reactotron from 'reactotron-react-native';
import React from 'react';
import store from './utils/redux/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <>
    {/* eslint-disable-next-line no-undef */}
    {__DEV__ && Reactotron.log('hello rendering world')}
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);
