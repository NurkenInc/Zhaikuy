import { useToast } from './useToast';
import { AlertOctagon, Ban, BadgeCheck, Loader2 } from 'lucide-react';

export function useCustomToast() {
  const toast = useToast();

  const warningToast = (title: string, description: string) => {
    toast.open(
      <div>
        <div className='flex items-center'>
          <AlertOctagon className='text-orange-500 h-5 w-5' />
          {title}
        </div>
        {description}
      </div>,
      1500,
      'warning'
    )
  }

  const errorToast = (title: string, description: string) => {
    toast.open(
      <div>
        <div className='flex items-center'>
          <Ban className='text-reed-500 h-5 w-5' />
          {title}
        </div>
        {description}
      </div>,
      1500,
      'error'
    )
  }

  const successToast = (title: string, description: string) => {
    toast.open(
      <div>
        <div className='flex items-center'>
          <BadgeCheck className='text-green-500 h-5 w-5' />
          {title}
        </div>
        {description}
      </div>,
      1500,
      'success'
    )
  }

  const loadingToast = (title: string, description: string) => {
    toast.open(
      <div>
        <div className='flex items-center'>
          <Loader2 className='h-5 w-5 animate-spin' />
          {title}
        </div>
        {description}
      </div>,
      1500,
      'info'
    )
  }

  return {
    errorToast,
    warningToast,
    successToast,
    loadingToast,
  }
}