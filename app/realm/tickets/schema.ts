import Realm from 'realm';

import { StoreType } from '../stores';

class Tickets extends Realm.Object {
  tkid!: string;
  tsid!: string;
  idSignature!: string;
  generateAt!: string;
  items!: [
    {
      name: string;
      price: number;
      quantity: number;
      tva: number;
    }
  ];
  haveGuarantee!: boolean;
  store!: StoreType;

  static generate(
    tkid: string,
    tsid: string,
    idSignature: string,
    generateAt: string,
    items: [
      {
        name: string;
        price: number;
        quantity: number;
        tva: number;
      }
    ],
    haveGuarantee: boolean,
    store: StoreType
  ) {
    return {
      tkid,
      tsid,
      idSignature,
      generateAt,
      items,
      haveGuarantee,
      store,
    };
  }

  static schema = {
    name: 'Tickets',
    properties: {
      tkid: 'string',
      tsid: 'string',
      idSignature: 'string',
      generateAt: 'string',
      items: 'Items[]',
      haveGuarantee: 'bool?',
      store: 'Stores',
    },
    primaryKey: 'tkid',
  };
}

export default Tickets;
