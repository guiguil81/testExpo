import Realm, { Results } from 'realm';

import { StoreType } from './interface';

// add
const addStore = (realm: Realm, store: StoreType) => {
  realm.write(() => {
    realm.create('Stores', store);
  });
};
const deleteStores = (realm: Realm, stores: (StoreType & object) | Results<StoreType & object>) => {
  realm.write(() => {
    if (stores) {
      realm.delete(stores);
    }
  });
};

export { addStore, deleteStores };
