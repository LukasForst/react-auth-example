import useLocalStorage from './UseLocalStorage';
import { UserLoginResponseDtoOut } from '../generated';

export default function useUser() {
  return useLocalStorage<UserLoginResponseDtoOut>('user');
}
