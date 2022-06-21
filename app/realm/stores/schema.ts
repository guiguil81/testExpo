import Realm from 'realm';

class Stores extends Realm.Object {
  tsid!: string;
  name!: string;

  static generate(tsid: string, name: string) {
    return {
      tsid,
      name,
    };
  }

  static schema = {
    name: 'Stores',
    properties: {
      tsid: 'string',
      name: 'string',
    },
    primaryKey: 'tsid',
  };
}

export default Stores;
