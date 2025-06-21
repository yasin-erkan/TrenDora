import { StyleSheet } from 'react-native';
import React from 'react';
import RouteNavigator from './src/router/routeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
