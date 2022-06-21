import { api } from '../../api';
import deleteOne from './deleteOne';
import fetchOne from './fetchOne';

export const qrcodeApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchOneQrCode: fetchOne(build),
    deleteOneQrCode: deleteOne(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchOneQrCodeQuery, useLazyDeleteOneQrCodeQuery } = qrcodeApi;
