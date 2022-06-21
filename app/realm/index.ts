import { createRealmContext } from '@realm/react';

import { RealmDatabaseName } from '../config';
import Items from './items';
import { Stores } from './stores';
import { Tickets } from './tickets';

const config = {
  path: RealmDatabaseName,
  schema: [Tickets, Items, Stores],
};

const RealmContext = createRealmContext(config);
const { useQuery, useRealm, useObject, RealmProvider } = RealmContext;

export { useQuery, useRealm, useObject, RealmProvider };
