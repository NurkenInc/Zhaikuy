import { defaultResponse } from '@/shared/lib/consts/reponse';
import { Response } from '@/shared/lib/types/network';
import { HttpStatusCode } from '@/shared/lib/types/network';
import { ExtendedCredentials, baseCredentials, extendedCredentials, } from '@/shared/lib/validators/user';
import { errorHandler } from '@/shared/lib/utils/error';

const baseAuthUrl = 'auth';

export const loginController = <T, RT>(body: T): Response<RT> => {
  try {
    const data = JSON.parse(localStorage.getItem(baseAuthUrl)!) as ExtendedCredentials[];

    const {
      email,
      password
    } = baseCredentials.parse(body);

    const existingUser = data?.length ? data.find(user => user.email === email) : null;

    if (!existingUser) return {
      ...defaultResponse,
      isError: true,
      error: 'User doesn\'t exists',
      status: HttpStatusCode.NOT_FOUND
    }

    if (existingUser.password !== password) {
      return {
        ...defaultResponse,
        isError: true,
        error: 'Provided credentials are invalid',
        status: HttpStatusCode.UNAUTHORIZED
      }
    }

    const userRawData = {
      email: existingUser.email,
    }

    const newData = data.filter(user => user.email !== existingUser.email)

    // set that user is authenticated
    localStorage.setItem(baseAuthUrl, JSON.stringify([
      ...newData, 
      {...existingUser, authenticated: true}
    ]));

    return {
      ...defaultResponse,
      data: userRawData as RT
    };
  } catch (error) {
    return errorHandler(error);
  }
}

export const registerController = <T, RT>(body: T): Response<RT> => {
  try {
    const newUser = extendedCredentials.parse(body);
    const userRawData = {
      email: newUser.email,
    }

    const users = localStorage.getItem(baseAuthUrl);

    if (!users) {
      localStorage.setItem(baseAuthUrl, JSON.stringify([{...newUser, authenticated: true}]));
      return {
        ...defaultResponse,
        data: userRawData as RT
      }
    }

    const data = JSON.parse(users) as ExtendedCredentials[];

    const existingUser = data.find(user => user.email === newUser.email);

    if (existingUser) return {
      ...defaultResponse,
      isError: true,
      error: 'User already exists',
      status: HttpStatusCode.CONFLICT
    }

    localStorage.setItem(baseAuthUrl, JSON.stringify([
      ...users, 
      {...newUser, authenticated: true}
    ]));
    return {
      ...defaultResponse,
      data: userRawData as RT
    }
  } catch (error) {
    return errorHandler(error);
  }
}

export const logoutController = <T, RT>(): Response<RT> => {
  try {
    const users = localStorage.getItem(baseAuthUrl);

    if (!users) {
      return {
        ...defaultResponse,
        isError: true,
        error: 'You are not logged in',
        status: HttpStatusCode.UNAUTHORIZED
      }
    }

    const data = JSON.parse(users) as (ExtendedCredentials & {
      authenticated: boolean
    })[];

    const loggedUser = data.find(user => user.authenticated);

    if (!loggedUser) return {
      ...defaultResponse,
      isError: true,
      error: 'You are not logged in',
      status: HttpStatusCode.UNAUTHORIZED
    }

    const newData = data.filter(user => !user.authenticated);
    localStorage.setItem(baseAuthUrl, JSON.stringify([
      ...newData,
      {...loggedUser, authenticated: false}
    ]))
    return {
      ...defaultResponse
    }
  } catch (error) {
    return errorHandler(error);
  }
}
