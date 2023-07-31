import { Response } from '@/shared/lib/types/network';
import { routeHandler } from './handler';
import { extractRoute } from '../lib/utils/route';

const app = routeHandler();

export const $api = {
  get: async <RT, T = void>(url: string, body?: T): Promise<Response<RT>> => {
    return app.get<T, RT>(extractRoute(url), body);
  },
  post: async <T, RT>(url: string, body: T): Promise<Response<RT>> => {
    return app.post<T, RT>(extractRoute(url), body);
  },
  patch: async <T, RT>(url: string, body: T): Promise<Response<RT>> => {
    return app.patch<T, RT>(extractRoute(url), body);
  }
}
