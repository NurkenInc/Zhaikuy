import { ReactNode, useEffect, useState } from 'react'
import { AuthContext, AuthStatus } from '../config/context'
import { BaseCredentials, ExtendedCredentials, User } from '@/shared/lib/validators/user'
import { useCustomToast } from '@/shared/lib/hooks/useCustomToast'
import { HttpStatusCode } from '@/shared/lib/types/network'
import { $api } from '@/shared/api'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const {
    children,
  } = props;

  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<AuthStatus>('checking')
  const { loadingToast, successToast, errorToast } = useCustomToast();

  const checkAuthenticationStatus = () => {
    const users = JSON.parse(localStorage.getItem('auth')!) as ExtendedCredentials[]
    const existingUser = users?.find(user => user.authenticated);
    if (existingUser) {
      setUser(existingUser);
      return setStatus('authenticated');
    }

    setStatus('unauthenticated');
  }

  useEffect(() => {
    checkAuthenticationStatus();
  }, [])

  const loginWithCredentials = async (credentials: BaseCredentials) => {
    loadingToast('Login', 'Checking provided credentials');
    const response = await $api.post<BaseCredentials, User>('/login', credentials);
    
    if (response.status !== HttpStatusCode.OK) return errorToast('Login', 'Something went wrong');

    setUser(response.data);
    setStatus('authenticated');
    successToast('Login', 'Congrats! You successfully logged in!');
  }

  const signupWithCredentials = async (credentials: Omit<ExtendedCredentials, 'authenticated'>) => {
    loadingToast('Signing up', 'Checking provided credentials');
    const response = await $api.post<Omit<ExtendedCredentials, 'authenticated'>, User>('/register', credentials);
    
    if (response.status !== HttpStatusCode.OK) return errorToast('Signing up', 'Something went wrong');
    
    setUser(response.data);
    setStatus('authenticated');
    successToast('Signing up', 'Congrats! You are signed up successfully!');
  }
  
  const logout = async () => {
    loadingToast('Logout', 'Handling request');
    const response = await $api.post<null, User>('/logout', null);

    if (response.status !== HttpStatusCode.OK) return errorToast('Logout', 'Something went wrong');
    
    setUser(null);
    setStatus('unauthenticated');
    successToast('Logout', 'You logged out!');
  }

  return (
    <AuthContext.Provider value={{
      user,
      status,
      loginWithCredentials,
      logout,
      signupWithCredentials
    }}>
      {children}
    </AuthContext.Provider>
  )
}