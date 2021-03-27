import { Configuration, DefaultApi } from '../generated';

export const base = process.env.BASE_PATH ?? 'https://covid-vaxx.stg.mild.blue';
export const api = new DefaultApi(new Configuration({ basePath: base }));

export const authorizedApi = (token: string) => new DefaultApi(new Configuration({
  basePath: base,
  accessToken: token
}));
