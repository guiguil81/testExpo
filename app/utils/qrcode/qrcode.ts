import { TicketType } from '../../realm/tickets';
import { decompress } from './decompress';
import verifySignature from './signature';

const publicKey = 'pgZHdbGNjamrM1xryhwv061zqd+4dspxf9wozqhBMLs=';

const readQrCode = (
  qrCode: string,
  callBack: (response: { error: number; data: TicketType | null; api: boolean }) => void
) => {
  try {
    const dataUrlWithoutHeader = qrCode.split('?')[1];

    decompress(dataUrlWithoutHeader, (response) => {
      if (response.error) {
        callBack({ error: 2, data: null, api: false });
      }

      if (typeof response.data === 'string') {
        const qrcodeValue = JSON.parse(response.data);

        if (qrcodeValue.items) {
          const verifySign = verifySignature(publicKey, qrcodeValue.tkid, qrcodeValue.idSignature);

          if (verifySign) {
            callBack({ data: qrcodeValue, api: false, error: 0 });
          } else {
            callBack({ error: 3, data: null, api: false });
          }
        } else {
          callBack({ error: 0, data: qrcodeValue, api: true });
        }
      } else {
        callBack({ error: 4, data: null, api: false });
      }
    });
  } catch {
    callBack({ error: 1, data: null, api: false });
  }
};

const readApiQrCode = (
  qrCode: string,
  callBack: (response: { error: number; data: TicketType | null }) => void
) => {
  try {
    decompress(qrCode, (response) => {
      if (response.error) {
        callBack({ error: 2, data: null });
      }

      if (typeof response.data === 'string') {
        const qrcodeValue = JSON.parse(response.data);

        callBack({ error: 0, data: qrcodeValue });
      } else {
        callBack({ error: 4, data: null });
      }
    });
  } catch {
    callBack({ error: 1, data: null });
  }
};

export { readQrCode, readApiQrCode };
