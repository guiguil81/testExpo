import { apiCDN } from '../../apiCDN';
import fetchOne from './fetchOne';

export const fileApi = apiCDN.injectEndpoints({
  endpoints: (build) => ({
    fetchOneFile: fetchOne(build),
  }),
  overrideExisting: false,
});

export const { useLazyFetchOneFileQuery } = fileApi;
