import { createContext } from 'react'
import { User, BaseCredentials, ExtendedCredentials } from '@/shared/lib/validators/user'

export type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated'

interface IAuthContext {
  status: AuthStatus
  user: User | null
  loginWithCredentials: (credentials: BaseCredentials) => void
  signupWithCredentials: (credentials: ExtendedCredentials) => void
  logout: () => void
}

export const AuthContext = createContext<IAuthContext>({
  status: 'checking',
  user: null,
  loginWithCredentials: () => {},
  signupWithCredentials: () => {},
  logout: () => {}  
});
