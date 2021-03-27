import { Configuration, DefaultApi } from '../generated';

export const base = 'https://covid-vaxx.stg.mild.blue';
export const api = new DefaultApi(new Configuration({ basePath: base }));

export const authorizedApi = (token: string) => new DefaultApi(new Configuration({
  basePath: base,
  apiKey: token
}));
