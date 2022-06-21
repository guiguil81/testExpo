import Realm, { Results } from 'realm';

import { TicketType } from './interface';

const addTicket = (realm: Realm, ticket: TicketType) => {
  realm.write(() => {
    realm.create('Tickets', ticket);
  });
};
const deleteTickets = (
  realm: Realm,
  tickets: (TicketType & object) | Results<TicketType & object>
) => {
  realm.write(() => {
    if (tickets) {
      realm.delete(tickets);
    }
  });
};

export { addTicket, deleteTickets };
