import z from 'zod';
import { defaultResponse } from '@/shared/lib/consts/reponse';
import { HttpStatusCode } from '../types/network';

export const errorHandler = (error: unknown) => {
  if (error instanceof z.ZodError) {
    return {
      ...defaultResponse,
      error: error.message,
      status: HttpStatusCode.UNPROCESSABLE_ENTITY,
      isError: true
    };
  }
  if (error instanceof Error) {
    return {
      ...defaultResponse,
      error,
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      isError: true
    };
  }
  return { 
    ...defaultResponse,
    isError: true,
    error: 'Something went wrong',
    status: HttpStatusCode.INTERNAL_SERVER_ERROR,
  }
}