import { StoreType } from '../stores';

type TicketType = {
  tkid: string;
  tsid: string;
  idSignature: string;
  generateAt: string;
  items: [
    {
      name: string;
      price: number;
      quantity: number;
      tva: number;
    }
  ];
  haveGuarantee: boolean;
  store: StoreType;
};
export type { TicketType };
