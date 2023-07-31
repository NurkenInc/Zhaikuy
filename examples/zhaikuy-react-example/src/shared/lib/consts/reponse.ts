import { HttpStatusCode } from '@/shared/lib/types/network'

export const defaultResponse = {
  data: null,
  error: null,
  isError: false,
  status: HttpStatusCode.OK 
}

export const notFoundResponse = { 
  ...defaultResponse,
  isError: true,
  error: 'Route not found',
  status: HttpStatusCode.NOT_FOUND,
}