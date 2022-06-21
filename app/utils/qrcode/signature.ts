import { Buffer } from 'buffer';
import { eddsa as EdDSA } from 'elliptic';

const verifySignature = (publicKey: string, msgHash: string, signature: string) => {
  try {
    const ed25519 = new EdDSA('ed25519');
    const publicKeyHex = Buffer.from(publicKey, 'base64').toString('hex');

    const key = ed25519.keyFromPublic(publicKeyHex);
    return key.verify(Buffer.from(msgHash), Buffer.from(signature, 'base64').toString('hex'));
  } catch {
    return false;
  }
};

export default verifySignature;
