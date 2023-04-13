import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import Toast from 'react-native-toast-message';
LogBox.ignoreAllLogs();

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#FFF"
            translucent
          />
        </SafeAreaView>
        <View style={styles.container}>
          <Routes />
          <Toast />
        </View>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
