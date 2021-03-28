import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { DefaultApi, LoginDtoIn, UserLoginResponseDtoOut } from '../generated';
import { authorizedApi } from '../services/Api';
import useApi from './UseApi';
import useRouter from './UseRouter';
import { routes } from '../modules/Routing';
import useUser from './UseUser';

// @ts-ignore it's going to be replaced after initialization so we don't need to initialize that
const authContext = createContext<UserService>(undefined);

/**
 * Top level context react element that provides context to the application.
 *
 * See https://usehooks.com/useAuth.
 */
export function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

/**
 * Provides authorization context.
 */
export function useAuthContext() {
  return useContext(authContext);
}

/**
 * Default type used as auth.
 */
interface UserService {
  user: UserLoginResponseDtoOut | null
  login: (login: LoginDtoIn) => Promise<UserLoginResponseDtoOut>
  logout: () => Promise<void>
  api: DefaultApi
}

/**
 * Creates UserService from current context.
 */
function useProvideAuth(): UserService {
  const [user, storeUser, deleteUser] = useUser();
  const [api, setApi] = useApi();

  const login = async (login: LoginDtoIn) => {
    return api.apiAdminLoginPost({ loginDtoIn: login })
    .then(user => {
      storeUser(user);
      setApi(authorizedApi(user.token));
      return user;
    });
  };

  const logout = async () => {
    deleteUser();
    setApi(null);
  };

  return {
    user,
    login,
    logout,
    api
  };
}

/**
 * Ensures that the application is authenticated, otherwise redirects to redirectUrl.
 */
export function useRequireAuth(redirectUrl = routes.login) {
  const auth = useAuthContext();
  const router = useRouter();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === null) {
      router.push(redirectUrl, { state: { from: router.location } });
    }
  }, [auth, router, redirectUrl]);

  return auth;
}
