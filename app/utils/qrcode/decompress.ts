import { Buffer } from 'buffer';
// @ts-ignore
import zlib from 'react-zlib-js';

const decompress = (
  data: string,
  callBack: (response: { error: boolean; data: string | null }) => void
) => {
  try {
    const base64 = Buffer.from(data, 'base64');

    zlib.inflate(base64, {}, (errors: any, dataDecoded: any) => {
      if (errors) {
        callBack({ error: true, data: null });
      } else {
        callBack({ error: false, data: dataDecoded.toString() });
      }
    });
  } catch {
    callBack({ error: true, data: null });
  }
};

export { decompress };
