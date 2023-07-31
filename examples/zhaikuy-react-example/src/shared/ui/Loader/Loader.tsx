import { Loader2 } from 'lucide-react'

export const Loader = () => {
  return (
    <div className='w-full h-full flex items-center mx-auto'>
      <Loader2 className='h-5 w-5 animate-spin' />
    </div>
  )
}