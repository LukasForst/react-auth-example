import { useState } from 'react';
import { api, authorizedApi } from '../services/Api';
import { DefaultApi } from '../generated';
import useUser from './UseUser';

const defaultApi = api;

/**
 * Hook that gives access to DefaultApi.
 */
export default function useApi(): [DefaultApi, (api: DefaultApi | null) => void] {
  const [user] = useUser();
  const [api, setApi] = useState(user ? authorizedApi(user.token) : defaultApi);

  const setOrDefault = (api: DefaultApi | null) => {
    setApi(api ?? defaultApi);
  };
  // we have it like that (default null) because sometimes you might submit null as param
  return [api, setOrDefault];
}
