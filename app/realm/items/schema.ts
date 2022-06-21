import Realm from 'realm';

class Items extends Realm.Object {
  name!: string;
  price!: number;
  quantity!: number;
  tva!: number;

  static generate(name: string, price: number, quantity: number, tva: number) {
    return {
      name,
      price,
      quantity,
      tva,
    };
  }

  static schema = {
    name: 'Items',
    properties: {
      name: 'string',
      price: 'int',
      quantity: 'int',
      tva: 'int',
    },
  };
}

export default Items;
