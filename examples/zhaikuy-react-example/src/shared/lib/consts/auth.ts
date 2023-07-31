import { Field } from '../types/form'

type SignUpFields = 'password' | 'email' | 'confirmPassword'

export const signUpFormFields: Field<SignUpFields>[]  = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'jonhsmith@gmail.com',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Topsecret=21',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm password',
    placeholder: 'Topsecret=21',
    type: 'password',
  },
]

type LoginFields = 'email' | 'password'


export const loginFormFields: Field<LoginFields>[]  = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'jonhsmith@gmail.com',
    type: 'text',
    description: 'Your email address'
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'topsecret=21',
    type: 'password',
    description: 'This is your password. Do you remember it?'
  },
]