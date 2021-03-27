import { useState } from 'react';
import { api } from '../services/Api';
import { DefaultApi } from '../generated';

const defaultApi = api;

/**
 * Hook that gives access to DefaultApi.
 */
export default function useApi(initial: DefaultApi | null = null): [DefaultApi, (api: DefaultApi | null) => void] {
  const [api, setApi] = useState(initial ?? defaultApi);

  const setOrDefault = (api: DefaultApi | null) => {
    setApi(api ?? defaultApi);
  };
  // we have it like that (default null) because sometimes you might submit null as param
  return [api, setOrDefault];
}
