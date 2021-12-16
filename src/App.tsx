import React from 'react';
import { DAppProvider, BSC } from '@usedapp/core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'app/store';

import ThemeProvider from 'common/theme/Provider';

import Router from 'routes/Router';

const App: React.FC = () => (
  <DAppProvider config={{ readOnlyChainId: BSC.chainId }}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </DAppProvider>
);

export default App;
