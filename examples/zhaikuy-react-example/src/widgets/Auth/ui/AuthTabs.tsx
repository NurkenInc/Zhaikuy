import { useState } from 'react';
import { cn } from '@/shared/lib/utils/classes';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

type AuthActiveTab = 'register' | 'login';

export const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState<AuthActiveTab>('login');

  const toggleTab = () => {
    switch (activeTab) {
      case 'login':
        return setActiveTab('register')
      case 'register':
        return setActiveTab('login')
      default:
        return setActiveTab('login')
    }
  }

  return (
    <div className='w-[300px] mx-auto my-10'>
      <div className="btn-group w-full mb-2">
        <button 
          className={cn("btn basis-1/2", {"btn-active": activeTab === 'login'})}
          onClick={toggleTab}
        >
          Login
        </button> 
        <button 
          className={cn("btn basis-1/2", {"btn-active": activeTab === 'register'})}
          onClick={toggleTab}
        >
          Register
        </button>
      </div>
      {activeTab === 'login' ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
    </div>
  )
}