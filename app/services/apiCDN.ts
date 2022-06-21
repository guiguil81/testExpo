import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Config } from '../config';

const baseQuery = fetchBaseQuery({ baseUrl: Config.CDN });

const baseQueryWithInterceptor = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  const result: { error: { status: number }; data: any; meta: any } | any = await baseQuery(
    args,
    api,
    extraOptions
  );

  if (result.error && result.error.status === 401) {
    // here you can deal with 401 error
  }

  return {
    ...result,
    data: {
      ...result.data,
      etag: result.meta.response.headers.map.etag,
    },
  };
};

export const apiCDN = createApi({
  reducerPath: 'apiCDN',
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
