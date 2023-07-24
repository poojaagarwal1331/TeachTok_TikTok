import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootContainer from './RootContainer';
import { persistor, store } from './app/redux/store';
import { AppStyles } from './app/utils';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={AppStyles.mainContainerStyle} edges={['top']}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootContainer />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
