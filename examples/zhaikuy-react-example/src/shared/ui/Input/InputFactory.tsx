import { forwardRef } from 'react'
import { FieldType } from '@/shared/lib/types/form'
import { PasswordInput, Input } from './Input';

interface InputFactoryProps {
  type: FieldType
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputFactoryProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: FieldType;
  isError?: boolean
}

export const InputFactory = forwardRef<
  HTMLInputElement,
  InputFactoryProps
>((props: InputFactoryProps, ref) => {
  const {
    type,
    isError,
    ...rest
  } = props;

  switch (type) {
    case 'password':
      return <PasswordInput {...rest} isError={isError} type={type} ref={ref} />
    default:
      return <Input {...rest} isError={isError} type={type} ref={ref} />
  }
})