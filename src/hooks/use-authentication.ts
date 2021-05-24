import { useContext } from 'react';
import AuthenticationContext from '../contexts/authentication';
import Authentication from '../types/authentication';

export default function useAuthentication(): Authentication {
  const value: Authentication | null = useContext(AuthenticationContext);
  if (value === null) {
    throw new Error('The Authentication context was not mounted.');
  }
  return value;
}
