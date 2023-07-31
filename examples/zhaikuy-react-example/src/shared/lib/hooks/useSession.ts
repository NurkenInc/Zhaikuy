import { useContext } from 'react';
import { AuthContext } from '@/app/providers/AuthProvider';

export function useSession() {
  const { 
    loginWithCredentials, 
    logout,
    signupWithCredentials,
    status,
    user 
  } = useContext(AuthContext);

  return {
    login: loginWithCredentials,
    signup: signupWithCredentials,
    logout,
    status,
    user,
  }
}