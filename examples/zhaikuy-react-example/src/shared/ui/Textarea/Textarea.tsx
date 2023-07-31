import { forwardRef } from 'react';
import { cn } from '@/shared/lib/utils/classes';

interface TextareaProps extends 
  React.InputHTMLAttributes<HTMLTextAreaElement> {
    isError: boolean
  }

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>((props, ref) => {
  const {
    isError,
    className,
    ...rest
  } = props;

  return (
    <textarea
      ref={ref}
      className={cn("textarea w-full", className, {"input-error": isError})}
      placeholder="Type here"
      {...rest}
    />
  )
})