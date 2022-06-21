import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Controller from './controller';
import { RealmProvider } from './realm';
import { store, persistor } from './store';

export default function MainApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RealmProvider>
          <Controller />
        </RealmProvider>
      </PersistGate>
    </Provider>
  );
}
