import { forwardRef, useState } from 'react'
import { EyeOff, Eye } from 'lucide-react';
import { cn } from '@/shared/lib/utils/classes';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
}

export const PasswordInput = forwardRef<
  HTMLInputElement,
  BaseInputProps
>((props, ref) => {
  const {
    isError,
    className,
    ...rest
  } = props;
  const [show, setShow] = useState(false);
  
  const toggleVisibility = () => {
    setShow((prev) => !prev);
  }

  return (
    <div className='relative'>
      <input
        ref={ref}
        {...rest}
        placeholder="Type here"
        type={show ? 'text' : 'password'}
        className={cn("input w-full", {"input-error": isError}, className)}
      />
      <button 
        type='button' 
        className='absolute right-3 top-1/2 -translate-y-1/2 p-0 outline-none border-none ring-0' 
        onClick={toggleVisibility}
      >
        {show ? (
          <EyeOff className='h-4 w-4 text-gray-500' />
        ) : (
          <Eye className='h-4 w-4 text-gray-500' />
        )}
      </button>
    </div>
  )
})

export const Input = forwardRef<
  HTMLInputElement,
  BaseInputProps
>((props, ref) => {
  const {
    isError,
    className,
    ...rest
  } = props;

  return (
    <input
      ref={ref}
      className={cn("input w-full", className, {"input-error": isError})}
      placeholder="Type here"
      {...rest}
    />
  )
})